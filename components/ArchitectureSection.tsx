'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, Cpu, Server, Database, Globe, Shield, Activity, 
  Layers, ArrowRight, Check, Zap, Sparkles, FolderGit2, ExternalLink,
  ChevronRight, Workflow, CheckCircle2
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { 
  ARCHITECTURE_ECOSYSTEM, 
  PROJECTS, 
  PROJECT_ARCHITECTURE_FLOWS, 
  ProjectArchitectureFlow 
} from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const TechUniverseCanvas = dynamic(
  () => import('@/components/3d/TechUniverseCanvas').then((mod) => mod.TechUniverseCanvas),
  { ssr: false }
);

export const ArchitectureSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState(ARCHITECTURE_ECOSYSTEM[0]);
  const [viewMode, setViewMode] = useState<'software-universe' | 'layered-mesh' | 'project-pipelines' | '3d-orbital'>('software-universe');
  const [activePipelineKey, setActivePipelineKey] = useState<string>('loop-ai');
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const activePipeline: ProjectArchitectureFlow | undefined = PROJECT_ARCHITECTURE_FLOWS[activePipelineKey] || PROJECT_ARCHITECTURE_FLOWS['loop-ai'];

  const handleSelectNode = (node: typeof ARCHITECTURE_ECOSYSTEM[0]) => {
    audioEngine.playHover();
    setSelectedNode(node);
  };

  const handleSelectPipeline = (key: string) => {
    audioEngine.playClick();
    setActivePipelineKey(key);
    setSelectedStepIndex(0);
  };

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="architecture" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
                <Network className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// SYSTEM DESIGN & ARCHITECTURAL LAB`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              My Software <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Universe</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Explore how production platforms, async microservices, machine learning ensembles, dual NLP engines, and vector persistence topologies interconnect across full-stack systems.
            </p>
          </div>

          {/* View Mode Toggle: Software Universe vs Layered Mesh vs Project Pipelines vs 3D Solar System */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#090c18] border border-slate-800 shrink-0">
            <button
              onClick={() => {
                audioEngine.playClick();
                setViewMode('software-universe');
              }}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === 'software-universe'
                  ? 'bg-[#00E0FF]/15 text-[#00E0FF] border border-[#00E0FF]/50 font-bold shadow-[0_0_15px_rgba(0,224,255,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Constellation
            </button>
            <button
              onClick={() => {
                audioEngine.playClick();
                setViewMode('layered-mesh');
              }}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === 'layered-mesh'
                  ? 'bg-[#7C5CFF]/20 text-purple-300 border border-[#7C5CFF]/50 font-bold shadow-[0_0_15px_rgba(124,92,255,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Layered Mesh
            </button>
            <button
              onClick={() => {
                audioEngine.playClick();
                setViewMode('project-pipelines');
              }}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === 'project-pipelines'
                  ? 'bg-[#00FFA3]/15 text-[#00FFA3] border border-[#00FFA3]/50 font-bold shadow-[0_0_15px_rgba(0,255,163,0.25)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Project Pipelines
            </button>
            <button
              onClick={() => {
                audioEngine.playClick();
                setViewMode('3d-orbital');
              }}
              className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all ${
                viewMode === '3d-orbital'
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/50 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3D Solar Universe
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW MODE 1: SOFTWARE UNIVERSE CONSTELLATION */}
        {/* ========================================================================= */}
        {viewMode === 'software-universe' && (
          <div className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-[#00E0FF]/30 space-y-10 relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[11px] font-mono text-[#00E0FF] uppercase tracking-wider">
                ANZAR KHAN // CENTRAL SOFTWARE ECOSYSTEM
              </span>
              <h3 className="text-2xl font-bold font-mono text-white">
                Interconnected Product Constellation
              </h3>
              <p className="text-xs text-slate-400 font-sans">
                Every platform connects to the central engineering core, sharing architecture standards, security protocols, and persistence models.
              </p>
            </div>

            {/* Central Core & Orbiting Project Nodes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PROJECTS.map((proj) => {
                const color = proj.accentColor || '#00E0FF';
                return (
                  <div
                    key={proj.id}
                    onClick={() => scrollTo('projects')}
                    className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] cursor-pointer transition-all duration-300 group hover:-translate-y-1 relative"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded font-bold uppercase"
                        style={{ backgroundColor: `${color}15`, color: color }}
                      >
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">
                        {proj.status.includes('Live') ? '● LIVE' : '● ACTIVE'}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-mono text-white group-hover:text-[#00E0FF] transition-colors">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-400 font-sans mt-1.5 line-clamp-2">
                      {proj.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-500">Core Engine:</span>
                      <span className="text-slate-200">{proj.technologies[0]} + {proj.technologies[4] || proj.technologies[1]}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Core Node Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#00E0FF]/10 via-[#7C5CFF]/10 to-[#10B981]/10 border border-[#00E0FF]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-[#00E0FF]/20 text-[#00E0FF]">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-bold font-mono text-white uppercase">
                    ANZAR KHAN SOFTWARE CORE
                  </div>
                  <div className="text-xs font-mono text-slate-300">
                    Next.js • React • FastAPI • Python • MongoDB • PostgreSQL • Neon • Qdrant • Docker
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollTo('projects')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] text-[#05060a] font-mono text-xs font-bold hover:brightness-110 transition-all shrink-0"
              >
                Inspect All Case Studies
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 2: LAYERED SYSTEM MESH (7 LAYERS) */}
        {/* ========================================================================= */}
        {viewMode === 'layered-mesh' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Node Selector Mesh */}
            <div className="lg:col-span-7 space-y-3">
              {ARCHITECTURE_ECOSYSTEM.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onClick={() => handleSelectNode(node)}
                    whileHover={{ x: 4 }}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#090c18] border-[#00E0FF] shadow-[0_0_25px_rgba(0,224,255,0.2)]'
                        : 'bg-[#090c18]/80 border-slate-800/80 hover:border-[#7C5CFF]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3.5">
                        <div
                          className="w-3 h-3 rounded-full shrink-0 animate-pulse"
                          style={{ backgroundColor: node.color }}
                        />
                        <div>
                          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                            {node.layer}
                          </div>
                          <div className="text-base font-bold font-mono text-white mt-0.5">
                            {node.name}
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-400">
                        <span className="px-2.5 py-1 rounded-md bg-[#05060a] border border-slate-800 text-[11px]">
                          {node.protocol}
                        </span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00E0FF] translate-x-1' : 'text-slate-600'}`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Selected Node Deep Architectural Inspection */}
            <div className="lg:col-span-5 glass-panel-active rounded-3xl p-8 border border-[#00E0FF]/30 sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF] text-xs font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  <span>ARCHITECTURE NODE</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {selectedNode.protocol}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {selectedNode.layer}
                </span>
                <h3 className="text-2xl font-bold font-mono text-white mt-1">
                  {selectedNode.name}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-[#090c18] border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-[#00E0FF] uppercase font-bold">
                  System Architecture Role:
                </div>
                <p className="text-xs font-mono text-slate-300">
                  {selectedNode.role}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Engineering Specification:
                </div>
                <p className="text-sm font-sans text-slate-300 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Interconnected Systems:</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Healthy & Operating</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 3: PROJECT-BY-PROJECT INTERACTIVE PIPELINES */}
        {/* ========================================================================= */}
        {viewMode === 'project-pipelines' && (
          <div className="glass-panel-active rounded-3xl p-6 sm:p-10 border border-[#00FFA3]/30 space-y-8">
            {/* Top Selector: Choose from the 7 Project Pipelines */}
            <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase mr-2 flex items-center gap-1">
                <Workflow className="w-4 h-4 text-[#00FFA3]" />
                Select Pipeline:
              </span>
              {[
                { key: 'loop-ai', label: 'LOOP 2.0 (VoC Intelligence)' },
                { key: 'decisionlens-ai', label: 'DecisionLens (Analytics)' },
                { key: 'riskshield-ai', label: 'RiskShield (Fraud AI)' },
                { key: 'campusagent-ai', label: 'CampusAgent (Vector RAG)' },
                { key: 'evalmentor-ai', label: 'EvalMentor (FastAPI / Groq)' },
                { key: 'resume-builder', label: 'Resume Builder (ATS Engine)' },
                { key: 'bookstore-sql', label: 'BookStore SQL (Relational)' },
              ].map((proj) => (
                <button
                  key={proj.key}
                  onClick={() => handleSelectPipeline(proj.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activePipelineKey === proj.key
                      ? 'bg-[#00FFA3]/15 text-[#00FFA3] border border-[#00FFA3]/50 font-bold'
                      : 'bg-[#090c18] text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {proj.label}
                </button>
              ))}
            </div>

            {activePipeline && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00FFA3] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#00FFA3]" />
                    <span>{activePipeline.projectTitle} Architectural Flow</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">
                    {activePipeline.headline}
                  </h3>
                </div>

                {/* Horizontal Step Sequence */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {activePipeline.steps.map((step, idx) => {
                    const isSelected = selectedStepIndex === idx;
                    return (
                      <div
                        key={step.id}
                        onClick={() => {
                          audioEngine.playHover();
                          setSelectedStepIndex(idx);
                        }}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#00FFA3]/15 border-[#00FFA3] shadow-[0_0_20px_rgba(0,255,163,0.2)]'
                            : 'bg-[#090c18] border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-[#00FFA3] text-[#05060a] font-bold' : 'bg-slate-800 text-slate-400'
                          }`}>
                            0{step.stepNumber}
                          </span>
                          <span className="text-[9px] font-mono text-slate-500 truncate max-w-[80px]">
                            {step.tech}
                          </span>
                        </div>
                        <div className="text-xs font-bold font-mono text-white truncate">
                          {step.label}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {step.subLabel}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Step Deep Inspector */}
                {activePipeline.steps[selectedStepIndex] && (
                  <motion.div
                    key={`${activePipelineKey}-${selectedStepIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-[#090c18] border border-slate-800 space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#00FFA3] uppercase font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00FFA3]" />
                        Step 0{activePipeline.steps[selectedStepIndex].stepNumber}: {activePipeline.steps[selectedStepIndex].label} — {activePipeline.steps[selectedStepIndex].subLabel}
                      </span>
                      <span className="text-slate-400 px-2 py-0.5 rounded bg-[#05060a] border border-slate-800">
                        {activePipeline.steps[selectedStepIndex].tech}
                      </span>
                    </div>
                    <p className="text-sm font-sans text-slate-300 leading-relaxed">
                      {activePipeline.steps[selectedStepIndex].description}
                    </p>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW MODE 4: 3D SOLAR UNIVERSE CANVAS */}
        {/* ========================================================================= */}
        {viewMode === '3d-orbital' && (
          <div className="glass-panel-active rounded-3xl p-4 sm:p-8 border border-[#7C5CFF]/30 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono text-[#00E0FF]">
                DRAG OR SCROLL TO ROTATE & ZOOM 3D TECHNOLOGY PLANETS
              </span>
              <span className="text-xs font-mono text-slate-400">
                Multi-Planar Orbit System
              </span>
            </div>
            <TechUniverseCanvas />
          </div>
        )}
      </div>
    </section>
  );
};
