'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  CheckCircle2, AlertCircle, ShieldCheck, ArrowUpRight, Loader2, Sparkles 
} from 'lucide-react';
import { EarthCanvas } from '@/components/3d/EarthCanvas';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [terminalStep, setTerminalStep] = useState<string>('Initializing Secure Channel...');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || status === 'sending') return;

    audioEngine.playClick();
    setStatus('sending');
    setErrorMessage('');
    setTerminalStep('Validating Payload & Anti-Spam Tokens...');

    const timer1 = setTimeout(() => setTerminalStep('Encrypting Direct Transmission...'), 300);
    const timer2 = setTimeout(() => setTerminalStep('Connecting to Resend Email Dispatch...'), 600);
    const timer3 = setTimeout(() => setTerminalStep('Transmitting to Anzar Khan...'), 900);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);

      if (res.ok && data.success) {
        setTerminalStep('✓ Transmission Transmitted & Logged');
        audioEngine.playChime();
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setTerminalStep('Transmission Failed');
        setStatus('error');
        setErrorMessage(data.error || 'Connection failed. Please reach out directly via anzark964@gmail.com.');
      }
    } catch (err) {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      console.error('Contact transmission error:', err);
      setStatus('error');
      setErrorMessage('Network transmission error. Please email anzark964@gmail.com directly.');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-28 relative flex items-center justify-center overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header (Master Prompt Section 28 Spec) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#7C5CFF]/15 border border-[#7C5CFF]/40 text-[#00E0FF] text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S BUILD SOMETHING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight uppercase mb-4 isolate-text transform-gpu">
            Have a project, opportunity, or <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">idea worth building?</span>
          </h2>
          <p className="text-slate-400 font-sans text-base max-w-xl mx-auto leading-relaxed">
            Reach out directly for software engineering roles, full-stack builds, AI/ML integrations, or technical collaborations.
          </p>
        </div>

        {/* Hero-Scale Clickable Direct Email Affordance */}
        <div className="text-center mb-16">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="EMAIL"
            className="group inline-flex items-center space-x-3 text-2xl sm:text-4xl lg:text-5xl font-black font-mono text-[#00E0FF] hover:text-white transition-colors border-b-2 border-[#00E0FF]/40 hover:border-[#00E0FF] pb-2"
          >
            <span>{PERSONAL_INFO.email}</span>
            <ArrowUpRight className="w-7 h-7 sm:w-10 sm:h-10 text-[#7C5CFF] group-hover:text-[#00E0FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 3D Globe & Verified Contact Strip */}
          <div className="lg:col-span-5 space-y-6">
            <EarthCanvas />

            <div className="glass-panel-active p-6 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-[#00E0FF]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-[#00E0FF] transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-[#00E0FF]" />
                <span className="text-slate-200">{PERSONAL_INFO.phone}</span>
                <span className="text-[10px] text-slate-500">(Direct / WhatsApp)</span>
              </div>

              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#7C5CFF]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              {/* Social Channels */}
              <div className="flex space-x-6 pt-4 border-t border-slate-800">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => audioEngine.playHover()}
                  data-cursor="GITHUB"
                  className="flex items-center space-x-2 text-[#00E0FF] hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => audioEngine.playHover()}
                  data-cursor="LINKEDIN"
                  className="flex items-center space-x-2 text-[#7C5CFF] hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct Communication Terminal Form */}
          <div className="lg:col-span-7 glass-panel-active rounded-3xl p-8 sm:p-10 border border-[#7C5CFF]/30">
            <h3 className="text-xl font-bold font-mono text-white mb-2 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Direct Communication Terminal</span>
            </h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Transmitted directly to Anzar Khan&apos;s priority inbox with automated confirmation receipt.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Protection Honeypot Trap (Hidden from users) */}
              <input
                type="text"
                name="company_trap"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Your Name / Organization <span className="text-[#00E0FF]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    disabled={status === 'sending'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Technical Recruiter / Engineering Lead"
                    className="w-full px-4 py-3 bg-[#090c18] border border-slate-800 rounded-xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-[#00E0FF] transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                    Email Address <span className="text-[#00E0FF]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={status === 'sending'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 bg-[#090c18] border border-slate-800 rounded-xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-[#00E0FF] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                  Subject <span className="text-slate-500">(Optional)</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  disabled={status === 'sending'}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Engineer Role / Product Collaboration"
                  className="w-full px-4 py-3 bg-[#090c18] border border-slate-800 rounded-xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-[#00E0FF] transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                  Message Body <span className="text-[#00E0FF]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  disabled={status === 'sending'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Discuss full-stack opportunities, DecisionLens, RiskShield AI, or project details..."
                  className="w-full px-4 py-3 bg-[#090c18] border border-slate-800 rounded-xl text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-[#00E0FF] transition-colors disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                onMouseEnter={() => audioEngine.playHover()}
                data-cursor="TRANSMIT"
                className="w-full py-4 bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00E0FF] bg-[length:200%_auto] hover:bg-right rounded-xl font-mono text-xs font-bold text-[#05060a] hover:brightness-110 transition-all duration-500 flex items-center justify-center space-x-2 shadow-lg shadow-[#00E0FF]/25 uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#05060a]" />
                    <span>{terminalStep}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Microinteraction Success Feedback (Master Prompt Section 29) */}
            {status === 'success' && (
              <div className="mt-5 p-4 bg-[#090c18] border border-emerald-400/50 rounded-xl text-xs font-mono text-emerald-400 flex items-center space-x-3 animate-fadeIn shadow-lg">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <div>
                  <div className="font-bold text-white mb-0.5">Message transmitted.</div>
                  <div>I&apos;ll get back to you soon. A confirmation email has been dispatched to your inbox.</div>
                </div>
              </div>
            )}

            {/* Error Feedback */}
            {status === 'error' && (
              <div className="mt-5 p-4 bg-[#090c18] border border-rose-500/50 rounded-xl text-xs font-mono text-rose-300 flex items-center space-x-3 animate-fadeIn shadow-lg">
                <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                <div>
                  <div className="font-bold text-rose-400 mb-0.5">Transmission Notice</div>
                  <div>{errorMessage}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
