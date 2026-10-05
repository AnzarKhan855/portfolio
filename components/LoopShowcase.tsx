'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Activity, TrendingUp, Cpu, Server, 
  BarChart3, Brain, Zap, Shield, CheckCircle2, Clock, Upload, Search, 
  FileText, Bot, ArrowRight, ExternalLink, Github, Terminal, Layers, 
  AlertCircle, Database, Users, ChevronRight, Check, Compass
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { PROJECTS, LOOP, Project } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';
import { ProjectModal } from '@/components/ProjectModal';
import { LoopPipelineNode, LOOP_PIPELINE_NODES } from '@/components/3d/LoopArchitectureCanvas';

const LoopArchitectureCanvas = dynamic(
  () => import('@/components/3d/LoopArchitectureCanvas').then((mod) => mod.LoopArchitectureCanvas),
  { ssr: false }
);

const ENTERPRISE_CAPABILITIES = [
  {
    id: '01',
    title: 'Customer Health Intelligence',
    category: 'Analytics',
    badge: '0–100 Composite',
    description: 'Deterministic 0–100 customer health index factoring positive sentiment ratio (40%), inverse critical severity count (30%), inverse churn flag count (20%), and feedback volume vitality (10%).',
    endpoint: 'GET /api/health-score',
  },
  {
    id: '02',
    title: 'Grounded Root Cause Explorer',
    category: 'AI / RAG',
    badge: 'Verifiable Citations',
    description: 'Evidence-backed diagnostic hypotheses. Every causal statement must link to verified customer feedback record IDs with exact substring citations—eliminating hallucination.',
    endpoint: 'GET /api/insights/root-cause',
  },
  {
    id: '03',
    title: 'Emerging Issue Trend Detection',
    category: 'Analytics',
    badge: 'Velocity Surges',
    description: 'Compares rolling 7-day feedback volumes against historic baselines to detect Poisson/Z-score surges, sudden sentiment degradation, and anomalous feedback velocity.',
    endpoint: 'GET /api/analytics/trends/emerging',
  },
  {
    id: '04',
    title: 'Product Gap & Competitive Intelligence',
    category: 'Strategy',
    badge: 'ARR Risk Mining',
    description: 'Extracts missing capabilities, integration requests, and competitor mentions from raw unstructured text, calculating total exposed enterprise ARR per deficit.',
    endpoint: 'GET /api/product/gaps',
  },
  {
    id: '05',
    title: 'Strategic Priority Matrix (2x2)',
    category: 'PM Hub',
    badge: 'Impact vs Urgency',
    description: 'Evaluates customer feedback initiatives across Impact (severity + ARR affected) and Urgency (sentiment velocity + surge) to categorize into Quick Wins, Major Projects, Fill-ins, and Deprioritize.',
    endpoint: 'GET /api/strategy/priority-matrix',
  },
  {
    id: '06',
    title: 'Semantic Feedback Clustering',
    category: 'AI / NLP',
    badge: 'Jaccard & Embeddings',
    description: 'Groups related feedback into coherent semantic clusters using token Jaccard similarity and aspect tags, computing centroid sentiment, aggregate severity, and dominant emotion.',
    endpoint: 'GET /api/feedback/clusters',
  },
  {
    id: '07',
    title: 'Executive Intelligence Briefing',
    category: 'Executive',
    badge: 'Weekly Synthesis',
    description: 'Generates concise leadership briefings summarizing weekly VoC trajectory, Net Sentiment, critical P0 blockers, and actionable leadership recommendations.',
    endpoint: 'GET /api/insights/executive-briefing',
  },
  {
    id: '08',
    title: 'Intelligent Feedback Deduplication',
    category: 'Data Hygiene',
    badge: 'Levenshtein Filter',
    description: 'Scans feedback records for near-identical submissions using Levenshtein distance and normalized text hashing to maintain pristine data hygiene.',
    endpoint: 'GET /api/feedback/duplicates',
  },
  {
    id: '09',
    title: 'Action Recommendation Engine',
    category: 'Execution',
    badge: '1-Click Promotion',
    description: 'Converts high-severity feedback trends and AI hypotheses directly into formal engineering roadmap items with 1-click promotion.',
    endpoint: 'POST /api/recommendations/promote',
  },
  {
    id: '10',
    title: 'AI Executive Report Builder',
    category: 'Reporting',
    badge: 'Markdown & JSON',
    description: 'Generates comprehensive executive reports with configurable sections (Executive Summary, Sentiment Breakdown, ABSA Highlights, Roadmap Progress) exportable as Markdown and JSON.',
    endpoint: 'POST /api/reports/custom',
  },
  {
    id: '11',
    title: 'Enterprise Activity Center',
    category: 'Observability',
    badge: 'Real-time Feed',
    description: 'Centralized operational activity and notification stream with read state tracking, severity indicators, and quick action links.',
    endpoint: 'GET /api/notifications',
  },
  {
    id: '12',
    title: 'Global Command Palette (Cmd+K)',
    category: 'Productivity',
    badge: 'Instant Fuzzy Search',
    description: 'Instant keyboard-driven fuzzy navigation across all 15 platform modules, customer feedback records, customer accounts, and settings.',
    endpoint: 'Client-side Hotkey Modal',
  },
  {
    id: '13',
    title: 'Product Manager Decision Hub',
    category: 'PM Hub',
    badge: 'Unified PM Console',
    description: 'Dedicated command center for product managers unifying the Strategic Priority Matrix, Emerging Issues Radar, Product Gaps, and Root Cause Explorer.',
    endpoint: 'GET /pm',
  },
  {
    id: '14',
    title: 'Ingestion Operations Command Center',
    category: 'Data Hygiene',
    badge: 'Channel Telemetry',
    description: 'Monitors ingestion pipeline health, channel throughput (Zendesk, Intercom, App Stores), 0–100 data hygiene scores, and schema validation diagnostics.',
    endpoint: 'GET /api/datasets/diagnostics',
  },
  {
    id: '15',
    title: 'Enterprise Control Center',
    category: 'Governance',
    badge: 'Admin Diagnostics',
    description: 'Workspace administrator diagnostics monitoring database latency, tenant quotas, role-based access control (RBAC), and maintenance runbooks.',
    endpoint: 'GET /api/admin/diagnostics',
  },
];

export const LoopShowcase: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'loop-ai') || PROJECTS[0];
  const [activeTab, setActiveTab] = useState<'architecture' | 'capabilities' | 'priority-matrix'>('architecture');
  const [selectedNode, setSelectedNode] = useState<LoopPipelineNode>(LOOP_PIPELINE_NODES[3]); // Default: Dual NLP
  const [activeCapabilityCat, setActiveCapabilityCat] = useState<string>('All');
  const [modalOpen, setModalOpen] = useState(false);

  const capabilityCategories = ['All', 'AI / NLP', 'Analytics', 'Strategy', 'PM Hub', 'Data Hygiene', 'Executive'];

  const filteredCapabilities = ENTERPRISE_CAPABILITIES.filter((c) => {
    if (activeCapabilityCat === 'All') return true;
    return c.category.toLowerCase().includes(activeCapabilityCat.toLowerCase());
  });

  return (
    <section id="loop" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Anchors for navigation aliases */}
      <div id="loop-flagship" className="absolute -top-10 left-0 pointer-events-none" />
      <div id="loop-ai" className="absolute -top-10 left-0 pointer-events-none" />

      {/* Background Glow Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00FFA3]/10 via-transparent to-[#7C5CFF]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centerpiece Flagship Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8 border-b border-[#00FFA3]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#00FFA3]/15 border border-[#00FFA3]/40 text-[#00FFA3] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LATEST PRODUCTION PLATFORM • 2026 RELEASE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight isolate-text transform-gpu">
              LOOP <span className="text-[#00FFA3]">2.0</span>
            </h2>
            <p className="text-[#00FFA3] font-mono text-sm sm:text-base mt-1 font-semibold">
              AI Customer Feedback Intelligence & Strategic Action Platform
            </p>
          </div>

          {/* Status & Production Badges */}
          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-400/50 text-emerald-300 font-mono text-xs shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>🚀 LIVE PRODUCTION DEPLOYMENT</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#00FFA3]/15 border border-[#00FFA3]/40 text-[#00FFA3] font-mono text-xs">
              <Shield className="w-3.5 h-3.5 text-[#00FFA3]" />
              <span>79 / 79 Automated Tests Passing</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#7C5CFF]/20 border border-[#7C5CFF]/40 text-purple-300 font-mono text-xs">
              <Database className="w-3.5 h-3.5 text-purple-400" />
              <span>Neon PostgreSQL + Prisma ORM</span>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href={LOOP.frontend}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00FFA3] via-[#00E0FF] to-[#00FFA3] bg-[length:200%_auto] hover:bg-right text-[#05060a] font-mono text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_0_25px_rgba(0,255,163,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            <span>LAUNCH LIVE PLATFORM</span>
          </a>

          <a
            href={LOOP.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="px-5 py-3 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00FFA3] text-slate-200 hover:text-white font-mono text-xs flex items-center space-x-2 transition-all"
          >
            <Github className="w-4 h-4 text-[#00FFA3]" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={() => {
              audioEngine.playClick();
              setModalOpen(true);
            }}
            onMouseEnter={() => audioEngine.playHover()}
            className="px-5 py-3 rounded-xl bg-[#090c18] border border-slate-800 hover:border-purple-400 text-purple-300 font-mono text-xs flex items-center space-x-2 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Full Case Study</span>
          </button>
        </div>

        {/* Live Operational Metrics HUD Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 text-center">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Pre-Seeded Corpus</div>
            <div className="text-xl font-bold font-mono text-[#00FFA3] mt-1">127+ Verified Signals</div>
            <div className="text-[9px] font-mono text-slate-500 mt-0.5">Zendesk, Intercom, App Stores</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 text-center">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Enterprise Modules</div>
            <div className="text-xl font-bold font-mono text-[#00E0FF] mt-1">15 High-Value Features</div>
            <div className="text-[9px] font-mono text-slate-500 mt-0.5">PM Hub, Gaps, Root Cause</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 text-center">
            <div className="text-[10px] font-mono text-slate-400 uppercase">NLP Intelligence</div>
            <div className="text-xl font-bold font-mono text-purple-300 mt-1">Dual-Engine Pipeline</div>
            <div className="text-[9px] font-mono text-slate-500 mt-0.5">Claude 3.5 + Deterministic Fallback</div>
          </div>

          <div className="p-4 rounded-2xl bg-[#090c18] border border-slate-800 text-center">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Automated Verification</div>
            <div className="text-xl font-bold font-mono text-emerald-400 mt-1">79 / 79 Tests Passing</div>
            <div className="text-[9px] font-mono text-slate-500 mt-0.5">100% Pass Rate in Release</div>
          </div>
        </div>

        {/* View Switcher Tabs: 3D Architecture, 15 Capabilities, 2x2 Matrix */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-2xl bg-[#090c18] border border-slate-800 w-fit">
          <button
            onClick={() => {
              audioEngine.playClick();
              setActiveTab('architecture');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
              activeTab === 'architecture'
                ? 'bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] font-bold shadow-[0_0_15px_rgba(0,255,163,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D System Architecture</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playClick();
              setActiveTab('capabilities');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
              activeTab === 'capabilities'
                ? 'bg-[#00E0FF]/20 border border-[#00E0FF] text-[#00E0FF] font-bold shadow-[0_0_15px_rgba(0,224,255,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>15 Enterprise Capabilities</span>
          </button>

          <button
            onClick={() => {
              audioEngine.playClick();
              setActiveTab('priority-matrix');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2 ${
              activeTab === 'priority-matrix'
                ? 'bg-[#7C5CFF]/20 border border-[#7C5CFF] text-purple-300 font-bold shadow-[0_0_15px_rgba(124,92,255,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Strategic Priority Matrix (2x2)</span>
          </button>
        </div>

        {/* Tab 1: 3D Architecture Scene & Layer Inspector */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <LoopArchitectureCanvas
              activeNodeId={selectedNode.id}
              onSelectNode={(node) => setSelectedNode(node)}
            />

            {/* Selected Node Inspector Details */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#090c18] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="font-bold text-white">STAGE 0{selectedNode.stepNumber}: {selectedNode.label}</span>
                  <span className="text-slate-500">•</span>
                  <span style={{ color: selectedNode.color }}>{selectedNode.tech}</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-2xl">
                  {selectedNode.responsibility}
                </p>
              </div>

              <div className="shrink-0 p-3 rounded-xl bg-[#05060a] border border-slate-800 text-right md:text-left">
                <div className="text-[9px] font-mono text-slate-500 uppercase">Pipeline Guarantee</div>
                <div className="text-xs font-mono font-bold mt-0.5" style={{ color: selectedNode.color }}>
                  Zero-Hallucination & Multi-Tenant Isolated
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 15 Enterprise Capabilities Grid */}
        {activeTab === 'capabilities' && (
          <div className="space-y-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {capabilityCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    audioEngine.playHover();
                    setActiveCapabilityCat(cat);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activeCapabilityCat === cat
                      ? 'bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] font-bold'
                      : 'bg-[#090c18] border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Capabilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  className="p-5 rounded-2xl bg-[#090c18] border border-slate-800/80 hover:border-[#00FFA3]/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00FFA3]/10 text-[#00FFA3] border border-[#00FFA3]/30 font-bold">
                        FEATURE {cap.id}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {cap.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold font-mono text-white group-hover:text-[#00FFA3] transition-colors mb-2">
                      {cap.title}
                    </h4>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>Endpoint:</span>
                    <span className="text-slate-300 truncate max-w-[170px]">{cap.endpoint}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Strategic Priority Matrix (2x2) */}
        {activeTab === 'priority-matrix' && (
          <div className="glass-panel-active rounded-3xl p-6 sm:p-8 border border-purple-500/30 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-mono text-white">AI Strategic Priority Matrix (2×2 Quadrant)</h3>
                <p className="text-xs font-mono text-[#00FFA3] mt-0.5">
                  Dynamically balances Impact (Severity + ARR exposed) vs. Urgency (Sentiment velocity + volume surges)
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-xl bg-[#05060a] border border-slate-800 shrink-0">
                Quadrant Evaluator Engine
              </div>
            </div>

            {/* 2x2 Quadrant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quick Wins */}
              <div className="p-5 rounded-2xl bg-[#05060a] border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    ⚡ QUICK WINS (High Impact, Low Effort)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    P0 IMMEDIATE
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  Targeted micro-optimizations that eliminate critical user friction with immediate ROI. E.g., CSV export header encoding fix, SSO session timeout warning toast.
                </p>
              </div>

              {/* Major Projects */}
              <div className="p-5 rounded-2xl bg-[#05060a] border border-[#00E0FF]/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#00E0FF] font-bold uppercase tracking-wider">
                    🚀 MAJOR PROJECTS (High Impact, High Effort)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00E0FF]/20 text-cyan-300">
                    STRATEGIC ROADMAP
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  Core architectural capabilities protecting substantial enterprise ARR. E.g., Real-time webhook ingress pipeline, automated Slack VoC notification dispatch.
                </p>
              </div>

              {/* Fill-ins */}
              <div className="p-5 rounded-2xl bg-[#05060a] border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    🧩 FILL-INS (Low Impact, Low Effort)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                    BACKLOG BUFFER
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-sans">
                  Minor ergonomic enhancements for low-volume edge cases. E.g., Dark-mode contrast adjustment on tag chips, compact table row view toggle.
                </p>
              </div>

              {/* Deprioritize */}
              <div className="p-5 rounded-2xl bg-[#05060a] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                    🛑 DEPRIORITIZE (Low Impact, High Effort)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    SHELVED
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Cosmetic overhauls or fringe feature requests with negligible customer consensus. Shelved until data signals warrant re-evaluation.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      {modalOpen && (
        <ProjectModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};
