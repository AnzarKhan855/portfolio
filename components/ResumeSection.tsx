'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Copy, Check, ExternalLink, Code2, 
  Layers, GraduationCap, Briefcase, Award, Mail, Phone, MapPin, 
  Github, Linkedin, CheckCircle2, ChevronRight 
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { PERSONAL_INFO, PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const Resume3DCanvas = dynamic(
  () => import('@/components/3d/Resume3DCanvas').then((mod) => mod.Resume3DCanvas),
  { ssr: false }
);

export const ResumeSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [viewMode, setViewMode] = useState<'standard' | 'json'>('standard');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    audioEngine.playClick();
    const resumeText = `ANZAR KHAN
Full-Stack Developer | MERN Stack Developer | AI/ML Engineer
Kanpur / Remote, India | anzark964@gmail.com | +91-7705855855
GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

EDUCATION:
Allenhouse Institute of Technology
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 - 2027)

FLAGSHIP PRODUCTION PLATFORMS:
1. DecisionLens AI — Enterprise Decision Intelligence Platform
   https://github.com/AnzarKhan855/decisionlens-enterprise-analytics
2. RiskShield AI — Enterprise Fraud Intelligence & Decisioning Mesh (P99 < 15ms)
   https://github.com/AnzarKhan855/riskshield-ai
3. CampusAgent AI — Agentic AI Student Productivity Platform (Qdrant Vector DB)
   https://github.com/AnzarKhan855/campusagent-ai
4. EvalMentor AI — AI Interview Agent & Evaluation Platform
   https://github.com/AnzarKhan855/evalmentor-ai
5. AI Resume Builder — ATS-Friendly SaaS & Document Parsing
   https://github.com/AnzarKhan855/resume-builder
6. BookStore SQL Analytics — Relational Database & Revenue Intelligence
   https://github.com/AnzarKhan855/BookStore-SQL-Analysis

CORE TECHNICAL MATRIX:
Next.js 15, React 19, TypeScript, Tailwind CSS, FastAPI, Python 3.12, Node.js, Express,
PostgreSQL, MongoDB Atlas, Qdrant Vector DB, XGBoost, Scikit-Learn, TreeSHAP, Docker, Vercel, Render.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      status: 'In Progress (Active Engineering)',
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
    <section id="resume" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// SECTIONS 16 TO 20 — 3D RESUME ARCHITECTURE`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Verified <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">3D Resume Experience</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Explore Anzar Khan&apos;s verified credentials as an interactive 3D document architecture. Fully accessible as standard HTML and downloadable via official server API.
            </p>
          </div>

          {/* Action Buttons: Download, Copy, View Mode */}
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
                setViewMode(viewMode === 'standard' ? 'json' : 'standard');
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-purple-400 text-purple-300 font-mono text-xs flex items-center space-x-1.5 transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>{viewMode === 'standard' ? 'Resume as Code' : 'Document View'}</span>
            </button>
          </div>
        </div>

        {viewMode === 'standard' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 3D Interactive Floating Document Canvas */}
            <div className="lg:col-span-6 space-y-4">
              <Resume3DCanvas
                selectedSection={activeSection}
                onSectionSelect={(id) => {
                  audioEngine.playClick();
                  setActiveSection(id);
                }}
              />

              {/* Section Selector Quick Tabs */}
              <div className="flex flex-wrap gap-1.5 p-2 rounded-2xl bg-[#090c18] border border-slate-800">
                {[
                  { id: 'profile', label: 'Identity' },
                  { id: 'education', label: 'Education' },
                  { id: 'flagship', label: 'Flagship Systems' },
                  { id: 'platforms', label: 'AI Platforms' },
                  { id: 'stack', label: 'Tech Stack' },
                  { id: 'data-sql', label: 'Data & Research' },
                  { id: 'contact', label: 'Verified Channels' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      audioEngine.playHover();
                      setActiveSection(tab.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      activeSection === tab.id
                        ? 'bg-[#00E0FF]/15 text-[#00E0FF] border border-[#00E0FF]/40 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Accessible Readable HTML Detailed View corresponding to 3D state */}
            <div className="lg:col-span-6 glass-panel-active rounded-3xl p-8 sm:p-10 border border-[#00E0FF]/30 min-h-[540px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeSection === 'profile' && (
                  <motion.div
                    key="profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-[#00E0FF] uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>SECTION 01 // PROFESSIONAL IDENTITY</span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-black font-mono text-white">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-sm font-mono text-[#00E0FF] mt-1 font-semibold">
                        {PERSONAL_INFO.title}
                      </p>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Executive Summary:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Full-Stack Developer and AI/ML Engineer pursuing B.Tech at Allenhouse Institute of Technology. Experienced in architecting production web platforms, high-throughput FastAPI microservices, sub-15ms AI fraud decisioning engines, and vector RAG pipelines deployed live.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#090c18] border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Focus</div>
                        <div className="text-xs font-mono font-bold text-[#00E0FF] mt-0.5">End-to-End Systems</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#090c18] border border-slate-800">
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Methodology</div>
                        <div className="text-xs font-mono font-bold text-[#7C5CFF] mt-0.5">Clean Architecture</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                      <span>SECTION 02 // ACADEMIC FOUNDATION</span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold font-mono text-white">
                        {PERSONAL_INFO.education.institution}
                      </h3>
                      <div className="text-sm font-mono text-[#00E0FF] mt-1 font-semibold">
                        {PERSONAL_INFO.education.degree}
                      </div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">
                        Duration: {PERSONAL_INFO.education.years}
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="text-xs font-mono text-white font-bold uppercase">
                        Rigorous CS & AI Coursework:
                      </div>
                      <p className="text-xs font-sans text-slate-300 leading-relaxed">
                        Specialized training in Neural Networks, Deep Learning, Relational Databases (RDBMS), Data Structures & Algorithms, Operating Systems, Computer Networks, and System Architecture.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 font-mono text-xs text-purple-300">
                      Research Paper: &ldquo;Multi-Mode Charging Architecture: A Unified Power Bank & Charger Solution&rdquo; (Presented 2024)
                    </div>
                  </motion.div>
                )}

                {activeSection === 'flagship' && (
                  <motion.div
                    key="flagship"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                      <Briefcase className="w-4 h-4 text-emerald-400" />
                      <span>SECTION 03 // FLAGSHIP SYSTEMS</span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-bold text-white">DecisionLens AI</span>
                          <span className="text-[10px] font-mono text-emerald-400">Live Production</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          Enterprise decision intelligence platform ingesting 1M+ records for automated domain detection, statistical time-series forecasting, and conversational RAG business querying.
                        </p>
                        <div className="text-[11px] font-mono text-[#00E0FF]">Next.js 15 • FastAPI • Pandas • PostgreSQL • Docker</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm font-bold text-white">RiskShield AI</span>
                          <span className="text-[10px] font-mono text-emerald-400">P99 &lt; 15ms</span>
                        </div>
                        <p className="text-xs text-slate-300 font-sans leading-relaxed">
                          Enterprise fraud decisioning mesh implementing Clean Architecture, AST rule compiler, calibrated XGBoost ensemble, and TreeSHAP regulatory explainability.
                        </p>
                        <div className="text-[11px] font-mono text-[#00E0FF]">FastAPI • Python 3.12 • Next.js 14 • XGBoost • SHAP</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'platforms' && (
                  <motion.div
                    key="platforms"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>SECTION 04 // AI PLATFORMS & SAAS</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-1.5">
                      <div className="font-mono text-sm font-bold text-white">CampusAgent AI</div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        Agentic academic productivity platform featuring Qdrant vector database RAG search over PDFs (&lt;45ms), automated practice test generator, and 15+ REST endpoints.
                      </p>
                      <div className="text-[11px] font-mono text-amber-400">Next.js 15 • FastAPI • Qdrant • Groq LLM</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-1.5">
                      <div className="font-mono text-sm font-bold text-white">EvalMentor AI</div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        Full-stack AI interview preparation platform with resume PDF parsing, dynamic question generation, and recruiter-style response evaluation in &lt;1.2s.
                      </p>
                      <div className="text-[11px] font-mono text-amber-400">Next.js • FastAPI • MongoDB • Groq LLM</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-1.5">
                      <div className="font-mono text-sm font-bold text-white">AI Resume Builder</div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        ATS-friendly resume generator scoring 98/100 compliance on industry parsers, with real-time state syncing and cloud document storage.
                      </p>
                      <div className="text-[11px] font-mono text-amber-400">Next.js • Supabase • Clerk Auth</div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'stack' && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-wider">
                      <Code2 className="w-4 h-4 text-rose-400" />
                      <span>SECTION 05 // CORE TECHNICAL MATRIX</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-[#090c18] rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-[10px] uppercase">Frontend</div>
                        <div className="text-white mt-1">Next.js 15, React 19, TypeScript, Tailwind CSS, Three.js</div>
                      </div>
                      <div className="p-3 bg-[#090c18] rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-[10px] uppercase">Backend</div>
                        <div className="text-white mt-1">FastAPI, Python 3.12, Node.js, Express, REST APIs, Microservices</div>
                      </div>
                      <div className="p-3 bg-[#090c18] rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-[10px] uppercase">Databases</div>
                        <div className="text-white mt-1">PostgreSQL, MongoDB Atlas, Qdrant Vector DB, Supabase, Redis</div>
                      </div>
                      <div className="p-3 bg-[#090c18] rounded-xl border border-slate-800">
                        <div className="text-slate-400 text-[10px] uppercase">AI & Data</div>
                        <div className="text-white mt-1">Groq LLMs, RAG, XGBoost, Scikit-Learn, SHAP, Pandas, Recharts</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'data-sql' && (
                  <motion.div
                    key="data-sql"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span>SECTION 06 // RELATIONAL DATA & RESEARCH</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="font-mono text-sm font-bold text-white">BookStore SQL Analytics & BI</div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        3NF normalized PostgreSQL database analysis executing 20+ complex business queries using CTEs, window rankings, and multi-table joins to isolate churn and revenue patterns.
                      </p>
                      <div className="text-[11px] font-mono text-[#00E0FF]">PostgreSQL • SQL • Window Functions • 3NF Schemas</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                      <div className="font-mono text-sm font-bold text-white">Research & Hackathons</div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">
                        • Multi-Mode Charging Architecture Research Presentation (2024)<br />
                        • AKTU AI Tech Confluence Hackathon Participant & AI Innovator (2025)
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeSection === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <span>SECTION 07 // VERIFIED DIRECT CHANNELS</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 space-y-3 font-mono text-xs">
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Mail className="w-4 h-4 text-[#00E0FF]" />
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-[#00E0FF]">
                          {PERSONAL_INFO.email}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3 text-slate-300">
                        <Phone className="w-4 h-4 text-emerald-400" />
                        <span>{PERSONAL_INFO.phone} (Direct / WhatsApp)</span>
                      </div>

                      <div className="flex items-center space-x-3 text-slate-300">
                        <MapPin className="w-4 h-4 text-[#7C5CFF]" />
                        <span>{PERSONAL_INFO.location}</span>
                      </div>

                      <div className="flex items-center space-x-3 text-slate-300">
                        <Github className="w-4 h-4 text-[#00E0FF]" />
                        <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          github.com/{PERSONAL_INFO.githubUsername}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Quick Jump to Contact */}
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
        ) : (
          /* Resume as Code JSON Schema View */
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
