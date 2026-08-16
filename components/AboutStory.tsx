'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Award, BookOpen, Layers, ShieldCheck, Code2, Database, Key, Server } from 'lucide-react';
import { PERSONAL_INFO, TECHNICAL_SKILL_GROUPS, CERTIFICATIONS_AND_CREDENTIALS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const SKILL_ICONS: Record<string, any> = {
  Languages: Code2,
  Frontend: Layers,
  Backend: Server,
  'AI / LLM': Cpu,
  'Data / Vector DB': Database,
  'Auth & Tools': Key,
  'Deployment & CS Core': ShieldCheck,
};

export const AboutStory: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
            <Terminal className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
            {`// SYSTEMS & CAPABILITIES OVERVIEW`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6 uppercase isolate-text transform-gpu">
          AI Architecture & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Engineering Matrix</span>
        </h2>

        <p className="text-slate-300 max-w-4xl text-base sm:text-lg mb-12 font-sans leading-relaxed">
          {PERSONAL_INFO.positioning}
        </p>

        {/* Focus Areas Schematic Tag Cluster */}
        <div className="mb-16 glass-panel-active p-6 rounded-2xl border border-[#7C5CFF]/20">
          <div className="text-xs font-mono text-[#00E0FF] uppercase tracking-wider mb-4 flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-[#7C5CFF]" />
            <span>CORE INTEREST & ENGINEERING FOCUS DOMAINS</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PERSONAL_INFO.focusAreas.map((area, idx) => (
              <span
                key={idx}
                onMouseEnter={() => audioEngine.playHover()}
                data-cursor="DOMAIN"
                className="px-3.5 py-1.5 rounded-lg bg-[#090c18] border border-[#7C5CFF]/40 hover:border-[#00E0FF]/70 text-slate-100 font-mono text-xs shadow-sm hover:text-[#00E0FF] transition-all duration-300"
              >
                # {area}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skills — Verbatim 7 Labeled Panels */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-mono text-white mb-6 uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#00E0FF]" />
            <span>Technical Skills & Infrastructure Stack</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECHNICAL_SKILL_GROUPS.map((group, idx) => {
              const IconComponent = SKILL_ICONS[group.category] || Code2;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-panel-active p-6 rounded-2xl border border-[#7C5CFF]/20 flex flex-col justify-between hover:border-[#00E0FF]/50 transition-all group"
                >
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="p-2 rounded-lg bg-[#7C5CFF]/20 text-[#00E0FF]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold font-mono text-[#00E0FF] uppercase tracking-wider">
                        {group.category}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded bg-[#090c18] border border-[#7C5CFF]/30 text-slate-100 font-mono text-xs group-hover:border-[#00E0FF]/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Training & Certifications Credibility Strip */}
        <div className="glass-panel-active p-8 rounded-2xl border border-[#7C5CFF]/30">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-5 h-5 text-[#00E0FF]" />
            <h3 className="text-lg font-bold font-mono text-white uppercase">
              Training, Certifications & Research Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS_AND_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#090c15] border border-slate-800 hover:border-[#00E0FF]/40 transition-colors"
              >
                <div className="flex justify-between items-center text-[10px] font-mono text-[#00E0FF] uppercase mb-1">
                  <span>[{cred.type}]</span>
                  <span>{cred.year}</span>
                </div>
                <div className="text-sm font-bold text-white font-mono leading-tight mb-1">
                  {cred.title}
                </div>
                <div className="text-xs text-slate-400 font-mono">
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
