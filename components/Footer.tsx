'use client';

import React from 'react';
import { Cpu, ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-slate-800/80 bg-[#05060a] font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Identity */}
          <div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-[#00E0FF]" />
              <span className="text-base font-black font-mono text-white tracking-wider uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <div className="text-xs text-[#00E0FF] mt-1 font-mono">
              Full-Stack Developer • MERN • AI/ML
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <button onClick={() => scrollTo('hero')} className="hover:text-[#00E0FF] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-[#00E0FF] transition-colors">
              About
            </button>
            <button onClick={() => scrollTo('dna')} className="hover:text-[#00E0FF] transition-colors">
              Engineering DNA
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[#00E0FF] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollTo('architecture')} className="hover:text-[#00E0FF] transition-colors">
              Architecture
            </button>
            <button onClick={() => scrollTo('pipeline')} className="hover:text-[#00E0FF] transition-colors">
              Pipeline
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#00E0FF] transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-400 hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-[#090c18] border border-slate-800 hover:border-[#7C5CFF] text-slate-400 hover:text-white transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg bg-[#090c18] border border-slate-800 hover:border-emerald-400 text-slate-400 hover:text-white transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Anzar_Khan_Resume.txt"
              aria-label="Download Resume"
              className="p-2 rounded-lg bg-[#090c18] border border-slate-800 hover:border-purple-400 text-slate-400 hover:text-white transition-all"
            >
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Quote, Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Anzar Khan. All systems verified and operational.
          </div>

          <div className="text-slate-400 italic font-mono text-center">
            Built with code, curiosity, and a lot of debugging.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => audioEngine.playHover()}
            className="px-3 py-1.5 rounded-lg bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-[#00E0FF] flex items-center space-x-1.5 transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
