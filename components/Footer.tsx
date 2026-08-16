'use client';

import React from 'react';
import { Cpu, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Copyright */}
        <div className="flex items-center space-x-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <span>© {new Date().getFullYear()} ANZAR KHAN // AI OPERATING SYSTEM</span>
        </div>

        {/* Center Tagline */}
        <div className="text-slate-500 text-[11px]">
          Designed & Architected for Next-Gen Enterprise AI Engineering
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => audioEngine.playHover()}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-400 text-cyan-400 flex items-center space-x-1.5 transition-all"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
