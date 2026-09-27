'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Copy, Check, Code2, 
  GraduationCap, Briefcase, Award, Mail, Phone, MapPin, 
  Github, Linkedin, CheckCircle2, ChevronRight, Sparkles,
  BookOpen, Terminal, Cpu, ArrowRight, Layers 
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO, PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';
import { JOURNEY_STAGES } from '@/components/3d/WalkingDeveloperScene';

const WalkingDeveloperScene = dynamic(
  () => import('@/components/3d/WalkingDeveloperScene').then((mod) => mod.WalkingDeveloperScene),
  { ssr: false }
);

export const ResumeSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'journey' | 'document' | 'json'>('journey');
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll listener to drive character walking through the 8 stages
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress while this section is traversing viewport
      const totalDist = rect.height + windowHeight * 0.5;
      const currentDist = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));

      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollProgress(progress);
          const stageIndex = Math.min(7, Math.floor(progress * 8));
          setActiveStage(stageIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = () => {
    audioEngine.playClick();
    const resumeText = `ANZAR KHAN
Full-Stack Developer | MERN Stack Developer | AI/ML Engineer
Kanpur / Remote, India | anzark964@gmail.com | +91-7705855855
GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

EDUCATION:
Allenhouse Institute of Technology, AKTU
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 - 2027)

SHIPPED PRODUCTION PLATFORMS:
1. DecisionLens AI — Enterprise Decision Intelligence Platform
   https://github.com/AnzarKhan855/decisionlens-enterprise-analytics
2. RiskShield AI — Enterprise Fraud Intelligence & Decisioning Mesh (Clean Architecture)
   https://github.com/AnzarKhan855/riskshield-ai
3. CampusAgent AI — Agentic AI Student Productivity Platform (Qdrant Vector DB)
   https://github.com/AnzarKhan855/campusagent-ai
4. EvalMentor AI — AI Interview Agent & Evaluation Platform
   https://github.com/AnzarKhan855/evalmentor-ai
5. AI Resume Builder — ATS-Friendly SaaS & Document Parsing
   https://github.com/AnzarKhan855/resume-builder
6. BookStore SQL Analytics — Relational Database & Revenue Intelligence
   https://github.com/AnzarKhan855/BookStore-SQL-Analysis

CORE TECHNICAL STACK:
Next.js 15, React 19, TypeScript, Tailwind CSS, FastAPI, Python 3.12, Node.js, Express,
PostgreSQL, MongoDB Atlas, Qdrant Vector DB, XGBoost, Scikit-Learn, TreeSHAP, Docker, Vercel, Render.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectStage = (idx: number) => {
    audioEngine.playClick();
    setActiveStage(idx);
    setScrollProgress((idx + 0.5) / 8);
  };

  const resumeJson = {
    developer: {
      name: PERSONAL_INFO.name,
      title: PERSONAL_INFO.title,
      location: PERSONAL_INFO.location,
      contact: {
        email: PERSONAL_INFO.email,
        phone: PERSONAL_INFO.phone,
        github: PERSONAL_INFO.githubUrl,
        linkedin: PERSONAL_INFO.linkedinUrl,
      },
    },
    education: {
      institution: PERSONAL_INFO.education.institution,
      degree: PERSONAL_INFO.education.degree,
      years: PERSONAL_INFO.education.years,
      status: 'Active B.Tech Candidate',
    },
    verifiedProjects: PROJECTS.map((p) => ({
      name: p.title,
      category: p.category,
      status: p.status,
      github: p.githubUrl,
      liveDemo: p.demoUrl || 'Source Available',
      technologies: p.technologies.slice(0, 5),
    })),
    coreStack: [
      'Next.js 15',
      'React 19',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'Qdrant',
      'XGBoost',
      'Docker',
    ],
  };

  return (
    <section ref={sectionRef} id="resume" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// SCROLL-DRIVEN RESUME EXPERIENCE`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              The Engineering <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Journey</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Follow the path from learning fundamentals to building full-stack and AI-powered systems. Scroll to walk with the developer through each milestone.
            </p>
          </div>

          {/* Action Controls: Download, Copy, View Mode */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Anzar_Khan_FullStack_AI_Resume.txt"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold flex items-center space-x-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,224,255,0.3)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (.txt)</span>
            </a>

            <button
              onClick={handleCopy}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-2 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#00E0FF]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                audioEngine.playClick();
                setViewMode(viewMode === 'journey' ? 'document' : viewMode === 'document' ? 'json' : 'journey');
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-purple-400 text-purple-300 font-mono text-xs flex items-center space-x-1.5 transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>
                {viewMode === 'journey' ? 'Document View' : viewMode === 'document' ? 'JSON AST' : 'Journey View'}
              </span>
            </button>
          </div>
        </div>

        {viewMode === 'journey' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 3D Walking Developer Scene & Progression */}
            <div className="lg:col-span-7 space-y-4">
              <WalkingDeveloperScene scrollProgress={scrollProgress} activeStage={activeStage} />

              {/* Fixed Horizontal Timeline Progress Indicator */}
              <div className="p-3 rounded-2xl bg-[#090c18] border border-slate-800 flex items-center justify-between gap-1 overflow-x-auto scrollbar-none">
                {JOURNEY_STAGES.map((stage, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => handleSelectStage(idx)}
                      className={`px-2.5 py-1.5 rounded-xl text-[10px] font-mono transition-all whitespace-nowrap flex items-center space-x-1 ${
                        isActive
                          ? 'bg-[#00E0FF]/20 border border-[#00E0FF] text-[#00E0FF] font-bold shadow-[0_0_12px_rgba(0,224,255,0.3)]'
                          : 'bg-[#05060a] border border-slate-800/80 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isActive ? '#00E0FF' : '#475569' }} />
                      <span>0{idx + 1} {stage.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Verified Chapter Details & Fact Sheet */}
            <div className="lg:col-span-5 glass-panel-active rounded-3xl p-6 sm:p-8 border border-[#00E0FF]/30 min-h-[580px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {/* CHAPTER 01: FOUNDATIONS */}
                {activeStage === 0 && (
                  <motion.div
                    key="stage-0"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00FFA3] uppercase tracking-wider">
                      <BookOpen className="w-4 h-4 text-[#00FFA3]" />
                      <span>{`CHAPTER 01 // FOUNDATIONS & MATHEMATICAL LOGIC`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Computer Science Foundations
                      </h3>
                      <p className="text-xs font-mono text-[#00FFA3] mt-1 font-semibold">
                        Algorithmic Thinking • Data Structures • Discrete Math
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        The Inception of Engineering:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Focused on foundational computational principles: asymptotic time-complexity analysis, memory structures, pointer manipulation, and relational schema normalization.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#090c18] border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Core Languages</div>
                        <div className="text-xs font-mono font-bold text-[#00FFA3] mt-0.5">C++, Python, SQL</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090c18] border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Focus</div>
                        <div className="text-xs font-mono font-bold text-[#7C5CFF] mt-0.5">DSA & Systems</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 02: COLLEGE */}
                {activeStage === 1 && (
                  <motion.div
                    key="stage-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                      <span>{`CHAPTER 02 // ACADEMIC RIGOR (B.TECH AI/ML)`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-mono text-white">
                        {PERSONAL_INFO.education.institution}
                      </h3>
                      <div className="text-sm font-mono text-[#00E0FF] mt-1 font-semibold">
                        {PERSONAL_INFO.education.degree}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        Duration: {PERSONAL_INFO.education.years} • AKTU Affiliated
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Rigorous Curriculum & Research:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Formal university training in Neural Networks, Deep Learning, Relational Databases, Operating Systems, Computer Networks, and Software Engineering.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 font-mono text-xs text-purple-300">
                      Research Paper: &ldquo;Multi-Mode Charging Architecture: A Unified Power Bank & Charger Solution&rdquo; (Presented 2024)
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 03: LEARNING ECOSYSTEM */}
                {activeStage === 2 && (
                  <motion.div
                    key="stage-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-wider">
                      <Cpu className="w-4 h-4 text-[#00E0FF]" />
                      <span>{`CHAPTER 03 // EXPANDING THE TECH STACK`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Learning Ecosystem
                      </h3>
                      <p className="text-xs font-mono text-[#00E0FF] mt-1 font-semibold">
                        Frontend • Async Backend • Databases
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Disciplined Progression:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Transitioned from fundamental scripts to modern developer frameworks: mastering Next.js 15, TypeScript type-safety, FastAPI asynchronous request cycles, and PostgreSQL relational schemas.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • Next.js & React 19
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • FastAPI & Python 3.12
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • PostgreSQL & MongoDB
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • Qdrant Vector DB
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 04: BUILDING WORKSTATION */}
                {activeStage === 3 && (
                  <motion.div
                    key="stage-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                      <Terminal className="w-4 h-4 text-amber-400" />
                      <span>{`CHAPTER 04 // BUILDING PRODUCTION WORKSTATION`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Code to Infrastructure
                      </h3>
                      <p className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                        Microservices • Containerization • Git Workflows
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Workstation Parity:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Established rigorous engineering environments: multi-stage Docker builds, OpenAPI contract definitions, strict Pydantic payload models, and atomic Git commit branching workflows.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                      Standardized on Clean Architecture: Decoupling Domain, Use Cases, Interfaces, and Infrastructure.
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 05: APPLICATION MOMENT */}
                {activeStage === 4 && (
                  <motion.div
                    key="stage-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-[#00E0FF]" />
                      <span>{`CHAPTER 05 // APPLICATION BREAKTHROUGH`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        The Application Moment
                      </h3>
                      <p className="text-xs font-mono text-[#00E0FF] mt-1 font-semibold">
                        Frontend → API Gateway → Database → Production Live
                      </p>
                    </div>

                    {/* Miniature Live Product Architecture UI */}
                    <div className="p-4 rounded-2xl bg-[#090c18] border border-[#00E0FF]/40 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span>END-TO-END VERIFIED PIPELINE</span>
                        <span className="text-emerald-400">● LIVE RUNTIME</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800 text-white">
                        <span className="text-[#00FFA3]">Next.js 15:</span> Optimistic state, SSR rendering
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800 text-white">
                        <span className="text-[#00E0FF]">FastAPI:</span> Asynchronous microservice routes
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800 text-white">
                        <span className="text-purple-400">Persistence:</span> PostgreSQL ACID & Qdrant vectors
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 06: AI / ML PIPELINES */}
                {activeStage === 5 && (
                  <motion.div
                    key="stage-5"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                      <Cpu className="w-4 h-4 text-purple-400" />
                      <span>{`CHAPTER 06 // PRODUCTION AI & ML`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Operational Intelligence
                      </h3>
                      <p className="text-xs font-mono text-purple-400 mt-1 font-semibold">
                        RAG Semantic Search • TreeSHAP • XGBoost
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        AI Without the Hype:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Integrated production ML into real applications: dense vector chunking with Qdrant for semantic search, calibrated tree-based fraud classification, and TreeSHAP explainability for regulatory transparency.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs font-mono text-purple-300">
                      Sub-second Groq LPU inference powering interactive student copilots and candidate interview grading.
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 07: PROJECT WORLDS */}
                {activeStage === 6 && (
                  <motion.div
                    key="stage-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00FFA3] uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-[#00FFA3]" />
                      <span>{`CHAPTER 07 // 6 SHIPPED SYSTEMS`}</span>
                    </div>

                    <h3 className="text-2xl font-black font-mono text-white">
                      The Project Worlds
                    </h3>

                    <div className="space-y-2">
                      {PROJECTS.map((p) => (
                        <div key={p.id} className="p-3 rounded-xl bg-[#090c18] border border-slate-800 flex items-center justify-between text-xs font-mono">
                          <div>
                            <span className="font-bold text-white">{p.title}</span>
                            <span className="text-[10px] text-slate-500 block">{p.category}</span>
                          </div>
                          <span className="text-[10px] text-emerald-400">{p.status.includes('Live') ? 'LIVE' : 'ACTIVE'}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* CHAPTER 08: THE ENGINEERING GALAXY */}
                {activeStage >= 7 && (
                  <motion.div
                    key="stage-7"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#00E0FF]" />
                      <span>{`CHAPTER 08 // CONVERGENCE`}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black font-mono text-white">
                        The Connected Galaxy
                      </h3>
                      <p className="text-xs font-mono text-[#00E0FF] mt-1 font-semibold">
                        Anzar Khan // Engineering Core
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-[#00E0FF]/40 space-y-2">
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Every technology, microservice, database, and project forms a cohesive software ecosystem. Explore the revolving orbital galaxy below.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00E0FF]/15 to-[#7C5CFF]/15 border border-[#00E0FF]/40 font-mono text-xs text-white">
                      Ready to build high-impact production systems.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Quick Connect Action */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">OFFICIAL RESUME RECORD</span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#00E0FF] hover:underline flex items-center space-x-1"
                >
                  <span>Connect with Anzar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {viewMode === 'document' && (
          /* Accessible Standard HTML Resume View */
          <div className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-8">
            <div className="border-b border-slate-800 pb-6">
              <h3 className="text-3xl font-bold font-mono text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-sm font-mono text-[#00E0FF] mt-1">{PERSONAL_INFO.title}</p>
              <p className="text-xs font-mono text-slate-400 mt-1">{PERSONAL_INFO.location} • {PERSONAL_INFO.email}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#00FFA3] uppercase tracking-wider">EDUCATION</h4>
              <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800">
                <div className="text-base font-bold text-white">{PERSONAL_INFO.education.institution}</div>
                <div className="text-xs text-[#00E0FF] mt-0.5">{PERSONAL_INFO.education.degree}</div>
                <div className="text-xs text-slate-400 mt-0.5">{PERSONAL_INFO.education.years}</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider">SHIPPED PRODUCTION PLATFORMS</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-4 rounded-2xl bg-[#090c18] border border-slate-800">
                    <div className="text-sm font-bold text-white">{p.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{p.description}</div>
                    <div className="text-[10px] font-mono text-[#00E0FF] mt-2">{p.technologies.slice(0, 4).join(' • ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {viewMode === 'json' && (
          /* Resume as Code JSON AST Schema View */
          <div className="glass-panel-active rounded-3xl p-6 sm:p-10 border border-purple-500/30 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                {`// STRUCTURED RESUME AST & JSON SCHEMA`}
              </span>
              <span className="text-xs font-mono text-slate-400">Deterministic Data Model</span>
            </div>
            <pre className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 text-xs font-mono text-cyan-300 leading-relaxed overflow-x-auto">
              {JSON.stringify(resumeJson, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};
