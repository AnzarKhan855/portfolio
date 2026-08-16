import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anzar Khan | AI Engineer & Enterprise Intelligence Builder',
  description:
    'Interactive 3D Portfolio & AI Product Showcase of Anzar Khan — Building Enterprise AI Systems, RAG Pipelines, Agentic Workflows, and Decision Intelligence Platforms.',
  keywords: [
    'Anzar Khan',
    'AI Engineer',
    'Machine Learning Engineer',
    'DecisionLens AI',
    'CampusAgent AI',
    'EvalMentor AI',
    'RAG Architect',
    'LLM Applications',
    'FastAPI',
    'Next.js',
    'Three.js',
    'Qdrant',
  ],
  authors: [{ name: 'Anzar Khan', url: 'https://github.com/AnzarKhan855' }],
  creator: 'Anzar Khan',
  manifest: '/manifest.json',
  metadataBase: new URL('https://anzarkhan.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Anzar Khan | AI Engineer & Enterprise Intelligence Builder',
    description:
      'Interactive 3D AI Product Showcase & Portfolio — RAG Infrastructure, Agentic AI Workflows, and Decision Intelligence Platforms by Anzar Khan.',
    url: 'https://anzarkhan.dev',
    siteName: 'Anzar Khan AI Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-preview.png',
        width: 1200,
        height: 630,
        alt: 'Anzar Khan — AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anzar Khan | AI Engineer & Enterprise Intelligence Builder',
    description:
      'Interactive 3D Portfolio of Anzar Khan — Enterprise AI Systems, DecisionLens AI, and High-Performance RAG Pipelines.',
    images: ['/og-preview.png'],
    creator: '@AnzarKhan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Anzar Khan',
    jobTitle: 'AI Engineer & Enterprise Intelligence Specialist',
    description:
      'B.Tech AI & ML student specializing in RAG architectures, LLM systems, Agentic AI workflows, and Enterprise Decision Intelligence.',
    sameAs: [
      'https://github.com/AnzarKhan855',
      'https://www.linkedin.com/in/anzar-khan-522b712ab',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Retrieval-Augmented Generation (RAG)',
      'Large Language Models (LLMs)',
      'FastAPI',
      'Next.js',
      'Qdrant Vector Database',
      'React Three Fiber',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#05060a] text-slate-100 antialiased selection:bg-[#00E0FF] selection:text-[#05060a]">
        {children}
      </body>
    </html>
  );
}
