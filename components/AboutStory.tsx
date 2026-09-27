'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, Cpu, Award, BookOpen, Layers, ShieldCheck, Code2, 
  Database, Key, Server, BarChart3, Wrench, ChevronDown, CheckCircle2,
  Sparkles, Activity, Rocket, ArrowRight
} from 'lucide-react';
import { 
  PERSONAL_INFO, VERIFIED_METRICS, TECHNICAL_SKILL_GROUPS, 
  ENGINEERING_DNA, CERTIFICATIONS_AND_CREDENTIALS 
} from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const ICON_MAP: Record<string, any> = {
  Layers: Layers,
  Server: Server,
  Database: Database,
  Cpu: Cpu,
  BarChart3: BarChart3,
  Wrench: Wrench,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
};

export const AboutStory: React.FC = () => {
  const [expandedDna, setExpandedDna] = useState<string | null>(null);

  const toggleDna = (title: string) => {
    audioEngine.playClick();
    setExpandedDna((prev) => (prev === title ? null : title));
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Recruiter Executive Summary Card */}
        <div className="mb-20 glass-panel-active p-8 sm:p-14 rounded-3xl border border-[#00E0FF]/30 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00E0FF]/15 to-[#7C5CFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00E0FF] animate-pulse" />
            <span>ENGINEERING IDENTITY & CORE PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display uppercase tracking-tight mb-6 isolate-text transform-gpu">
            From Architecture & APIs to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Production Systems</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-xl font-sans leading-relaxed max-w-5xl mb-5 font-normal">
            {PERSONAL_INFO.name} is a Full-Stack Developer & AI/ML Engineer focused on building modern web applications and intelligent software systems. His work spans MERN applications, AI-powered platforms, data analytics, automation, REST APIs, cloud deployments, and interactive dashboards.
          </p>

          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed max-w-5xl mb-8">
            &ldquo;{PERSONAL_INFO.valueProposition}&rdquo; — Rather than following shallow tutorials, Anzar architects end-to-end products: designing normalized SQL & NoSQL persistence, implementing clean async FastAPI microservices, engineering low-latency vector RAG retrieval, and crafting 60 FPS accessible web interfaces.
          </p>

          {/* Verified Engineering Metrics Row (Section 11) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-slate-800/80">
            {VERIFIED_METRICS.map((metric, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-[#090c18] border border-slate-800/80 hover:border-[#00E0FF]/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-1">
                  <span className="text-[#00E0FF]">{metric.value}</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-200 uppercase tracking-tight">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5 leading-tight">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header: Engineering DNA (Section 48) */}
        <div id="dna" className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
              {`// SECTION 48 — ENGINEERING MATRIX`}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase mb-4 isolate-text transform-gpu">
            Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">DNA</span>
          </h2>
          <p className="text-slate-400 font-sans text-base max-w-3xl leading-relaxed">
            Every layer of modern software development mastered through concrete, production-grade architectures. Click any domain below to inspect architectural implementation and verified project proof.
          </p>
        </div>

        {/* Engineering DNA Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {ENGINEERING_DNA.map((dna) => {
            const isExpanded = expandedDna === dna.title;
            return (
              <div
                key={dna.title}
                onClick={() => toggleDna(dna.title)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  isExpanded
                    ? 'bg-[#0a0e20] border-[#00E0FF] shadow-[0_0_25px_rgba(0,224,255,0.2)]'
                    : 'bg-[#090c18]/90 border-slate-800/80 hover:border-[#7C5CFF]/50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-semibold"
                    style={{ backgroundColor: `${dna.color}15`, color: dna.color }}
                  >
                    {dna.tag}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-[#00E0FF]' : ''
                    }`}
                  />
                </div>

                <h3 className="text-lg font-bold font-mono text-white mb-2">
                  {dna.title}
                </h3>

                <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                  {dna.description}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-slate-800 text-xs font-mono space-y-2 overflow-hidden"
                    >
                      <div className="text-slate-300 font-sans leading-relaxed">
                        {dna.description}
                      </div>
                      <div className="text-[11px] text-[#00E0FF] pt-2">
                        <span className="text-slate-500 font-mono">PROVEN IN:</span> {dna.provenIn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Technical Skills Ecosystem (Section 12) */}
        <div id="skills" className="mb-24">
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
              {`// SECTION 12 — TECHNICAL SKILLS ECOSYSTEM`}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase mb-4 isolate-text transform-gpu">
            Technical Skills & <span className="text-[#00E0FF]">Infrastructure</span>
          </h2>
          <p className="text-slate-400 font-sans text-base max-w-3xl leading-relaxed mb-10">
            Strictly verified technologies actively utilized across Anzar&apos;s open-source repositories, production deployments, and academic coursework.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECHNICAL_SKILL_GROUPS.map((group, idx) => {
              const IconComp = ICON_MAP[group.iconName] || Terminal;
              return (
                <div
                  key={group.category}
                  className="glass-panel-active p-6 rounded-2xl border border-slate-800/90 hover:border-[#00E0FF]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2.5 mb-4">
                      <div className="p-2 rounded-lg bg-[#7C5CFF]/15 text-[#00E0FF]">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-[#090c18] border border-slate-800 text-slate-200 font-mono text-xs hover:border-[#00E0FF]/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Credentials, Education & Research Section */}
        <div className="glass-panel-active p-8 sm:p-10 rounded-3xl border border-[#7C5CFF]/30">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-5 h-5 text-[#00E0FF]" />
            <h3 className="text-xl font-bold font-mono text-white uppercase">
              Education, Research & Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS_AND_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#090c18] border border-slate-800/90 hover:border-[#00E0FF]/40 transition-all"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-[#00E0FF] uppercase mb-1.5">
                  <span>[{cred.type}]</span>
                  <span>{cred.year}</span>
                </div>
                <div className="text-sm font-bold text-white font-mono leading-snug mb-1">
                  {cred.title}
                </div>
                <div className="text-xs text-slate-400 font-sans">
                  {cred.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
