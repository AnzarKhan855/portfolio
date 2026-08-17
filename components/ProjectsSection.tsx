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
  const shippedProjects = PROJECTS.filter((p) => !p.isUnreleased && p.id !== 'decisionlens-ai');

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
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-[#7C5CFF]" />
                        <span>ANIMATED RAG PIPELINE (UPLOAD → CHUNKING → EMBEDDING → VECTOR DB → RETRIEVER → LLM → ANSWER)</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Vector Index Active</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 text-center text-xs">
                      {[
                        { title: '1. User Upload', detail: 'PDF / Text Docs' },
                        { title: '2. Chunking', detail: 'Semantic Splitter' },
                        { title: '3. Embedding', detail: 'HuggingFace MiniLM' },
                        { title: '4. Vector DB', detail: 'Qdrant (< 45ms)' },
                        { title: '5. Retriever', detail: 'Cosine Similarity' },
                        { title: '6. LLM Engine', detail: 'Groq Llama-3 70B' },
                        { title: '7. Answer', detail: 'Citations & Source' },
                      ].map((step, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#05060a] border border-slate-800 text-slate-300 relative group hover:border-[#00E0FF]">
                          <div className="text-[10px] text-slate-400 font-bold">{step.title}</div>
                          <div className="text-[9px] text-[#00E0FF] mt-1">{step.detail}</div>
                          <div className="mt-2 w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-[#00E0FF] animate-pulse" style={{ width: '100%' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isEvalMentor && (
                  <div className="mb-8 p-6 rounded-2xl bg-[#090c15] border border-[#7C5CFF]/30 font-mono">
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-[#00E0FF]" />
                        <span>LIVE RECRUITER EVALUATION DASHBOARD MOCKUP</span>
                      </div>
                      <div className="flex items-center space-x-3 text-xs">
                        <span className="text-slate-400">AI Confidence: <strong className="text-emerald-400">98.5%</strong></span>
                        <span className="text-slate-400">Interview Score: <strong className="text-[#00E0FF]">94 / 100</strong></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-[#05060a] border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase mb-1">Communication Skill</div>
                        <div className="flex items-center justify-between text-xs mb-1 font-bold text-white">
                          <span>Concise & Articulate</span>
                          <span className="text-[#00E0FF]">92%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00E0FF] rounded-full" style={{ width: '92%' }} />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#05060a] border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase mb-1">Technical Architecture</div>
                        <div className="flex items-center justify-between text-xs mb-1 font-bold text-white">
                          <span>Deep Systems Knowledge</span>
                          <span className="text-purple-300">96%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7C5CFF] rounded-full" style={{ width: '96%' }} />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#05060a] border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase mb-1 font-mono">Problem Solving</div>
                        <div className="flex items-center justify-between text-xs mb-1 font-bold text-white">
                          <span>Algorithmic Precision</span>
                          <span className="text-emerald-400">95%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: '95%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-between">
                      <span className="font-bold flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>OVERALL RECOMMENDATION: HIGH HIRE</span>
                      </span>
                      <span className="text-[10px] text-slate-400">Exceptional System Architecture & AI Engineering Depth</span>
                    </div>
                  </div>
                )}

                {isResumeBuilder && (
                  <div className="mb-8 p-6 rounded-2xl bg-[#090c15] border border-[#7C5CFF]/30 font-mono">
                    <div className="text-xs text-[#00E0FF] uppercase tracking-wider mb-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>ATS COMPLIANCE SCANNER & RESUME PREVIEW ENGINE</span>
                      </div>
                      <a
                        href="/api/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold transition-all flex items-center space-x-1.5"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>One-Click Resume Download</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#05060a] border border-emerald-500/30 flex items-center space-x-4">
                        <div className="text-4xl font-black text-emerald-400 font-mono">98</div>
                        <div>
                          <div className="text-xs font-bold text-white uppercase">ATS Score: 98 / 100</div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                            Optimized single-column layout, zero parser breaks, and direct vector PDF export.
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#05060a] border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase mb-2">Detected Key Engineering Keywords</div>
                        <div className="flex flex-wrap gap-1.5">
                          {['FastAPI', 'PyTorch', 'Qdrant', 'LangChain', 'Next.js 15', 'Docker', 'RAG'].map((kw) => (
                            <span key={kw} className="px-2 py-0.5 rounded bg-[#7C5CFF]/20 border border-[#7C5CFF]/40 text-[#00E0FF] text-[10px]">
                              ✓ {kw}
                            </span>
                          ))}
                        </div>
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
