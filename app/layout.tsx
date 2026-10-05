import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anzar Khan — Full-Stack Developer | MERN | AI/ML",
  description:
    "Anzar Khan is a Full-Stack Developer and AI/ML Engineer specializing in MERN applications, Next.js, FastAPI, RAG pipelines, predictive analytics platforms, and intelligent production software.",
  keywords: [
    "Anzar Khan",
    "Full-Stack Developer",
    "MERN Stack Developer",
    "AI/ML Engineer",
    "Next.js Developer",
    "FastAPI Python",
    "LOOP 2.0",
    "AI Customer Feedback Intelligence",
    "DecisionLens AI",
    "RiskShield AI",
    "CampusAgent AI",
    "EvalMentor AI",
    "AI Resume Builder",
    "RAG Pipelines",
    "Qdrant Vector DB",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "Data Analytics",
    "Three.js",
  ],
  authors: [
    {
      name: "Anzar Khan",
      url: "https://github.com/AnzarKhan855",
    },
  ],
  creator: "Anzar Khan",
  metadataBase: new URL("https://anzarbuilds.vercel.app"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Anzar Khan — Full-Stack Developer | MERN | AI/ML",
    description:
      "Full-Stack Developer and AI/ML Engineer building intelligent products at the intersection of full-stack engineering, AI, analytics, and automation.",
    url: "https://anzarbuilds.vercel.app",
    siteName: "Anzar Khan — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Anzar Khan — Full-Stack Developer | MERN | AI/ML",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anzar Khan — Full-Stack Developer | MERN | AI/ML",
    description:
      "Full-Stack Developer and AI/ML Engineer building production web applications, AI systems, analytics platforms, and intelligent software.",
    creator: "@AnzarKhan855",
    images: ["/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://anzarbuilds.vercel.app/#person",
      name: "Anzar Khan",
      jobTitle: "Full-Stack Developer & AI/ML Engineer",
      description:
        "Full-Stack Developer & AI/ML Engineer specializing in MERN applications, Next.js, FastAPI, RAG systems, and enterprise data analytics.",
      url: "https://anzarbuilds.vercel.app",
      sameAs: [
        "https://github.com/AnzarKhan855",
        "https://www.linkedin.com/in/anzar-khan-522b712ab",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Allenhouse Institute of Technology",
      },
      knowsAbout: [
        "Full-Stack Development",
        "MERN Stack",
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "Python",
        "Artificial Intelligence",
        "Machine Learning",
        "Retrieval-Augmented Generation",
        "PostgreSQL",
        "MongoDB",
        "Qdrant Vector Database",
        "Data Analytics",
        "Customer Feedback Intelligence",
        "Enterprise SaaS Architecture",
        "System Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://anzarbuilds.vercel.app/#website",
      url: "https://anzarbuilds.vercel.app",
      name: "Anzar Khan — Full-Stack Developer Portfolio",
      description: "Interactive 3D Engineering Portfolio of Anzar Khan",
      publisher: {
        "@id": "https://anzarbuilds.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="bg-[#05060a] text-slate-100 antialiased selection:bg-[#00E0FF] selection:text-[#05060a]">
        {children}

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}