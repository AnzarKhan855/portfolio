'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Github, Linkedin, Mail, Cpu, Terminal } from 'lucide-react';
import { HeroBrainCanvas } from '@/components/3d/HeroBrainCanvas';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-[#05060a]">
      {/* 3D R3F Neural Brain / Interactive Core Canvas */}
      <HeroBrainCanvas />

      {/* Cyber Grid Scrim */}
      <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center justify-center text-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#090c15]/90 border border-[#7C5CFF]/40 text-[#00E0FF] text-xs font-mono mb-8 backdrop-blur-xl shadow-[0_0_25px_rgba(124,92,255,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
          <span>PRODUCTION-GRADE AI SYSTEMS ARCHITECT</span>
        </motion.div>

        {/* Oversized Active Theory Sparse Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight text-white font-display uppercase mb-4 isolate-text transform-gpu"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 inline-block">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        {/* Positioning Subline (Verbatim from Master Prompt) */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl lg:text-3xl font-mono text-[#00E0FF] font-medium glow-cyan max-w-4xl mb-4 leading-snug"
        >
          {PERSONAL_INFO.headline}
        </motion.p>

        {/* Academic Details (Verbatim from Master Prompt) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm font-mono text-slate-400 max-w-2xl mb-12 flex items-center justify-center space-x-2"
        >
          <Terminal className="w-4 h-4 text-[#7C5CFF]" />
          <span>
            {PERSONAL_INFO.education.degree} — {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.years})
          </span>
        </motion.p>

        {/* Action Controls & Enter the Lab Cue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
        >
          {/* Main "Enter the Lab" Scroll Cue */}
          <button
            onClick={() => scrollTo('decisionlens')}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="ENTER"
            className="group relative px-8 py-4 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#05060a] bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00E0FF] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_35px_rgba(0,224,255,0.5)] flex items-center space-x-3 transform hover:-translate-y-1"
          >
            <Cpu className="w-4 h-4 text-[#05060a] group-hover:rotate-180 transition-transform duration-700" />
            <span>ENTER THE AI LAB {`//`} EXPLORE DECISIONLENS</span>
            <ArrowDown className="w-4 h-4 text-[#05060a] group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary Work View */}
          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="WORK"
            className="px-6 py-4 rounded-full font-mono text-xs font-semibold text-slate-300 bg-[#090c15]/90 hover:bg-[#0f1424] border border-[#7C5CFF]/30 hover:border-[#00E0FF]/60 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>VIEW SHIPPED PRODUCTS</span>
          </button>
        </motion.div>

        {/* 🌐 Live Products Quick Jump Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2.5 max-w-3xl"
        >
          <span className="text-xs font-mono text-[#00E0FF] uppercase tracking-wider mr-2 flex items-center space-x-1">
            <span>🌐 Live Products:</span>
          </span>
          <a
            href="https://decisionlens-enterprise-analytics.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1 rounded-lg bg-[#090c15] border border-[#00E0FF]/40 text-[#00E0FF] hover:bg-[#00E0FF]/10 text-xs font-mono transition-all flex items-center space-x-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>DecisionLens AI</span>
          </a>
          <a
            href="https://campusagent-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1 rounded-lg bg-[#090c15] border border-[#7C5CFF]/40 text-purple-300 hover:bg-[#7C5CFF]/10 text-xs font-mono transition-all flex items-center space-x-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>CampusAgent AI</span>
          </a>
          <a
            href="https://evalmentor-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1 rounded-lg bg-[#090c15] border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 text-xs font-mono transition-all flex items-center space-x-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>EvalMentor AI</span>
          </a>
          <a
            href="https://ats-resumebuilder.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1 rounded-lg bg-[#090c15] border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-mono transition-all flex items-center space-x-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>ATS Resume Builder</span>
          </a>
        </motion.div>

        {/* Magnetic Social Links Strip (Verbatim links) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-8 text-slate-400 font-mono text-xs border-t border-slate-900 pt-6"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="GITHUB"
            className="flex items-center space-x-2 hover:text-[#00E0FF] transition-colors"
          >
            <Github className="w-4 h-4 text-[#00E0FF]" />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="LINKEDIN"
            className="flex items-center space-x-2 hover:text-[#00E0FF] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#7C5CFF]" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="EMAIL"
            className="flex items-center space-x-2 hover:text-[#00E0FF] transition-colors"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
