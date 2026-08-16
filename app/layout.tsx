import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Anzar Khan | AI Engineer & Enterprise Intelligence Builder",

  description:
    "Interactive 3D Portfolio & AI Product Showcase of Anzar Khan — Building Enterprise AI Systems, RAG Pipelines, Agentic Workflows, and Decision Intelligence Platforms.",

  keywords: [
    "Anzar Khan",
    "AI Engineer",
    "Machine Learning Engineer",
    "DecisionLens AI",
    "CampusAgent AI",
    "EvalMentor AI",
    "Resume Builder",
    "Artificial Intelligence",
    "LLM",
    "RAG",
    "Agentic AI",
    "FastAPI",
    "Next.js",
    "Three.js",
    "React",
    "Qdrant",
    "Python",
    "TypeScript",
  ],

  authors: [
    {
      name: "Anzar Khan",
      url: "https://github.com/AnzarKhan855",
    },
  ],

  creator: "Anzar Khan",

  metadataBase: new URL("https://anzarkhan.dev"),

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Anzar Khan | AI Engineer & Enterprise Intelligence Builder",

    description:
      "Interactive 3D AI Product Showcase featuring Enterprise AI Systems, RAG Pipelines, Agentic AI Workflows, and Decision Intelligence Platforms.",

    url: "https://anzarkhan.dev",

    siteName: "Anzar Khan Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Anzar Khan Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Anzar Khan | AI Engineer",

    description:
      "Interactive 3D Portfolio showcasing Enterprise AI Systems, RAG Pipelines, Agentic AI Workflows and Decision Intelligence.",

    creator: "@AnzarKhan",

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

  "@type": "ProfilePage",

  mainEntity: {
    "@type": "Person",

    name: "Anzar Khan",

    jobTitle: "AI Engineer",

    description:
      "AI Engineer specializing in Enterprise AI Systems, Retrieval-Augmented Generation (RAG), Agentic AI, LLM Applications and Decision Intelligence.",

    url: "https://anzarkhan.dev",

    image: "https://anzarkhan.dev/og-preview.png",

    sameAs: [
      "https://github.com/AnzarKhan855",
      "https://www.linkedin.com/in/anzar-khan-522b712ab",
    ],

    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Large Language Models",
      "Retrieval-Augmented Generation",
      "Agentic AI",
      "FastAPI",
      "Next.js",
      "React",
      "Three.js",
      "Python",
      "TypeScript",
      "MongoDB",
      "Qdrant",
    ],
  },
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