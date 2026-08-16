'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Activity, TrendingUp, Cpu, Server, 
  BarChart3, Brain, Zap, Shield, CheckCircle2, Clock, Upload, Search, LineChart, FileText, Bot, ArrowRight
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { SaaSMockupFrame } from '@/components/ui/SaaSMockupFrame';
import { Tilt3DCard } from '@/components/ui/Tilt3DCard';
import { PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const forecastTeaserData = [
  { step: 'Ingest', records: 120000 },
  { step: 'Detect', records: 280000 },
  { step: 'Profile', records: 450000 },
  { step: 'Insights', records: 680000 },
  { step: 'Copilot', records: 890000 },
  { step: 'Report', records: 1000000 },
];

export const DecisionLensShowcase: React.FC = () => {
  const project = PROJECTS.find((p) => p.id === 'decisionlens-ai') || PROJECTS[0];
  const [activeTab, setActiveTab] = useState<'schematic' | 'roadmap' | 'preview'>('schematic');

  const pipelineIcons = [Upload, Search, BarChart3, Brain, Bot, FileText];

  return (
    <section id="decisionlens" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Glow Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7C5CFF]/10 via-transparent to-[#00E0FF]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centerpiece Flagship Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-8 border-b border-[#7C5CFF]/20 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#7C5CFF]/20 border border-[#7C5CFF]/40 text-[#00E0FF] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>FLAGSHIP ENTERPRISE SAAS CENTERPIECE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white font-display tracking-tight isolate-text transform-gpu">
              DecisionLens<span className="text-[#00E0FF]">.AI</span>
            </h2>
            <p className="text-[#00E0FF] font-mono text-sm sm:text-base mt-1 font-semibold">
              {project.tagline}
            </p>
          </div>

          {/* Hard Constraint Status Badges — NO LIVE DEMO BUTTON */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-300 font-mono text-xs shadow-lg">
              <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Currently Under Active Development</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#7C5CFF]/20 border border-[#7C5CFF]/50 text-purple-300 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-[#00E0FF] animate-ping" />
              <span>Coming Soon</span>
            </div>
          </div>
        </div>

        {/* Positioning Statement */}
        <p className="text-slate-200 max-w-4xl text-base sm:text-xl mb-12 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Visual Data Flow Schematic Pipeline (Upload -> Detect -> Profile -> Insights -> Copilot -> Report) */}
        <div className="mb-12 glass-panel-active p-8 rounded-2xl border border-[#7C5CFF]/30">
          <div className="text-xs font-mono text-[#00E0FF] uppercase tracking-wider mb-6 flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-[#7C5CFF]" />
            <span>ENTERPRISE DATA FLOW PIPELINE SCHEMATIC</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {project.pipelineSteps?.map((step, idx) => {
              const IconComp = pipelineIcons[idx] || Zap;
              return (
                <div key={step} className="relative group">
                  <div className="p-4 rounded-xl bg-[#090c15] border border-[#7C5CFF]/30 group-hover:border-[#00E0FF] transition-all text-center flex flex-col items-center">
                    <div className="p-2.5 rounded-lg bg-[#7C5CFF]/20 text-[#00E0FF] mb-2 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold font-mono text-white">{step}</div>
                    <div className="text-[9px] font-mono text-slate-400 mt-1">Stage 0{idx + 1}</div>
                  </div>
                  {idx < 5 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7C5CFF]/60 z-20" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature Matrix & Tech Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Feature List (Verbatim Spec) */}
          <div className="lg:col-span-7 glass-panel-active p-8 rounded-2xl border border-[#7C5CFF]/20">
            <h3 className="text-lg font-bold font-mono text-white mb-6 uppercase flex items-center space-x-2">
              <Brain className="w-5 h-5 text-[#00E0FF]" />
              <span>Core Enterprise Feature Modules</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-[#090c15] border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-[#00E0FF] shrink-0 mt-0.5" />
                  <span className="text-xs font-mono text-slate-300 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="lg:col-span-5 glass-panel-active p-8 rounded-2xl border border-[#7C5CFF]/20 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold font-mono text-white mb-6 uppercase flex items-center space-x-2">
                <Server className="w-5 h-5 text-[#7C5CFF]" />
                <span>Enterprise Technology Stack</span>
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#090c15] border border-[#7C5CFF]/30 text-[#00E0FF] font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs font-mono text-purple-300">
              ⚡ Notice: DecisionLens AI is under active engineering. Source repository and live access remain restricted during phase completion.
            </div>
          </div>
        </div>

        {/* Development Timeline / Roadmap Component */}
        <div className="glass-panel-active p-8 rounded-2xl border border-[#7C5CFF]/30 mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-mono text-white uppercase flex items-center space-x-2">
              <Activity className="w-5 h-5 text-[#00E0FF]" />
              <span>Development Roadmap & Module Status</span>
            </h3>
            <span className="text-xs font-mono text-[#00E0FF]">60% System Complete</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.roadmap?.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#090c15] border border-slate-800 flex items-center justify-between font-mono text-xs"
              >
                <span className="text-slate-200 flex items-center space-x-2">
                  <span className="text-[#00E0FF]">0{idx + 1}.</span>
                  <span>{item.task}</span>
                </span>
                {item.status === 'completed' ? (
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 text-[10px]">
                    ✅ Completed
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] animate-pulse">
                    🔄 Under Active Development
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Preview Wireframe Mockup */}
        <SaaSMockupFrame
          title="DecisionLens AI — Executive Wireframe Teaser"
          url="https://decisionlens.ai/enterprise-preview"
          statusBadge="DEVELOPMENT MOCKUP"
        >
          <div className="space-y-6 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Target Ingestion</div>
                <div className="text-2xl font-black font-mono text-[#00E0FF] mt-1">1,000,000+ Recs</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Target AI Latency</div>
                <div className="text-2xl font-black font-mono text-[#7C5CFF] mt-1">&lt; 280ms</div>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-slate-800 text-center">
                <div className="text-xs font-mono text-slate-400">Target Accuracy</div>
                <div className="text-2xl font-black font-mono text-emerald-400 mt-1">94.8%</div>
              </div>
            </div>

            <div className="h-56 w-full glass-panel p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-mono text-slate-400 mb-2">Ingestion Throughput Telemetry Wireframe</div>
              <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={forecastTeaserData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="step" stroke="#64748b" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 11, fill: '#94a3b8' }} />
                  <Area type="monotone" dataKey="records" stroke="#00E0FF" fill="#00E0FF" fillOpacity={0.15} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </SaaSMockupFrame>
      </div>
    </section>
  );
};
