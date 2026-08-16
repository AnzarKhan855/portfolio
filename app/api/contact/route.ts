import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Persistent rate limiting store (Client IP -> Timestamp ms)
const globalForRateLimit = globalThis as unknown as { contactRateLimitMap?: Map<string, number> };
const rateLimitMap = globalForRateLimit.contactRateLimitMap || new Map<string, number>();
if (!globalForRateLimit.contactRateLimitMap) {
  globalForRateLimit.contactRateLimitMap = rateLimitMap;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, subject, message, honeypot } = body || {};

    // 1. Honeypot Spam Protection Check
    if (honeypot && typeof honeypot === 'string' && honeypot.trim() !== '') {
      // Return 200 OK silently to trap automated spam bots without executing email dispatch
      return NextResponse.json({ success: true, message: 'Transmission received.' }, { status: 200 });
    }

    // 2. Validate Environment Secrets
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'anzark964@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'Anzar Khan <onboarding@resend.dev>';

    if (!resendApiKey || resendApiKey.trim() === '') {
      console.error('[SERVER ERROR] RESEND_API_KEY is not configured in environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'RESEND_API_KEY environment variable is missing on the server. Please add RESEND_API_KEY to .env.local.',
        },
        { status: 500 }
      );
    }

    // 3. Server-Side Input Validation & Sanitization
    const sanitizedName = typeof name === 'string' ? name.trim() : '';
    const sanitizedEmail = typeof email === 'string' ? email.trim() : '';
    const sanitizedSubject = typeof subject === 'string' ? subject.trim() : '';
    const sanitizedMessage = typeof message === 'string' ? message.trim() : '';

    if (!sanitizedName) {
      return NextResponse.json({ success: false, error: 'Visitor name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!sanitizedMessage || sanitizedMessage.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message payload must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    // 4. Rate Limiting (1 submission per IP every 30 seconds)
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';
    const now = Date.now();
    const lastSubmission = rateLimitMap.get(clientIp);

    if (lastSubmission && now - lastSubmission < 30000) {
      return NextResponse.json(
        {
          success: false,
          error: 'Transmission rate limit exceeded. Please wait 30 seconds before sending another message.',
        },
        { status: 429 }
      );
    }
    rateLimitMap.set(clientIp, now);

    const timestamp = new Date().toISOString();
    const userAgent = req.headers.get('user-agent') || 'Unknown Browser/Client';
    const finalSubject = sanitizedSubject ? sanitizedSubject : `Portfolio Transmission from ${sanitizedName}`;

    // Initialize Official Resend SDK Client
    const resend = new Resend(resendApiKey);

    // 5. Send Primary Email to Anzar Khan (anzark964@gmail.com)
    const primaryEmailResponse = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: sanitizedEmail,
      subject: `⚡ [PORTFOLIO TRANSMISSION] ${finalSubject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05060a; color: #f8fafc; padding: 32px; border-radius: 16px; border: 1px solid rgba(124, 92, 255, 0.4); max-width: 650px; margin: 0 auto;">
          <div style="border-bottom: 2px solid #00E0FF; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #00E0FF; font-size: 20px; font-weight: 800; margin: 0; text-transform: uppercase; tracking: 0.1em;">
              ⚡ NEW DIRECT PORTFOLIO TRANSMISSION
            </h1>
            <p style="color: #7C5CFF; font-size: 12px; font-family: monospace; margin: 4px 0 0 0;">
              DISPATCHED FROM ANZAR KHAN AI OS TERMINAL
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600; width: 130px;">Visitor Name:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 700;">${sanitizedName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Visitor Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${sanitizedEmail}" style="color: #00E0FF; text-decoration: none;">${sanitizedEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #ffffff;">${finalSubject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Timestamp:</td>
              <td style="padding: 8px 0; color: #cbd5e1; font-family: monospace;">${timestamp}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">Client IP:</td>
              <td style="padding: 8px 0; color: #cbd5e1; font-family: monospace;">${clientIp}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: 600;">User Agent:</td>
              <td style="padding: 8px 0; color: #cbd5e1; font-family: monospace; font-size: 11px;">${userAgent}</td>
            </tr>
          </table>

          <div style="background-color: #090c18; padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 224, 255, 0.2); margin-bottom: 24px;">
            <h3 style="color: #00E0FF; font-size: 12px; font-family: monospace; margin: 0 0 12px 0; text-transform: uppercase;">
              // MESSAGE PAYLOAD CONTENT
            </h3>
            <p style="color: #f1f5f9; font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin: 0;">
              ${sanitizedMessage}
            </p>
          </div>

          <div style="border-t: 1px solid #1e293b; pt: 16px; font-size: 11px; color: #64748b; font-family: monospace; text-align: center;">
            Anzar Khan AI OS Portfolio Terminal • Automated API Dispatch
          </div>
        </div>
      `,
    });

    if (primaryEmailResponse.error) {
      console.error('[RESEND PRIMARY EMAIL ERROR]', primaryEmailResponse.error);
      return NextResponse.json(
        { success: false, error: primaryEmailResponse.error.message || 'Failed to dispatch email via Resend SDK.' },
        { status: 500 }
      );
    }

    // 6. Send Automatic Confirmation Email Back to Visitor
    try {
      await resend.emails.send({
        from: fromEmail,
        to: [sanitizedEmail],
        subject: `[CONFIRMATION] We received your message — Anzar Khan`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05060a; color: #f8fafc; padding: 32px; border-radius: 16px; border: 1px solid rgba(0, 224, 255, 0.4); max-width: 600px; margin: 0 auto;">
            <div style="border-bottom: 2px solid #7C5CFF; padding-bottom: 16px; margin-bottom: 24px;">
              <h2 style="color: #00E0FF; font-size: 20px; font-weight: 800; margin: 0;">
                Transmission Confirmed // Anzar Khan
              </h2>
            </div>
            
            <p style="color: #e2e8f0; font-size: 14px; line-height: 1.6;">
              Hello <strong>${sanitizedName}</strong>,
            </p>
            
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
              Thank you for reaching out via my direct communication terminal. Your message regarding <em>"${finalSubject}"</em> has been received successfully and logged into my priority channel.
            </p>

            <div style="background-color: #090c18; border-left: 3px solid #00E0FF; padding: 16px; margin: 20px 0; border-radius: 4px;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0 0 6px 0; font-family: monospace;">YOUR SUBMITTED MESSAGE:</p>
              <p style="color: #e2e8f0; font-size: 13px; margin: 0; font-style: italic; white-space: pre-wrap;">
                "${sanitizedMessage}"
              </p>
            </div>

            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6;">
              I will review your transmission and respond to <strong>${sanitizedEmail}</strong> as soon as possible.
            </p>

            <br />
            <p style="color: #f8fafc; font-size: 14px; font-weight: 700; margin: 0;">
              Best regards,<br />
              <span style="color: #00E0FF;">Anzar Khan</span><br />
              <span style="color: #7C5CFF; font-size: 12px; font-weight: 400;">AI Engineer & Systems Specialist</span>
            </p>
          </div>
        `,
      });
    } catch (confError) {
      console.warn('[RESEND CONFIRMATION EMAIL WARNING] Primary email sent, but confirmation email failed:', confError);
    }

    return NextResponse.json({
      success: true,
      message: 'Transmission successfully delivered to Anzar Khan (anzark964@gmail.com).',
      timestamp,
      id: primaryEmailResponse.data?.id,
    });
  } catch (error: any) {
    console.error('[CONTACT API EXCEPTION]', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Server encountered an unexpected transmission failure.' },
      { status: 500 }
    );
  }
}
