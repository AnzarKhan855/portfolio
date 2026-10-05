'use client';

import React, { useState, useEffect } from 'react';
import { 
  Volume2, VolumeX, Command, Cpu, Sparkles, ArrowUpRight, 
  Menu, X, FileText, Send, Github, Linkedin, Mail 
} from 'lucide-react';
import { audioEngine } from '@/lib/audio';
import { PERSONAL_INFO } from '@/lib/portfolioData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'what-i-build', 'about', 'dna', 'universe', 'loop', 'decisionlens', 'projects', 'architecture', 'pipeline', 'timeline', 'story', 'resume', 'contact'];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const toggleSound = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'universe', label: 'Universe' },
    { id: 'loop', label: 'LOOP 2.0' },
    { id: 'projects', label: 'Projects' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'story', label: '3D Story' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#05060a]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent'
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
              <span className="text-sm font-mono font-black tracking-widest text-slate-100 uppercase">
                ANZAR KHAN
              </span>
              <div className="flex items-center space-x-1.5 text-[9px] text-[#00E0FF] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>FULL-STACK • AI/ML</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#090c18]/90 backdrop-blur-xl border border-slate-800 rounded-full px-3.5 py-1.5 shadow-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  onMouseEnter={() => audioEngine.playHover()}
                  data-cursor="NAV"
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#00E0FF] font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#00E0FF]/15 border border-[#00E0FF]/40 rounded-full -z-10 shadow-[0_0_12px_rgba(0,224,255,0.35)]" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Controls & Quick Actions */}
          <div className="flex items-center space-x-2.5">
            {/* Cmd+K Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              onMouseEnter={() => audioEngine.playHover()}
              data-cursor="SEARCH"
              className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1.5 bg-[#090c18] hover:bg-[#0f1424] border border-slate-800 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200 hover:border-[#00E0FF]/40 transition-all"
            >
              <Command className="w-3.5 h-3.5 text-[#00E0FF]" />
              <span className="text-[11px]">Cmd K</span>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => audioEngine.playHover()}
              data-cursor="AUDIO"
              className={`p-2 rounded-lg border transition-all ${
                !isMuted
                  ? 'bg-[#00E0FF]/15 border-[#00E0FF]/50 text-[#00E0FF] shadow-[0_0_12px_rgba(0,224,255,0.3)]'
                  : 'bg-[#090c18] border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Anzar_Khan_Resume.txt"
              onMouseEnter={() => audioEngine.playHover()}
              data-cursor="RESUME"
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#090c18] border border-slate-800 hover:border-purple-400 text-purple-300 font-mono text-xs font-semibold hover:bg-purple-950/20 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </a>

            {/* Get In Touch Pill */}
            <button
              onClick={() => scrollTo('contact')}
              onMouseEnter={() => audioEngine.playHover()}
              data-cursor="CONTACT"
              className="hidden md:flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,224,255,0.35)]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => {
                audioEngine.playClick();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-[#090c18] border border-slate-800 text-slate-300 hover:text-white hover:border-[#00E0FF] transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#00E0FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md animate-fadeIn flex justify-end"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-sm h-full bg-[#090c18] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-[#00E0FF]" />
                  <span className="font-mono text-sm font-bold text-white uppercase">NAVIGATION</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-[#05060a] border border-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links List */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-mono text-sm transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-[#00E0FF]/15 text-[#00E0FF] font-bold border border-[#00E0FF]/30'
                          : 'text-slate-300 hover:bg-[#05060a] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00E0FF]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                download="Anzar_Khan_Resume.txt"
                className="w-full py-3 rounded-xl bg-[#05060a] border border-purple-500/40 text-purple-300 font-mono text-xs font-bold flex items-center justify-center space-x-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold flex items-center justify-center space-x-2 shadow-lg shadow-[#00E0FF]/25"
              >
                <Send className="w-4 h-4" />
                <span>Contact Anzar</span>
              </button>

              <div className="flex items-center justify-center space-x-4 pt-3 text-slate-400">
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 hover:text-[#00E0FF]" />
                </a>
                <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 hover:text-[#7C5CFF]" />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  <Mail className="w-4 h-4 hover:text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
