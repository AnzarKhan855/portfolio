'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, Github, Terminal, ArrowUpRight, 
  Cpu, Layers, ShieldCheck, CheckCircle2, FileCode2, Sparkles, BookOpen, AlertCircle
} from 'lucide-react';
import { PROJECTS, Project } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const ProjectsSection: React.FC = () => {
  const shippedProjects = PROJECTS.filter((p) => !p.isUnreleased);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#05060a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
            {`// FULL-BLEED SHIPPED PRODUCT REVEALS`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-16 uppercase isolate-text transform-gpu">
          Deployed AI Platforms & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Production Systems</span>
        </h2>

        <div className="space-y-20">
          {shippedProjects.map((project, pIdx) => {
            const isCampusAgent = project.id === 'campusagent-ai';
            const isEvalMentor = project.id === 'evalmentor-ai';
            const isResumeBuilder = project.id === 'resume-builder';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: pIdx * 0.1 }}
                className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-[#7C5CFF]/30 relative overflow-hidden"
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#00E0FF] px-3 py-1 rounded-full bg-[#090c15] border border-[#7C5CFF]/30">
                      0{pIdx + 1} {`//`} {project.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      ✅ {project.status}
                    </span>
                  </div>

                  {/* Links Bar (Verbatim links with rel="noopener noreferrer") */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        data-cursor="GITHUB"
                        className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#090c15] border border-slate-800 hover:border-[#00E0FF] text-xs font-mono text-slate-200 hover:text-[#00E0FF] transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        data-cursor="DEMO"
                        className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#00E0FF] text-[#05060a] font-mono text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,224,255,0.4)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.backendUrl && (
                      <a
                        href={project.backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        data-cursor="API"
                        className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#090c15] border border-slate-800 hover:border-purple-400 text-[11px] font-mono text-purple-300 transition-all"
                      >
                        <Terminal className="w-3 h-3" />
                        <span>Backend API</span>
                      </a>
                    )}

                    {project.apiDocsUrl && (
                      <a
                        href={project.apiDocsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        data-cursor="SWAGGER"
                        className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#090c15] border border-slate-800 hover:border-emerald-400 text-[11px] font-mono text-emerald-300 transition-all"
                      >
                        <FileCode2 className="w-3 h-3" />
                        <span>Swagger Docs</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-[#00E0FF] font-mono text-sm sm:text-base font-semibold mb-6">
                  {project.tagline}
                </p>

                {/* Positioning Copy */}
                <p className="text-slate-200 text-base sm:text-lg font-sans leading-relaxed mb-8 max-w-4xl">
                  {project.description}
                </p>

                {/* Specific Custom Visual Treatments per Project Spec */}
                {isCampusAgent && (
                  <div className="mb-8 p-6 rounded-2xl bg-[#090c15] border border-[#7C5CFF]/30 font-mono">
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-3 flex items-center space-x-2">
                      <Cpu className="w-4 h-4 text-[#7C5CFF]" />
                      <span>RAG ARCHITECTURE FLOW (PARSING → EMBEDDINGS → VECTOR SEARCH → LLM)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs">
                      <div className="p-3 rounded-lg bg-[#05060a] border border-slate-800 text-slate-300">
                        1. PDF Ingestion & Chunking
                      </div>
                      <div className="p-3 rounded-lg bg-[#05060a] border border-slate-800 text-[#00E0FF]">
                        2. Hugging Face Embeddings
                      </div>
                      <div className="p-3 rounded-lg bg-[#05060a] border border-slate-800 text-[#7C5CFF]">
                        3. Qdrant Vector Search (&lt; 45ms)
                      </div>
                      <div className="p-3 rounded-lg bg-[#05060a] border border-slate-800 text-emerald-400">
                        4. Groq LLM Citations
                      </div>
                    </div>
                  </div>
                )}

                {isEvalMentor && (
                  <div className="mb-8 p-6 rounded-2xl bg-[#090c15] border border-[#7C5CFF]/30 font-mono">
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-3 flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#00E0FF]" />
                      <span>RECRUITER-STYLE EVALUATION CARD MOCKUP</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#05060a] border border-emerald-500/30 text-emerald-300">
                        <strong className="block text-[10px] text-slate-400">STRENGTHS</strong>
                        Deep technical clarity on FastAPI async routes & vector database indexing.
                      </div>
                      <div className="p-3 rounded-lg bg-[#05060a] border border-amber-500/30 text-amber-300">
                        <strong className="block text-[10px] text-slate-400">WEAKNESSES</strong>
                        Elaborate more on Redis queue retry mechanisms under high concurrency.
                      </div>
                      <div className="p-3 rounded-lg bg-[#05060a] border border-[#00E0FF]/30 text-[#00E0FF]">
                        <strong className="block text-[10px] text-slate-400">SUGGESTED ANSWER</strong>
                        &quot;Utilize Celery workers back-off strategy with Qdrant batch indexing.&quot;
                      </div>
                    </div>
                  </div>
                )}

                {isResumeBuilder && (
                  <div className="mb-8 p-6 rounded-2xl bg-[#090c15] border border-[#7C5CFF]/30 font-mono">
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-2 flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>ATS COMPLIANCE SCORE ENGINE</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl font-black text-emerald-400">98 / 100</div>
                      <div className="text-xs text-slate-300">
                        Optimized semantic layout, zero multi-column parser breaks, and direct vector PDF export.
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#05060a] border border-[#7C5CFF]/30 text-slate-300 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
