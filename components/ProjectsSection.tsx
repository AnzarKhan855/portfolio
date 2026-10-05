'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, Github, Terminal, ArrowUpRight, 
  Cpu, Layers, ShieldCheck, CheckCircle2, FileCode2, Sparkles, BookOpen, AlertCircle,
  Network, ArrowRight, Server, Database, CheckCircle, Activity, Globe, Box
} from 'lucide-react';
import { 
  PROJECTS, Project, 
  PROJECT_FILTER_CATEGORIES, ProjectFilterCategory, 
  LIVE_SYSTEMS_PROOF, ShippedSystemProof 
} from '@/lib/portfolioData';
import { ProjectModal } from '@/components/ProjectModal';
import { audioEngine } from '@/lib/audio';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectFilterCategory>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    if (p.filterTags && p.filterTags.includes(selectedCategory)) return true;
    return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const handleCategoryChange = (cat: ProjectFilterCategory) => {
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
                {`// PRODUCTION SYSTEMS CATALOG & CASE STUDIES`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Engineered <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Platforms & Products</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Every platform below is a complete, production-grade engineering case study. Explore live deployments, verified GitHub repositories, asynchronous data pipelines, and AI intelligence engines.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#090c18] border border-slate-800 text-slate-300">
              <strong className="text-[#00E0FF]">{filteredProjects.length}</strong> of {PROJECTS.length} Platforms Displayed
            </span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {PROJECT_FILTER_CATEGORIES.map((cat) => {
            const count = PROJECTS.filter((p) => 
              cat === 'ALL' ? true : (p.filterTags?.includes(cat) || p.category.toLowerCase().includes(cat.toLowerCase()))
            ).length;

            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#00E0FF]/15 text-[#00E0FF] border border-[#00E0FF]/50 font-bold shadow-[0_0_15px_rgba(0,224,255,0.25)]'
                    : 'bg-[#090c18] text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-[#00E0FF]/30 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const accentColor = project.accentColor || '#00E0FF';
              const maturity = project.maturityLevel || 'ADVANCED';

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
                    {/* Top: Maturity Badge & Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span 
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full uppercase font-bold tracking-wider"
                          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                        >
                          {maturity}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE</span>
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

                    {/* Architectural Pipeline Flow Preview */}
                    {project.architectureFlow && project.architectureFlow.length > 0 && (
                      <div className="p-3 rounded-2xl bg-[#05060a] border border-slate-800/90 mb-5">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                          <span className="flex items-center space-x-1">
                            <Layers className="w-3 h-3 text-[#00E0FF]" />
                            <span>System Architecture Pipeline:</span>
                          </span>
                          <span className="text-[9px] text-slate-500">{project.architectureFlow.length} steps</span>
                        </div>
                        <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono text-slate-300 pb-1 scrollbar-thin">
                          {project.architectureFlow.slice(0, 3).map((flow, fIdx) => (
                            <React.Fragment key={fIdx}>
                              <span className="px-2 py-0.5 rounded bg-[#090c18] border border-slate-800 truncate max-w-[110px] shrink-0 text-slate-200">
                                {flow.role}
                              </span>
                              {fIdx < 2 && <ArrowRight className="w-2.5 h-2.5 text-slate-600 shrink-0" />}
                            </React.Fragment>
                          ))}
                          {project.architectureFlow.length > 3 && (
                            <span className="text-[10px] text-slate-500 shrink-0 font-mono">+{project.architectureFlow.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Deployment Verification Strip */}
                    {project.deploymentInfo && (
                      <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 rounded-xl bg-[#090c18]/90 border border-slate-800/80 text-[10px] font-mono">
                        <div className="text-slate-400 flex items-center gap-1 truncate">
                          <Globe className="w-3 h-3 text-[#00E0FF] shrink-0" />
                          <span className="truncate">{project.deploymentInfo.platform}</span>
                        </div>
                        <div className="text-emerald-400 flex items-center gap-1 truncate">
                          <CheckCircle2 className="w-3 h-3 shrink-0" />
                          <span className="truncate">{project.deploymentInfo.tests}</span>
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

        {/* ========================================================================= */}
        {/* RECRUITER VERIFICATION: "SYSTEMS I ACTUALLY SHIPPED" LIVE PROOF MATRIX */}
        {/* ========================================================================= */}
        <div className="mt-24 pt-16 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  {`// RECRUITER VERIFICATION MATRIX`}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                Systems I Actually Shipped
              </h3>
              <p className="text-sm font-sans text-slate-400 mt-1 max-w-2xl">
                Every system below is deployed live, backed by clean repository architectures, verified automated test suites, and honest engineering metrics. No boilerplate clones.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 bg-[#090c18] border border-slate-800 rounded-xl p-3 text-right hidden sm:block">
              <span className="text-emerald-400 font-bold">100% Verified</span> • 7 Cloud Deployments • 350+ Tests
            </div>
          </div>

          {/* Proof Matrix Table / Grid */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#090c18]/70 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#05060a]/90 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-4 px-5">System & Level</th>
                  <th className="py-4 px-4">Frontend / Client</th>
                  <th className="py-4 px-4">Backend & Persistence</th>
                  <th className="py-4 px-4">AI / Engine</th>
                  <th className="py-4 px-4">Test Coverage</th>
                  <th className="py-4 px-4">Deployment</th>
                  <th className="py-4 px-5 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs font-mono">
                {LIVE_SYSTEMS_PROOF.map((sys) => (
                  <tr key={sys.id} className="hover:bg-slate-800/30 transition-colors group">
                    <td className="py-4 px-5">
                      <div className="font-bold text-white group-hover:text-[#00E0FF] transition-colors flex items-center gap-2">
                        <span>{sys.title}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{sys.tagline}</div>
                      <span className="inline-block mt-1 text-[9px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase font-bold">
                        {sys.maturity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      <div className="truncate max-w-[180px]">{sys.frontend}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      <div className="truncate max-w-[190px]">{sys.backend}</div>
                      <div className="text-[10px] text-slate-500 truncate max-w-[190px] mt-0.5">{sys.database}</div>
                    </td>
                    <td className="py-4 px-4 text-slate-300">
                      <div className="truncate max-w-[190px]">{sys.aiEngine}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-[11px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        {sys.testCoverage}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="truncate max-w-[160px]">{sys.deploymentHost}</div>
                    </td>
                    <td className="py-4 px-5 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {sys.githubUrl && (
                          <a
                            href={sys.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub Repository"
                            className="p-1.5 rounded-lg bg-[#05060a] border border-slate-800 text-slate-400 hover:text-white hover:border-[#00E0FF] transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {sys.demoUrl && (
                          <a
                            href={sys.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Launch Live Demo"
                            className="p-1.5 rounded-lg bg-[#00E0FF]/15 border border-[#00E0FF]/40 text-[#00E0FF] hover:bg-[#00E0FF] hover:text-[#05060a] transition-all"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
