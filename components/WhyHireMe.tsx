'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Brain, Cpu, Server, Layout, Rocket, Zap, ShieldCheck
} from 'lucide-react';
import { audioEngine } from '@/lib/audio';

export const WhyHireMe: React.FC = () => {
  const pillars = [
    {
      title: 'Problem Solving & System Thinking',
      icon: Brain,
      color: '#00E0FF',
      desc: 'Translating complex enterprise requirements into production-grade, highly maintainable algorithmic solutions.',
      highlights: ['Data structures & algorithm design', 'Async pipeline optimization', 'Clean architecture principles'],
    },
    {
      title: 'System Design & Scalable Infrastructure',
      icon: Cpu,
      color: '#7C5CFF',
      desc: 'Designing low-latency backend microservices and vector indexing strategies for high throughput data ingestion.',
      highlights: ['Qdrant vector search < 45ms', 'FastAPI & Redis concurrency', 'RESTful & WebSocket streaming'],
    },
    {
      title: 'Backend Architecture',
      icon: Server,
      color: '#10B981',
      desc: 'Building resilient API servers with asynchronous processing, rate limiting, and automated health telemetry.',
      highlights: ['Python / FastAPI / PyTorch', 'SQL & Vector DB schemas', 'Production error boundaries'],
    },
    {
      title: 'Frontend UI / UX & Motion Polish',
      icon: Layout,
      color: '#F59E0B',
      desc: 'Crafting responsive, high-performance web applications with custom Three.js visuals and Framer Motion easing.',
      highlights: ['Next.js 15 App Router & React 19', 'Tailwind & Web Audio API', '60 FPS render pipelines'],
    },
    {
      title: 'AI / RAG Engineering',
      icon: Zap,
      color: '#00E0FF',
      desc: 'Specializing in retrieval-augmented generation, chunking strategies, embedding models, and LLM orchestration.',
      highlights: ['Hugging Face & OpenAI embeddings', 'Groq & Llama 3 citations', 'Semantic search precision'],
    },
    {
      title: 'Cloud & Automated Deployment',
      icon: Rocket,
      color: '#EC4899',
      desc: 'Deploying full-stack AI web platforms with continuous integration on Vercel, Render, and cloud container environments.',
      highlights: ['Production Vercel & Render setups', 'Docker containerization', 'Automated CI/CD pipelines'],
    },
    {
      title: 'Fast Autonomous Learning',
      icon: ShieldCheck,
      color: '#10B981',
      desc: 'Mastering new AI frameworks, vector databases, and software design paradigms rapidly to deliver instant impact.',
      highlights: ['Autonomous R&D workflow', 'Latest AI papers & tools', 'Continuous self-improvement'],
    },
    {
      title: 'Complete Engineering Ownership',
      icon: CheckCircle2,
      color: '#7C5CFF',
      desc: 'Taking total responsibility from raw concept and system design to live production deployment and post-launch polish.',
      highlights: ['End-to-end full-stack build', 'Production freeze auditing', 'Zero compromise on quality'],
    },
  ];

  return (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-[#05060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
            <Brain className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
            {`// RECRUITER CORE VALUE MATRIX`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4 uppercase isolate-text transform-gpu">
          Why Hire <span className="text-[#00E0FF]">Anzar Khan</span>
        </h2>
        <p className="text-slate-300 font-sans text-base sm:text-lg mb-12 max-w-3xl leading-relaxed">
          Full-stack AI engineer capable of designing, building, deploying, and maintaining production-grade intelligent systems — with zero reliance on academic toy examples.
        </p>

        {/* 8-Pillar Value Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, idx) => {
            const IconComp = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={() => audioEngine.playHover()}
                className="glass-panel-active p-6 rounded-2xl border border-slate-800 hover:border-[#00E0FF]/50 transition-all flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#090c15] border border-slate-800 text-[#00E0FF] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" style={{ color: p.color }} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">PILLAR 0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold font-sans text-white mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs font-sans text-slate-300 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                  {p.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-[#00E0FF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
