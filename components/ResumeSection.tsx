'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Copy, Check, Code2, 
  GraduationCap, Briefcase, Award, Mail, Phone, MapPin, 
  Github, Linkedin, CheckCircle2, ChevronRight, Sparkles,
  BookOpen, Terminal, Cpu, ArrowRight, Layers, ShieldCheck, BarChart3, Database 
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

  // Scroll listener to drive character walking through the 9 stages
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
          const stageIndex = Math.min(8, Math.floor(progress * 9));
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
1. LOOP 2.0 — AI Customer Feedback Intelligence Platform (FLAGSHIP)
   https://github.com/AnzarKhan855/ai-customer-feedback-intelligence
   Live: https://ai-customer-feedback-intelligence-black.vercel.app
2. DecisionLens AI — Enterprise Decision Intelligence Platform (FLAGSHIP)
   https://github.com/AnzarKhan855/decisionlens-enterprise-analytics
   Live: https://decisionlens-enterprise-analytics.vercel.app
3. RiskShield AI — Enterprise Fraud Intelligence & Autonomous Decisioning Mesh (Clean Architecture)
   https://github.com/AnzarKhan855/riskshield-ai
   Live: https://riskshield-ai-kappa.vercel.app
4. CampusAgent AI — Agentic AI Student Productivity Platform (Qdrant Vector DB)
   https://github.com/AnzarKhan855/campusagent-ai
   Live: https://campusagent-ai.vercel.app
5. EvalMentor AI — AI Interview Agent & Evaluation Platform
   https://github.com/AnzarKhan855/evalmentor-ai
   Live: https://evalmentor-ai.vercel.app
6. AI Resume Builder — ATS Resume Intelligence & Forensic Document Parser
   https://github.com/AnzarKhan855/resume-builder
   Live: https://ats-resumebuilder.vercel.app
7. BookStore SQL Analytics — 3NF Relational Database & Revenue BI Engine
   https://github.com/AnzarKhan855/BookStore-SQL-Analysis

CORE TECHNICAL STACK:
Next.js 14/15, React 19, TypeScript, Tailwind CSS, FastAPI, Python 3.12+, Node.js, Express,
Prisma ORM, Neon PostgreSQL, MongoDB Atlas, Qdrant Vector DB, DuckDB, Claude 3.5 Sonnet,
XGBoost, Scikit-Learn, TreeSHAP, Docker, Vercel, Render.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectStage = (idx: number) => {
    audioEngine.playClick();
    setActiveStage(idx);
    setScrollProgress((idx + 0.5) / 9);
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
      maturity: p.maturityLevel,
      category: p.category,
      status: p.status,
      github: p.githubUrl,
      liveDemo: p.demoUrl || 'Source Available',
      technologies: p.technologies.slice(0, 6),
    })),
    coreStack: [
      'Next.js 14/15',
      'React 19',
      'TypeScript',
      'FastAPI',
      'Python',
      'Prisma ORM',
      'Neon PostgreSQL',
      'MongoDB Atlas',
      'Qdrant Vector DB',
      'DuckDB',
      'XGBoost',
      'Docker',
      'Vercel',
    ],
  };

  return (
    <section ref={sectionRef} id="resume" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Anchor for 3D Walking Journey Navigation */}
      <div id="story" className="absolute -top-10 left-0 pointer-events-none" />

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
                {`// SCROLL-DRIVEN 3D CAREER NARRATIVE`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              From Curious Student to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Production Builder</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Follow the journey through time: from school curiosity and college foundations to learning the stack, shipping products, and architecting enterprise platforms.
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

              {/* Horizontal Timeline Navigation Bar */}
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
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isActive ? '#00FFA3' : '#475569' }} />
                      <span>0{idx + 1} {stage.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Verified Chapter Details & Fact Sheet */}
            <div className="lg:col-span-5 glass-panel-active rounded-3xl p-6 sm:p-8 border border-[#00E0FF]/30 min-h-[580px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {/* STAGE 01: FOUNDATIONS */}
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
                      <span>{`STAGE 01 // CURIOSITY & FOUNDATIONS`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        The Inception of Engineering
                      </h3>
                      <p className="text-xs font-mono text-[#00FFA3] mt-1 font-semibold">
                        Curiosity • Mathematics • Problem Solving • Computers
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        The Foundation:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Started with genuine curiosity about how computing systems operate under the hood. Mastered algorithmic logic, discrete mathematics, asymptotic complexity analysis, and object-oriented paradigms before touching production frameworks.
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

                {/* STAGE 02: COLLEGE */}
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
                      <span>{`STAGE 02 // ACADEMIC RIGOR (B.TECH AI/ML)`}</span>
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
                        Core Academic Training:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Rigorous computer science curriculum covering Data Structures & Algorithms, Neural Networks, Deep Learning, Relational Databases (RDBMS), Operating Systems, and Software Engineering.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 font-mono text-xs text-purple-300">
                      Research Paper: &ldquo;Multi-Mode Charging Architecture: A Unified Power Bank & Charger Solution&rdquo; (Presented 2024)
                    </div>
                  </motion.div>
                )}

                {/* STAGE 03: LEARNING THE STACK */}
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
                      <span>{`STAGE 03 // LEARNING THE STACK`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Technology Acquisition
                      </h3>
                      <p className="text-xs font-mono text-[#00E0FF] mt-1 font-semibold">
                        Frontend → Async Backend → Relational DBs → AI/ML
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Disciplined Progression:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        HTML → CSS → JavaScript → React → Next.js → TypeScript → Node.js → Python → FastAPI → SQL → MongoDB → PostgreSQL → Docker → Git → AI/ML → RAG.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • Next.js 14/15 & React 19
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • FastAPI & Python 3.12+
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • PostgreSQL & Neon Serverless
                      </div>
                      <div className="p-2.5 bg-[#090c18] rounded-xl border border-slate-800 text-slate-200">
                        • Qdrant Vector DB & RAG
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 04: THE BUILDER EMERGES */}
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
                      <span>{`STAGE 04 // THE BUILDER EMERGES`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        First Production SaaS
                      </h3>
                      <p className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                        AI Resume Builder & EvalMentor AI
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        From Code to Shipped Products:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Transitioned from exercises to full-scale SaaS. Built AI Resume Builder (50 Overleaf/LaTeX ATS templates, unpdf forensic parser) and EvalMentor AI (resume parsing with PyMuPDF, structured candidate rubric scoring).
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300">
                      Proved end-to-end full-stack execution: authenticating users, managing persistent databases, and delivering fast exports.
                    </div>
                  </motion.div>
                )}

                {/* STAGE 05: INTELLIGENCE SYSTEMS */}
                {activeStage === 4 && (
                  <motion.div
                    key="stage-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#7C5CFF] uppercase tracking-wider">
                      <Cpu className="w-4 h-4 text-[#7C5CFF]" />
                      <span>{`STAGE 05 // INTELLIGENCE SYSTEMS`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Agentic RAG Workflows
                      </h3>
                      <p className="text-xs font-mono text-[#7C5CFF] mt-1 font-semibold">
                        CampusAgent AI • Qdrant Vector DB • FastAPI
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Contextual Document Intelligence:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Engineered end-to-end RAG architecture: dense embeddings, cosine distance vector indexing via Qdrant (&lt;45ms), parallel automated quiz grading with asyncio worker pools, and 15+ secured REST endpoints.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs font-mono text-purple-300">
                      Eliminated LLM hallucinations by enforcing strict ground-truth prompt constraints and verifiable citations.
                    </div>
                  </motion.div>
                )}

                {/* STAGE 06: ENTERPRISE ARCHITECTURE */}
                {activeStage === 5 && (
                  <motion.div
                    key="stage-5"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{`STAGE 06 // ENTERPRISE ARCHITECTURE`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        Clean Architecture & Risk
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                        RiskShield AI • AST Rule Compiler • TreeSHAP
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Dual Decisioning Mesh:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Implemented Clean Hexagonal Architecture across 17 REST endpoints. Built parallel decisioning: AST-compiled visual policy rules alongside calibrated XGBoost ML ensemble, with TreeSHAP mathematical feature attribution for banking compliance.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                      Sub-15ms P99 decision latency with PCI-DSS v4.0 PAN masking and immutable SHA-256 audit hashes.
                    </div>
                  </motion.div>
                )}

                {/* STAGE 07: DECISION INTELLIGENCE */}
                {activeStage === 6 && (
                  <motion.div
                    key="stage-6"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-wider">
                      <BarChart3 className="w-4 h-4 text-[#00E0FF]" />
                      <span>{`STAGE 07 // DECISION INTELLIGENCE`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        DecisionLens Universal BI
                      </h3>
                      <p className="text-xs font-mono text-[#00E0FF] mt-1 font-semibold">
                        DuckDB • 269 Automated Tests • 30 Routes
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Production Hardened Engineering:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Completed 30-phase zero-trust production release (v2.1.0-RC) with 269 passing pytests. In-memory DuckDB engine processing 1M+ records, statistical time-series revenue forecasting, and conversational business copilot.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-xs font-mono text-[#00E0FF]">
                      Live on Vercel & Render with asynchronous multi-table ZIP processing and Windows-1252 byte normalization.
                    </div>
                  </motion.div>
                )}

                {/* STAGE 08: VOICE OF THE CUSTOMER — LOOP 2.0 */}
                {activeStage === 7 && (
                  <motion.div
                    key="stage-7"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00FFA3] uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-[#00FFA3]" />
                      <span>{`STAGE 08 // VOICE OF THE CUSTOMER`}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-black font-mono text-white">
                        LOOP 2.0 AI Intelligence
                      </h3>
                      <p className="text-xs font-mono text-[#00FFA3] mt-1 font-semibold">
                        Customer Feedback Intelligence • 15 Modules • 79 Tests
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Mathematically Grounded Insights:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Engineered enterprise platform ingesting multi-channel signals (Zendesk, Intercom, App Stores, CSVs). Dual NLP pipeline (Sentiment, Plutchik-8 emotions, ABSA, 0–100 severity) and grounded root cause analysis with verifiable citations.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#00FFA3]/10 border border-[#00FFA3]/30 text-xs font-mono text-[#00FFA3]">
                      Managed Neon PostgreSQL via Prisma, multi-tenant RBAC, and 79/79 passing automated tests.
                    </div>
                  </motion.div>
                )}

                {/* STAGE 09: FROM LEARNING TO SHIPPING */}
                {activeStage >= 8 && (
                  <motion.div
                    key="stage-8"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00FFA3] uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-[#00FFA3]" />
                      <span>{`STAGE 09 // FROM LEARNING TO SHIPPING`}</span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black font-mono text-white">
                        Engineering Command Center
                      </h3>
                      <p className="text-xs font-mono text-[#00FFA3] mt-1 font-semibold">
                        &ldquo;I don&apos;t just learn technologies. I use them to build systems.&rdquo;
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-[#00FFA3]/40 space-y-2">
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        7 production platforms shipped, 75+ secured REST API endpoints, 350+ automated tests verified, and 100% full-stack architectural coverage across frontend, backend, databases, AI/ML, and DevOps.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-300">
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800">
                        <span className="text-[#00FFA3] font-bold">7</span> Shipped Platforms
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800">
                        <span className="text-[#00E0FF] font-bold">75+</span> REST Endpoints
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800">
                        <span className="text-[#7C5CFF] font-bold">350+</span> Automated Tests
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#05060a] border border-slate-800">
                        <span className="text-amber-400 font-bold">100%</span> Full-Stack Coverage
                      </div>
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
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm font-bold text-white">{p.title}</div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {p.status}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{p.description}</div>
                    <div className="text-[10px] font-mono text-[#00E0FF] mt-2">{p.technologies.slice(0, 5).join(' • ')}</div>
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
