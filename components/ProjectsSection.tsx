'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, Github, Terminal, ArrowUpRight, 
  Cpu, Layers, ShieldCheck, CheckCircle2, FileCode2, Sparkles, BookOpen, AlertCircle,
  Network, ArrowRight
} from 'lucide-react';
import { PROJECTS, Project } from '@/lib/portfolioData';
import { ProjectModal } from '@/components/ProjectModal';
import { audioEngine } from '@/lib/audio';

const CATEGORIES = [
  'All Systems',
  'Enterprise Analytics',
  'Risk Intelligence',
  'Agentic AI / RAG',
  'AI Interview Platform',
  'Developer Productivity',
  'Data Analytics',
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Systems');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All Systems') return true;
    return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const handleCategoryChange = (cat: string) => {
    audioEngine.playHover();
    setSelectedCategory(cat);
  };

  const handleOpenModal = (project: Project) => {
    audioEngine.playClick();
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// SECTIONS 10 TO 15 — COMPLETE PRODUCTION SYSTEMS`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Engineered <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Platforms & Products</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Every project is an architecture case study. Explore live applications, verified repositories, data pipelines, and sub-15ms AI decisioning engines.
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#00E0FF]/15 text-[#00E0FF] border border-[#00E0FF]/50 font-bold shadow-[0_0_15px_rgba(0,224,255,0.25)]'
                  : 'bg-[#090c18] text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const accentColor = project.accentColor || '#00E0FF';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-panel-active rounded-3xl p-7 border border-slate-800/90 hover:border-[#00E0FF]/50 flex flex-col justify-between group transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Card Subtle Gradient Backlight */}
                  <div 
                    className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: accentColor }}
                  />

                  <div>
                    {/* Top: Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span 
                        className="text-[10px] font-mono px-2.5 py-1 rounded-full uppercase font-bold tracking-wider"
                        style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                      >
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        {project.status.includes('Live') ? '● LIVE' : project.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Center: Title & Tagline */}
                    <h3 className="text-xl font-bold font-mono text-white group-hover:text-[#00E0FF] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mb-4 line-clamp-1">
                      {project.tagline}
                    </p>

                    {/* Short Description */}
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Architectural Pipeline Flow Preview (Sections 10 to 15) */}
                    {project.architectureFlow && project.architectureFlow.length > 0 && (
                      <div className="p-3 rounded-2xl bg-[#05060a] border border-slate-800/90 mb-5">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1">
                          <Layers className="w-3 h-3 text-[#00E0FF]" />
                          <span>Architectural Pipeline:</span>
                        </div>
                        <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono text-slate-300">
                          {project.architectureFlow.slice(0, 3).map((flow, fIdx) => (
                            <React.Fragment key={fIdx}>
                              <span className="px-2 py-0.5 rounded bg-[#090c18] border border-slate-800 truncate max-w-[100px]">
                                {flow.role}
                              </span>
                              {fIdx < 2 && <ArrowRight className="w-2.5 h-2.5 text-slate-600 shrink-0" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-[#090c18] border border-slate-800/80 text-center">
                          <div className="text-[10px] font-mono text-slate-400 truncate">{m.label}</div>
                          <div className="text-xs font-bold font-mono text-[#00E0FF] mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-[#05060a] border border-slate-800 text-slate-300 text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-[#05060a] border border-slate-800 text-slate-500 text-[10px] font-mono">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenModal(project)}
                      onMouseEnter={() => audioEngine.playHover()}
                      className="text-xs font-mono text-[#00E0FF] hover:underline flex items-center space-x-1"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View GitHub Repository"
                          onMouseEnter={() => audioEngine.playHover()}
                          className="p-2 rounded-lg bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Launch Live Platform"
                          onMouseEnter={() => audioEngine.playHover()}
                          className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-[11px] font-bold flex items-center space-x-1 hover:brightness-110 transition-all shadow-[0_0_12px_rgba(0,224,255,0.3)]"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal with Deep System Architecture */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
