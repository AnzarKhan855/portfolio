'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Command, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';
import { audioEngine } from '@/lib/audio';
import { PERSONAL_INFO } from '@/lib/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'decisionlens', 'projects', 'capabilities', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { id: 'hero', label: 'LAB' },
    { id: 'about', label: 'SYSTEM' },
    { id: 'decisionlens', label: 'DECISIONLENS', highlight: true },
    { id: 'projects', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-[#05060a]/80 backdrop-blur-xl border-b border-[#7C5CFF]/20 shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Studio Identity */}
        <div
          onClick={() => scrollTo('hero')}
          onMouseEnter={() => audioEngine.playHover()}
          data-cursor="ANZAR.AI"
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#00E0FF] p-[1px] shadow-lg shadow-[#7C5CFF]/20 group-hover:shadow-[#00E0FF]/40 transition-all duration-300">
            <div className="w-full h-full bg-[#05060a] rounded-[11px] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#00E0FF] group-hover:rotate-90 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <span className="text-sm font-mono font-bold tracking-widest text-slate-100 uppercase">
              ANZAR KHAN <span className="text-[#00E0FF]">{`// LAB`}</span>
            </span>
            <div className="flex items-center space-x-1.5 text-[9px] text-[#00E0FF]/80 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AI ENGINEER</span>
            </div>
          </div>
        </div>

        {/* Minimal Glass Pill Nav (Active Theory Spec: WORK - ABOUT - CONTACT) */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#090c15]/80 backdrop-blur-xl border border-[#7C5CFF]/25 rounded-full px-4 py-1.5 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => audioEngine.playHover()}
                data-cursor="GO"
                className={`px-3.5 py-1 text-xs font-mono rounded-full transition-all duration-300 relative ${
                  isActive
                    ? 'text-[#00E0FF] font-semibold'
                    : link.highlight
                    ? 'text-[#00E0FF] hover:text-white font-medium'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#00E0FF]/15 border border-[#00E0FF]/40 rounded-full -z-10 shadow-[0_0_15px_rgba(0,224,255,0.4)]" />
                )}
                {link.highlight && (
                  <Sparkles className="w-3 h-3 text-[#00E0FF] animate-spin-slow inline-block mr-1.5" />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Controls: Audio Toggle, Command Palette & Direct Contact Pill */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenCommandPalette}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="SEARCH"
            className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-[#090c15]/90 hover:bg-[#0f1424] border border-[#7C5CFF]/30 rounded-lg text-xs font-mono text-slate-300 hover:border-[#00E0FF]/50 transition-all duration-300"
          >
            <Command className="w-3.5 h-3.5 text-[#00E0FF]" />
            <span>Cmd K</span>
          </button>

          <button
            onClick={toggleSound}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="AUDIO"
            className={`p-2 rounded-lg border transition-all duration-300 ${
              !isMuted
                ? 'bg-[#00E0FF]/15 border-[#00E0FF]/50 text-[#00E0FF] shadow-[0_0_15px_rgba(0,224,255,0.4)]'
                : 'bg-[#090c15] border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title={isMuted ? 'Unmute Lab Audio' : 'Mute Sound'}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => audioEngine.playHover()}
            data-cursor="EMAIL"
            className="hidden lg:flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00E0FF] text-[#05060a] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(124,92,255,0.4)]"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#05060a]" />
          </a>
        </div>
      </div>
    </header>
  );
};
