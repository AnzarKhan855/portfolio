'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, Terminal, Sparkles, FileText, FolderGit2, Cpu, 
  Mail, ExternalLink, X, Network, GitBranch, Layers, ShieldCheck 
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateTo = (id: string) => {
    audioEngine.playClick();
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = PROJECTS.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#090c18] border border-[#00E0FF]/40 rounded-2xl shadow-2xl overflow-hidden shadow-[#00E0FF]/15"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#05060a]/90">
          <Search className="w-5 h-5 text-[#00E0FF] mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project name, or technology..."
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-mono text-xs">
          {/* Quick Navigation Commands */}
          <div>
            <h4 className="text-[11px] text-[#00E0FF] tracking-wider uppercase mb-2 font-bold">
              Navigation Commands
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                onClick={() => navigateTo('projects')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-[#00E0FF]/10 border border-slate-800 hover:border-[#00E0FF]/40 text-left transition-all"
              >
                <FolderGit2 className="w-4 h-4 text-[#00E0FF]" />
                <span className="text-slate-200">View Projects</span>
              </button>

              <button
                onClick={() => navigateTo('universe')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-[#00FFA3]/10 border border-slate-800 hover:border-[#00FFA3]/40 text-left transition-all"
              >
                <Cpu className="w-4 h-4 text-[#00FFA3]" />
                <span className="text-slate-200">Tech Universe</span>
              </button>

              <button
                onClick={() => navigateTo('what-i-build')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-[#00E0FF]/10 border border-slate-800 hover:border-[#00E0FF]/40 text-left transition-all"
              >
                <Cpu className="w-4 h-4 text-[#00E0FF]" />
                <span className="text-slate-200">What I Build</span>
              </button>

              <button
                onClick={() => navigateTo('architecture')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-[#7C5CFF]/10 border border-slate-800 hover:border-[#7C5CFF]/40 text-left transition-all"
              >
                <Network className="w-4 h-4 text-[#7C5CFF]" />
                <span className="text-slate-200">Architecture</span>
              </button>

              <button
                onClick={() => navigateTo('dna')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-400/40 text-left transition-all"
              >
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200">Engineering DNA</span>
              </button>

              <button
                onClick={() => navigateTo('pipeline')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-purple-500/10 border border-slate-800 hover:border-purple-400/40 text-left transition-all"
              >
                <GitBranch className="w-4 h-4 text-purple-400" />
                <span className="text-slate-200">Build Pipeline</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-400/40 text-left transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-200">Contact Terminal</span>
              </button>

              <a
                href="/api/resume"
                target="_blank"
                rel="noopener noreferrer"
                download="Anzar_Khan_Resume.txt"
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#05060a] hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-400/40 text-left transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200">Download Resume</span>
              </a>
            </div>
          </div>

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <h4 className="text-[11px] text-purple-400 tracking-wider uppercase mb-2 font-bold">
                Projects ({filteredProjects.length})
              </h4>
              <div className="space-y-1.5">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigateTo(project.id === 'decisionlens-ai' ? 'decisionlens' : 'projects')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#05060a] hover:bg-slate-800/80 border border-slate-800/80 hover:border-[#00E0FF]/40 cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00E0FF]">
                        {project.title}
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans">{project.tagline}</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E0FF] transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Profiles */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">QUICK LINKS:</span>
            <div className="flex space-x-4">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#00E0FF] underline"
              >
                GitHub (@{PERSONAL_INFO.githubUsername})
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-[#7C5CFF] underline"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-slate-400 hover:text-emerald-400 underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
