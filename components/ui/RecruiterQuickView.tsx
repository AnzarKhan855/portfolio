'use client';

import React, { useState } from 'react';
import { 
  FileText, Github, Mail, Sparkles, CheckCircle2, 
  Terminal, ArrowRight, ExternalLink, X, ChevronDown 
} from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const RecruiterQuickView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-12 relative z-20">
      <div className="glass-panel-active rounded-2xl border border-[#00E0FF]/30 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Quick Identity & Roles */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E0FF] to-[#7C5CFF] p-[1px] shrink-0">
              <div className="w-full h-full bg-[#05060a] rounded-[11px] flex items-center justify-center font-mono font-black text-xs text-[#00E0FF]">
                AK
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-bold font-mono text-white">RECRUITER 10-SEC HUD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400 uppercase">Available for Hire</span>
              </div>
              <div className="text-xs font-mono text-slate-300 mt-0.5">
                Full-Stack Developer • MERN • FastAPI • AI/ML Engineer
              </div>
            </div>
          </div>

          {/* Core Tech Stack Micro-Chips */}
          <div className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
            {['Next.js 15', 'React 19', 'TypeScript', 'FastAPI', 'Python', 'MongoDB', 'PostgreSQL', 'Qdrant RAG'].map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-[#05060a] border border-slate-800">
                {tech}
              </span>
            ))}
          </div>

          {/* Quick Direct Recruiter Actions */}
          <div className="flex items-center space-x-2 shrink-0">
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Anzar_Khan_FullStack_AI_Resume.txt"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-1.5 rounded-lg bg-[#00E0FF]/15 border border-[#00E0FF]/40 text-[#00E0FF] font-mono text-xs font-bold hover:bg-[#00E0FF]/25 transition-all flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-1.5 rounded-lg bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-200 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold hover:brightness-110 transition-all flex items-center space-x-1"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
