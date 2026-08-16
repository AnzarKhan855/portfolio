'use client';

import React, { useState, useEffect } from 'react';
import { Search, Terminal, Sparkles, FileText, FolderGit2, Cpu, Mail, ExternalLink, X } from 'lucide-react';
import { PROJECTS, SKILL_CLUSTERS, PERSONAL_INFO } from '@/lib/portfolioData';
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
        else {
          audioEngine.playClick();
          // Trigger parent open
        }
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
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950/50">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
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
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {/* Quick Actions */}
          <div>
            <h4 className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase mb-2">Navigation Commands</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => navigateTo('decisionlens')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-400/40 text-left transition-all group"
              >
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-mono">DecisionLens AI (Flagship)</span>
              </button>

              <button
                onClick={() => navigateTo('projects')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-purple-500/10 border border-slate-800 hover:border-purple-400/40 text-left transition-all group"
              >
                <FolderGit2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-mono">SaaS Projects</span>
              </button>

              <button
                onClick={() => navigateTo('skills')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-emerald-500/10 border border-slate-800 hover:border-emerald-400/40 text-left transition-all group"
              >
                <Cpu className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-mono">Tech Universe</span>
              </button>

              <button
                onClick={() => navigateTo('ailab')}
                className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-800/40 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-400/40 text-left transition-all group"
              >
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-slate-200 font-mono">AI Secret R&D Lab</span>
              </button>
            </div>
          </div>

          {/* Projects Match */}
          {filteredProjects.length > 0 && (
            <div>
              <h4 className="text-[11px] font-mono text-purple-400 tracking-wider uppercase mb-2">Projects</h4>
              <div className="space-y-1.5">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigateTo(project.id === 'decisionlens-ai' ? 'decisionlens' : 'projects')}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 hover:bg-slate-800 border border-slate-800/80 hover:border-cyan-500/30 cursor-pointer transition-all group"
                  >
                    <div>
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 font-mono">
                        {project.title}
                      </div>
                      <div className="text-[11px] text-slate-400">{project.tagline}</div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* External Links */}
          <div>
            <h4 className="text-[11px] font-mono text-emerald-400 tracking-wider uppercase mb-2">External Connections</h4>
            <div className="flex space-x-3">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-cyan-400 font-mono underline"
              >
                <span>GitHub ({PERSONAL_INFO.github})</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-slate-300 hover:text-cyan-400 font-mono underline"
              >
                <span>LinkedIn ({PERSONAL_INFO.linkedin})</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-500 flex justify-between items-center">
          <span>Press ESC or click outside to close</span>
          <span>ANZAR.AI // OS v2.4</span>
        </div>
      </div>
    </div>
  );
};
