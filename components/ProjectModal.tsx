'use client';

import React, { useEffect } from 'react';
import { 
  X, Github, ExternalLink, Cpu, Layers, CheckCircle2, 
  ShieldCheck, AlertTriangle, ArrowRight, Terminal, BookOpen 
} from 'lucide-react';
import { Project } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#090c18] border border-[#00E0FF]/40 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#05060a] border border-slate-800 text-slate-400 hover:text-white hover:border-[#00E0FF] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Strip */}
        <div className="mb-6 pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span 
              className="text-[11px] font-mono px-3 py-1 rounded-full uppercase font-bold"
              style={{ backgroundColor: `${project.badgeColor || '#00E0FF'}15`, color: project.badgeColor || '#00E0FF' }}
            >
              {project.category}
            </span>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              ✓ {project.status}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black font-mono text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-[#00E0FF] font-mono mt-1 font-semibold">
            {project.tagline}
          </p>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-slate-800">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold flex items-center space-x-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,224,255,0.35)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Platform</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-4 py-2.5 rounded-xl bg-[#05060a] border border-slate-800 hover:border-[#00E0FF] text-slate-200 hover:text-[#00E0FF] font-mono text-xs flex items-center space-x-2 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          )}

          {project.apiDocsUrl && (
            <a
              href={project.apiDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-4 py-2.5 rounded-xl bg-[#05060a] border border-slate-800 hover:border-purple-400 text-purple-300 font-mono text-xs flex items-center space-x-2 transition-all"
            >
              <Terminal className="w-4 h-4" />
              <span>OpenAPI Specification</span>
            </a>
          )}
        </div>

        {/* Verified Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 bg-[#05060a] rounded-2xl border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
              <div className="text-base font-bold font-mono text-[#00E0FF] mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-[#05060a] border border-rose-900/30">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono uppercase font-bold mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>The Problem Solved</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.problem || project.description}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#05060a] border border-emerald-900/30">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono uppercase font-bold mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Architectural Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {project.solution || project.description}
            </p>
          </div>
        </div>

        {/* Step-by-Step Architecture Pipeline */}
        {project.architectureFlow && project.architectureFlow.length > 0 && (
          <div className="mb-8 p-6 rounded-2xl bg-[#05060a] border border-slate-800">
            <h4 className="text-xs font-mono text-[#00E0FF] uppercase mb-4 flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Interactive Architecture Data Pipeline</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {project.architectureFlow.map((flow, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#090c18] border border-slate-800/90 text-left">
                  <div className="text-[10px] font-mono text-slate-500 mb-1">STAGE {flow.step}</div>
                  <div className="text-xs font-mono font-bold text-white">{flow.role}</div>
                  <div className="text-[10px] font-mono text-[#00E0FF] mt-1">{flow.tech}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-white uppercase mb-3 flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-[#00E0FF]" />
            <span>Notable Capabilities & Verified Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-3 bg-[#05060a] rounded-xl border border-slate-800/90 text-xs text-slate-300 font-mono flex items-start space-x-2">
                <span className="text-[#00E0FF] font-bold">&gt;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Challenges */}
        {project.engineeringChallenges && project.engineeringChallenges.length > 0 && (
          <div className="mb-8">
            <h4 className="text-xs font-mono text-white uppercase mb-3 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Engineering Challenges Overcome</span>
            </h4>
            <div className="space-y-2">
              {project.engineeringChallenges.map((ch, idx) => (
                <div key={idx} className="p-3 bg-[#05060a] rounded-xl border border-slate-800 text-xs text-slate-300 font-sans leading-relaxed">
                  • {ch}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div>
          <h4 className="text-xs font-mono text-slate-400 uppercase mb-3">Technologies Employed</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-[#05060a] border border-[#00E0FF]/30 text-[#00E0FF] rounded-lg text-xs font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
