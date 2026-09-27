'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, Sparkles, Github, Linkedin, Mail, Cpu, 
  FileText, ExternalLink, Layers, ArrowUpRight, Terminal 
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const HeroArchitectureCanvas = dynamic(
  () => import('@/components/3d/HeroArchitectureCanvas').then((mod) => mod.HeroArchitectureCanvas),
  { ssr: false }
);

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#05060a]">
      {/* 3D R3F Software Architecture Centerpiece (Frontend -> Gateway -> Backend -> AI -> DB -> Analytics -> Cloud) */}
      <HeroArchitectureCanvas />

      {/* Cyber Grid Scrim */}
      <div className="absolute inset-0 bg-grid-cyber opacity-35 pointer-events-none" />

      {/* Background Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060a]/80 via-transparent to-[#05060a] pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center justify-center text-center">
        {/* Recruiter / Role Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#090c18]/90 border border-[#7C5CFF]/40 text-[#00E0FF] text-xs font-mono mb-6 backdrop-blur-xl shadow-[0_0_25px_rgba(124,92,255,0.25)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
          <span>FULL-STACK DEVELOPER • MERN • AI/ML ENGINEER</span>
        </motion.div>

        {/* Large Controlled Headline (Apple/Vercel Aesthetic) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight text-white font-display uppercase mb-3 isolate-text transform-gpu"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 inline-block">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        {/* Primary Role Subtitle (Exact Master Prompt Direction) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl lg:text-3xl font-mono text-[#00E0FF] font-semibold max-w-4xl mb-4 leading-snug glow-cyan"
        >
          {PERSONAL_INFO.primaryRole}
        </motion.p>

        {/* Concise Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base lg:text-lg font-sans text-slate-300 max-w-3xl mb-8 leading-relaxed"
        >
          I build production-ready web applications, AI-powered systems, analytics platforms, and intelligent developer products.
        </motion.p>

        {/* Subtle Engineering Metadata Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mb-10"
        >
          {PERSONAL_INFO.engineeringMetadata.map((meta, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md bg-[#090c18]/90 border border-slate-800 text-slate-300 text-[11px] font-mono tracking-wider hover:border-[#00E0FF]/50 transition-colors"
            >
              {meta}
            </span>
          ))}
        </motion.div>

        {/* Primary Action Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          {/* Primary CTA: View Projects */}
          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="PROJECTS"
            className="group px-7 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-[#05060a] bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00E0FF] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_30px_rgba(0,224,255,0.4)] flex items-center space-x-2 transform hover:-translate-y-0.5"
          >
            <span>VIEW PROJECTS</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary CTA: Contact Me */}
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="CONTACT"
            className="px-6 py-3.5 rounded-full font-mono text-xs font-semibold text-slate-200 bg-[#090c18]/90 hover:bg-[#0f1424] border border-[#7C5CFF]/30 hover:border-[#00E0FF]/60 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>CONTACT ME</span>
          </button>

          {/* Architecture CTA */}
          <button
            onClick={() => scrollTo('architecture')}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="SYSTEM"
            className="px-5 py-3.5 rounded-full font-mono text-xs font-semibold text-slate-300 bg-[#090c18]/90 hover:bg-[#0f1424] border border-slate-800 hover:border-[#00FFA3]/60 backdrop-blur-xl transition-all duration-300 flex items-center space-x-2"
          >
            <Layers className="w-3.5 h-3.5 text-[#00FFA3]" />
            <span>EXPLORE ARCHITECTURE</span>
          </button>

          {/* Resume CTA */}
          <a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            download="Anzar_Khan_Resume.txt"
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="RESUME"
            className="px-5 py-3.5 rounded-full font-mono text-xs font-semibold text-slate-300 bg-[#090c18]/90 hover:bg-[#0f1424] border border-slate-800 hover:border-purple-400 backdrop-blur-xl transition-all duration-300 flex items-center space-x-2"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            <span>RESUME</span>
          </a>
        </motion.div>

        {/* 🌐 Verified Live Deployments Quick Jump Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl"
        >
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Deployments:</span>
          </span>

          <a
            href="https://decisionlens-enterprise-analytics.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-[#00E0FF]/40 text-[#00E0FF] hover:bg-[#00E0FF]/10 text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>DecisionLens AI</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="https://riskshield-ai-kappa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10 text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>RiskShield AI</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="https://campusagent-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-[#7C5CFF]/40 text-purple-300 hover:bg-[#7C5CFF]/10 text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>CampusAgent AI</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="https://evalmentor-ai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>EvalMentor AI</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>

          <a
            href="https://ats-resumebuilder.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-slate-700 text-slate-300 hover:bg-slate-800 text-xs font-mono transition-all flex items-center space-x-1.5 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>ATS Resume Builder</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </motion.div>

        {/* Social / Direct Contacts Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-400 font-mono text-xs border-t border-slate-900/80 pt-6"
        >
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="GITHUB"
            className="flex items-center space-x-2 hover:text-[#00E0FF] transition-colors"
          >
            <Github className="w-4 h-4 text-[#00E0FF]" />
            <span>GitHub (@{PERSONAL_INFO.githubUsername})</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
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

          <span className="text-slate-500 hidden sm:inline-block">
            {PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.years})
          </span>
        </motion.div>
      </div>
    </section>
  );
};
