'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AppWindow, Brain, BarChart3, Cog, Server, Wrench, 
  ArrowUpRight, Sparkles, CheckCircle2 
} from 'lucide-react';
import { audioEngine } from '@/lib/audio';

const BUILD_PILLARS = [
  {
    id: 'full-stack',
    title: 'FULL-STACK APPLICATIONS',
    tagline: 'Modern Web Architecture',
    description: 'Production-ready web applications built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Focused on sub-second initial loads, responsive layouts, and accessible component hierarchies.',
    icon: AppWindow,
    color: '#00FFA3',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
    example: 'DecisionLens, CampusAgent, Resume Builder',
  },
  {
    id: 'ai-systems',
    title: 'AI-POWERED SYSTEMS',
    tagline: 'Operational Machine Learning & RAG',
    description: 'Autonomous AI agents, vector semantic retrieval via Qdrant, tree-based fraud classification (XGBoost), and low-latency LLM inference accelerating business decisions.',
    icon: Brain,
    color: '#7C5CFF',
    tech: ['RAG', 'Qdrant Vector DB', 'XGBoost', 'TreeSHAP', 'Groq LPU'],
    example: 'RiskShield AI, CampusAgent AI, EvalMentor AI',
  },
  {
    id: 'data-analytics',
    title: 'DATA & ANALYTICS PLATFORMS',
    tagline: 'Statistical Profiling & Forecasting',
    description: 'End-to-end analytical data engines ingesting large transactional records, computing statistical time-series forecasts, and rendering interactive KPI visualizations.',
    icon: BarChart3,
    color: '#00E0FF',
    tech: ['Python Pandas', 'Time-Series', 'Recharts', 'PostgreSQL 3NF'],
    example: 'DecisionLens AI, BookStore SQL Analytics',
  },
  {
    id: 'automation',
    title: 'AUTOMATION & PIPELINES',
    tagline: 'Rule Compilers & Document Pipelines',
    description: 'AST rule compilation engines evaluating complex business logic in memory, automated PDF document parsing, and continuous data validation loops.',
    icon: Cog,
    color: '#FFD700',
    tech: ['AST Compilers', 'PyMuPDF', 'Background Tasks', 'Clean Architecture'],
    example: 'RiskShield Rule Engine, CampusAgent Document Parser',
  },
  {
    id: 'intelligent-apis',
    title: 'INTELLIGENT APIs',
    tagline: 'High-Throughput Microservices',
    description: 'Asynchronous Python microservices and API gateways built with FastAPI. Featuring strict Pydantic schemas, dependency injection, and JWT security tokens.',
    icon: Server,
    color: '#38BDF8',
    tech: ['FastAPI', 'Python 3.12', 'JWT Auth', 'Pydantic V2', 'REST APIs'],
    example: 'RiskShield (17 APIs), CampusAgent (15+ APIs)',
  },
  {
    id: 'developer-tools',
    title: 'DEVELOPER TOOLS',
    tagline: 'Productivity & Testing Utilities',
    description: 'Developer productivity tools, ATS resume compliance engines scoring 98/100, reproducible Docker containerization, and automated API documentation.',
    icon: Wrench,
    color: '#F43F5E',
    tech: ['Docker', 'ATS Engine', 'OpenAPI / Swagger', 'Git & CI/CD'],
    example: 'AI Resume Builder, DecisionLens Container Mesh',
  },
];

export const WhatIBuild: React.FC = () => {
  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-i-build" className="py-24 relative overflow-hidden bg-[#05060a]">
      {/* Subtle Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-[#00FFA3]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00FFA3] tracking-widest uppercase">
                {`// SYSTEM PILLARS — END-TO-END CAPABILITIES`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              What I <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFA3] via-[#00E0FF] to-[#7C5CFF] inline-block">Build</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Explore the core engineering domains behind my production systems — from full-stack interfaces and asynchronous microservices to AI decision engines and data analytics.
            </p>
          </div>

          <button
            onClick={() => scrollTo('universe')}
            onMouseEnter={() => audioEngine.playHover()}
            className="px-5 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00FFA3] text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-2 transition-all shrink-0"
          >
            <span>Explore Technology Universe</span>
            <ArrowUpRight className="w-4 h-4 text-[#00FFA3]" />
          </button>
        </div>

        {/* 6 Clean Architectural Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUILD_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-panel-active rounded-3xl p-7 border border-slate-800 hover:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Hover Backlight */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: pillar.color }}
                />

                <div>
                  {/* Card Top: Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="p-3 rounded-2xl border transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${pillar.color}15`, 
                        borderColor: `${pillar.color}40`,
                        color: pillar.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold font-mono text-white mb-1 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <div 
                    className="text-xs font-mono font-medium mb-3"
                    style={{ color: pillar.color }}
                  >
                    {pillar.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Tech Micro-Chips & Proven In */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.tech.map((t, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-2 py-0.5 rounded-md bg-[#05060a] border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">Proven in: {pillar.example}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
