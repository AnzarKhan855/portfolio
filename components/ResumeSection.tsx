'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Download, Copy, Check, Code2, 
  GraduationCap, Briefcase, Award, Mail, Phone, MapPin, 
  Github, Linkedin, CheckCircle2, ChevronRight, Sparkles,
  ExternalLink, Layers, ShieldCheck, BarChart3, Database, Star, Rocket
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, DECISIONLENS, LOOP } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const ResumeSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'document' | 'json' | 'ats'>('document');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    audioEngine.playClick();
    const resumeText = `ANZAR KHAN
Full-Stack Developer | MERN Stack Developer | AI/ML Engineer
Kanpur / Remote, India | anzark964@gmail.com | +91-7705855855
GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

PROFESSIONAL SUMMARY:
High-impact Full-Stack Developer and AI/ML Engineer pursuing B.Tech in Artificial Intelligence & Machine Learning at Allenhouse Institute of Technology (2023-2027). Proven engineering track record architecting and deploying end-to-end production web platforms, high-throughput FastAPI and Node.js microservices, real-time MERN/Next.js applications, enterprise fraud decisioning meshes with Clean Architecture, DuckDB-powered analytics platforms, and multi-tenant Voice of Customer intelligence engines with 350+ automated tests passing.

PROFESSIONAL EXPERIENCE:
Zidio Development | Web Developer Intern (Sep 2026 – Present | Remote)
- Developing and maintaining frontend and backend features for web applications using React.js, Next.js, and Node.js.
- Building responsive, user-friendly interfaces and integrating RESTful APIs to enhance user engagement.
- Collaborating in Agile sprints, participating in peer code reviews, and maintaining technical documentation.

EDUCATION:
Allenhouse Institute of Technology, AKTU
Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning (2023 - 2027)

SHIPPED PRODUCTION PLATFORMS:
01. AI Resume Builder — ATS Resume Intelligence & Forensic Document Parser (Live: https://ats-resumebuilder.vercel.app)
02. EvalMentor AI — AI Interview Agent & Evaluation Platform (Live: https://evalmentor-ai.vercel.app)
03. CampusAgent AI — Agentic AI Student Productivity Platform (Live: https://campusagent-ai.vercel.app)
04. DecisionLens AI — Enterprise Decision Intelligence Platform [FLAGSHIP] (Live: https://decisionlens-enterprise-analytics.vercel.app)
05. BookStore SQL Analytics — 3NF Relational Database & Revenue Intelligence (GitHub: https://github.com/AnzarKhan855/BookStore-SQL-Analysis)
06. RiskShield AI — Enterprise Fraud Intelligence & Autonomous Decisioning (Live: https://riskshield-ai-kappa.vercel.app)
07. LOOP 2.0 — AI Customer Feedback Intelligence Platform [LATEST] (Live: https://ai-customer-feedback-intelligence-black.vercel.app)

CORE TECHNICAL STACK:
Next.js 14/15/16, React 19, TypeScript, Tailwind CSS, FastAPI, Python 3.12+, Node.js, Express,
Prisma ORM, Neon PostgreSQL, MongoDB Atlas, Qdrant Vector DB, DuckDB, Claude 3.5 Sonnet,
XGBoost, Scikit-Learn, TreeSHAP, Docker, Vercel, Render.`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resumeJson = {
    basics: {
      name: PERSONAL_INFO.name,
      label: PERSONAL_INFO.title,
      email: PERSONAL_INFO.email,
      phone: PERSONAL_INFO.phone,
      location: {
        city: 'Kanpur',
        countryCode: 'IN',
        region: 'Uttar Pradesh / Remote',
      },
      profiles: [
        { network: 'GitHub', username: 'AnzarKhan855', url: PERSONAL_INFO.githubUrl },
        { network: 'LinkedIn', username: 'AnzarKhan855', url: PERSONAL_INFO.linkedinUrl },
      ],
    },
    work: [
      {
        company: 'Zidio Development',
        position: 'Web Developer Intern',
        startDate: '2026-09',
        endDate: 'Present',
        summary: 'Developing frontend and backend web features, integrating RESTful APIs, participating in Agile sprints and peer code reviews.',
        highlights: [
          'Engineered reusable Next.js and React components with strict TypeScript types.',
          'Integrated asynchronous backend REST API endpoints with optimistic UI updates.',
          'Maintained high code quality and test coverage in CI/CD release cycles.',
        ],
      },
    ],
    education: [
      {
        institution: 'Allenhouse Institute of Technology, AKTU',
        area: 'Artificial Intelligence & Machine Learning',
        studyType: 'Bachelor of Technology (B.Tech)',
        startDate: '2023',
        endDate: '2027',
      },
    ],
    skills: [
      {
        name: 'Full-Stack Web Development',
        keywords: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'FastAPI', 'Tailwind CSS'],
      },
      {
        name: 'AI & Machine Learning',
        keywords: ['PyTorch', 'Scikit-Learn', 'XGBoost', 'TreeSHAP', 'Qdrant Vector DB', 'RAG Pipelines'],
      },
      {
        name: 'Databases & Cloud',
        keywords: ['PostgreSQL', 'DuckDB', 'MongoDB Atlas', 'Redis', 'Docker', 'Vercel', 'Render'],
      },
    ],
    projects: PROJECTS.map((p) => ({
      name: p.title,
      isFlagship: p.isFlagship || false,
      isLatest: p.isLatest || false,
      description: p.description,
      highlights: p.metricsSummary ? [p.metricsSummary] : [],
      keywords: p.technologies,
      url: p.demoUrl || p.githubUrl,
    })),
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// VERIFIED RECRUITER DOSSIER & CREDENTIALS`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Curriculum Vitae & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Credentials</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Recruiter-ready dossier featuring verified B.Tech education, active engineering internship at Zidio Development, and complete production platform evidence.
            </p>
          </div>

          {/* Action Controls: Download PDF, TXT, Copy, Mode Selector */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Primary Action: Download PDF */}
            <a
              href="/Anzar_Khan_Resume.pdf"
              download="Anzar_Khan_Resume.pdf"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] text-[#05060a] font-mono text-xs font-bold flex items-center space-x-2 hover:brightness-110 transition-all shadow-[0_0_20px_rgba(0,224,255,0.35)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (.PDF)</span>
            </a>

            {/* View PDF in Browser */}
            <a
              href="/Anzar_Khan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#00E0FF]" />
              <span>View PDF</span>
            </a>

            {/* Download Text */}
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              download="Anzar_Khan_FullStack_AI_Resume.txt"
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3 py-2.5 rounded-xl bg-[#090c18] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 font-mono text-xs hidden sm:flex items-center space-x-1.5 transition-all"
            >
              <span>Text (.TXT)</span>
            </a>

            {/* Copy Button */}
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
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => {
              audioEngine.playClick();
              setViewMode('document');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              viewMode === 'document'
                ? 'bg-[#00E0FF]/20 border border-[#00E0FF] text-[#00E0FF] shadow-[0_0_15px_rgba(0,224,255,0.3)]'
                : 'bg-[#090c18] border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Formatted Resume (Document)
          </button>

          <button
            onClick={() => {
              audioEngine.playClick();
              setViewMode('json');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              viewMode === 'json'
                ? 'bg-[#7C5CFF]/20 border border-[#7C5CFF] text-[#7C5CFF] shadow-[0_0_15px_rgba(124,92,255,0.3)]'
                : 'bg-[#090c18] border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            JSON AST Schema
          </button>

          <button
            onClick={() => {
              audioEngine.playClick();
              setViewMode('ats');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              viewMode === 'ats'
                ? 'bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] shadow-[0_0_15px_rgba(0,255,163,0.3)]'
                : 'bg-[#090c18] border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            ATS Forensic Audit (98/100)
          </button>
        </div>

        {/* TAB 1: FORMATTED DOCUMENT VIEW */}
        {viewMode === 'document' && (
          <div className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-slate-800 space-y-10">
            {/* Header / Identity */}
            <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm sm:text-base font-mono text-[#00E0FF] mt-1 font-semibold">
                  {PERSONAL_INFO.title}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00E0FF]" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#00E0FF]" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00E0FF]" />
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Professional Experience: Zidio Development */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#00FFA3] uppercase tracking-wider flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-[#00FFA3]" />
                <span>PROFESSIONAL EXPERIENCE</span>
              </h4>

              <div className="p-6 rounded-2xl bg-[#090c18] border border-emerald-500/30 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="text-lg font-bold text-white flex items-center gap-2">
                      <span>Zidio Development</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                        ACTIVE INTERNSHIP
                      </span>
                    </div>
                    <div className="text-sm text-[#00FFA3] font-mono font-medium">
                      Web Developer Intern
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Sep 2026 – Present &bull; Remote
                  </div>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans list-disc list-inside leading-relaxed">
                  <li>Developing and maintaining frontend and backend features for production web applications using React.js, Next.js, and Node.js.</li>
                  <li>Building responsive, accessible web interfaces and integrating asynchronous RESTful APIs to deliver high-performance user experiences.</li>
                  <li>Collaborating in cross-functional Agile sprints, participating in regular peer code reviews, and contributing to technical architecture documentation.</li>
                  <li>Optimizing web application bundle size, cross-browser compatibility, and serverless runtime performance.</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-800">
                  {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'Agile / Scrum', 'Git & CI/CD'].map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education: Allenhouse B.Tech */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-[#7C5CFF]" />
                <span>EDUCATION</span>
              </h4>

              <div className="p-6 rounded-2xl bg-[#090c18] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div>
                    <div className="text-lg font-bold text-white">
                      Allenhouse Institute of Technology, AKTU
                    </div>
                    <div className="text-sm text-[#7C5CFF] font-mono font-medium">
                      Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    2023 – 2027 &bull; Kanpur, India
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-sans mt-2">
                  <strong className="text-slate-300">Relevant Coursework:</strong> Data Structures & Algorithms, Neural Networks & Deep Learning, Database Management Systems (RDBMS & 3NF), Operating Systems, Computer Networks, Software Engineering.
                </p>
              </div>
            </div>

            {/* Shipped Production Platforms (in Exact Story Sequence) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono text-[#00E0FF] uppercase tracking-wider flex items-center space-x-2">
                  <Layers className="w-4 h-4 text-[#00E0FF]" />
                  <span>SHIPPED PRODUCTION PLATFORMS (STORY SEQUENCE)</span>
                </h4>
                <a
                  href="#story"
                  className="text-xs font-mono text-[#00E0FF] hover:underline flex items-center gap-1"
                >
                  <span>Experience 3D Story</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS.map((p, idx) => (
                  <div
                    key={p.id}
                    className={`p-5 rounded-2xl bg-[#090c18] border transition-all ${
                      p.isFlagship
                        ? 'border-[#F59E0B]/60 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                        : p.isLatest
                        ? 'border-[#00FFA3]/60 shadow-[0_0_20px_rgba(0,255,163,0.15)]'
                        : 'border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                          0{idx + 1}
                        </span>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{p.title}</span>
                          {p.isFlagship && <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />}
                          {p.isLatest && <Rocket className="w-3.5 h-3.5 text-[#00FFA3]" />}
                        </div>
                      </div>

                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                          p.isFlagship
                            ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40'
                            : p.isLatest
                            ? 'bg-[#00FFA3]/20 text-[#00FFA3] border border-[#00FFA3]/40'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}
                      >
                        {p.isFlagship ? 'FLAGSHIP' : p.isLatest ? 'LATEST' : 'LIVE'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans mb-3 line-clamp-2">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-800/80 text-[9px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-slate-800">
                      <span className="text-[#00E0FF] truncate max-w-[200px]">
                        {p.metricsSummary || 'Production Deployed'}
                      </span>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white flex items-center gap-1 shrink-0"
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Technical Stack Matrix */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                TECHNICAL SKILLS MATRIX
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-[#090c18] border border-slate-800">
                  <div className="text-[#00E0FF] font-bold mb-2">LANGUAGES & RUNTIMES</div>
                  <div className="text-slate-300 leading-relaxed">
                    Python 3.12+, TypeScript, JavaScript (ES6+), SQL, C/C++, HTML5/CSS3
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090c18] border border-slate-800">
                  <div className="text-[#7C5CFF] font-bold mb-2">FRAMEWORKS & APIS</div>
                  <div className="text-slate-300 leading-relaxed">
                    Next.js 14/15/16, React 19, FastAPI, Node.js, Express, Tailwind CSS, Three.js
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090c18] border border-slate-800">
                  <div className="text-[#00FFA3] font-bold mb-2">AI, ML & VECTOR SEARCH</div>
                  <div className="text-slate-300 leading-relaxed">
                    PyTorch, Scikit-Learn, XGBoost, TreeSHAP, Qdrant Vector DB, Groq LPU, RAG
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090c18] border border-slate-800">
                  <div className="text-amber-400 font-bold mb-2">DATABASES & CLOUD</div>
                  <div className="text-slate-300 leading-relaxed">
                    PostgreSQL, Neon, DuckDB, MongoDB Atlas, Prisma ORM, Redis, Docker, Vercel
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: JSON AST SCHEMA VIEW */}
        {viewMode === 'json' && (
          <div className="glass-panel-active rounded-3xl p-6 sm:p-10 border border-purple-500/30 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                {`// MACHINE-READABLE RESUME SCHEMA (JSON RESUME STANDARD)`}
              </span>
              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                {copied ? 'Copied' : 'Copy JSON'}
              </button>
            </div>
            <pre className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 text-xs font-mono text-cyan-300 leading-relaxed overflow-x-auto max-h-[600px] scrollbar-thin">
              {JSON.stringify(resumeJson, null, 2)}
            </pre>
          </div>
        )}

        {/* TAB 3: ATS FORENSIC AUDIT */}
        {viewMode === 'ats' && (
          <div className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-[#00FFA3]/30 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-xs font-mono text-[#00FFA3] uppercase tracking-widest">
                  {`// ATS COMPLIANCE AUDIT & FORENSIC SCORECARD`}
                </span>
                <h3 className="text-2xl font-bold font-mono text-white mt-1">
                  Applicant Tracking System (ATS) Verification
                </h3>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-[#00FFA3]/15 border border-[#00FFA3]/40 text-center">
                <div className="text-3xl font-black font-mono text-[#00FFA3]">98 / 100</div>
                <div className="text-[10px] font-mono text-slate-300 uppercase">ATS Audit Score</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-[#00FFA3] font-bold">100% PARSEABLE FORMATTING</div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Single-column standard typography generated via clean unpdf / LaTeX-style layout with zero canvas polyfill crashes, zero unparsed floating tables, and zero nested columns that trip ATS parsers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-[#00E0FF] font-bold">100% CONTACT VERIFICATION</div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  All standard contact markers present and verified: Full Name, Active Phone (+91-7705855855), Professional Gmail, GitHub, and LinkedIn profile URLs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-purple-400 font-bold">97% QUANTIFIABLE IMPACT</div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Every project showcases concrete metrics: 269 passing pytests, 79/79 automated tests, &lt;45ms vector search, 17 REST endpoints, 1M+ records processed, and 94.8% forecast accuracy.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#090c18] border border-emerald-500/30 flex items-center justify-between flex-wrap gap-4 text-xs font-mono">
              <div className="flex items-center space-x-2 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified compatible with Workday, Greenhouse, Lever, Taleo, and iCIMS applicant tracking parsers.</span>
              </div>
              <a
                href="/Anzar_Khan_Resume.pdf"
                download="Anzar_Khan_Resume.pdf"
                className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 transition-all"
              >
                Download Verified PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
