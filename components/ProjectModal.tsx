'use client';

import React from 'react';
import { X, Github, ExternalLink, Cpu, Layers, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Project } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-y-auto p-6 relative shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            <Cpu className="w-4 h-4" />
            <span>{project.category} {`//`} {project.status}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-mono text-slate-100">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">{project.tagline}</p>
        </div>

        {/* Project Description */}
        <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
              <div className="text-xs text-slate-400 font-mono">{m.label}</div>
              <div className="text-sm font-bold font-mono text-cyan-300 mt-1">{m.value}</div>
            </div>
          ))}
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-300 uppercase mb-3 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Core Enterprise Capabilities</span>
          </h4>
          <div className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono flex items-start space-x-2">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Specs */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-300 uppercase mb-3 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Architecture Breakdown</span>
          </h4>
          <div className="space-y-2">
            {project.architecture.map((arch, idx) => (
              <div key={idx} className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono">
                {arch}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mb-6">
          <h4 className="text-xs font-mono text-slate-400 uppercase mb-2">Technology Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 rounded-md text-[11px] font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-mono font-bold text-slate-200 flex items-center justify-center space-x-2 transition-all"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>Inspect GitHub Repository</span>
          </a>

          <button
            onClick={() => {
              audioEngine.playClick();
              onClose();
            }}
            className="px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 rounded-xl text-xs font-mono font-bold text-cyan-300 transition-all"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
