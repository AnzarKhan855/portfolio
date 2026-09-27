'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, Search, Layers, Code2, Cpu, ShieldCheck, Rocket, Activity, 
  ArrowRight, CheckCircle2 
} from 'lucide-react';
import { BUILD_PIPELINE } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const STEP_ICONS: Record<string, any> = {
  Search: Search,
  Layers: Layers,
  Code2: Code2,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Rocket: Rocket,
  Activity: Activity,
};

export const EngineeringPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStepSelect = (idx: number) => {
    audioEngine.playHover();
    setActiveStep(idx);
  };

  return (
    <section id="pipeline" className="py-24 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#00E0FF]">
            <GitBranch className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
            {`// SECTION 24 & 49 — HOW I BUILD`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase mb-4 isolate-text transform-gpu">
          From Idea to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] to-[#7C5CFF] inline-block">Production</span>
        </h2>
        <p className="text-slate-400 font-sans text-base max-w-3xl leading-relaxed mb-12">
          Demonstrating complete software lifecycle mastery. Every platform progresses through a rigorous 7-stage engineering pipeline designed for zero downtime, low latency, and deterministic reliability.
        </p>

        {/* Stepper Timeline Navigation (Horizontal on Desktop, Scrollable on Mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
          {BUILD_PIPELINE.map((item, idx) => {
            const IconComp = STEP_ICONS[item.icon] || Code2;
            const isSelected = activeStep === idx;

            return (
              <button
                key={item.step}
                onClick={() => handleStepSelect(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-[#090c18] border-[#00E0FF] shadow-[0_0_20px_rgba(0,224,255,0.25)]'
                    : 'bg-[#090c18]/80 border-slate-800/80 hover:border-[#7C5CFF]/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                  <span className={isSelected ? 'text-[#00E0FF] font-bold' : 'text-slate-500'}>
                    STAGE {item.step}
                  </span>
                  <IconComp className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00E0FF]' : 'text-slate-500'}`} />
                </div>
                <div className={`text-xs font-mono font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Inspection Spotlight */}
        <div className="glass-panel-active rounded-3xl p-8 sm:p-12 border border-[#7C5CFF]/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF] text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>ACTIVE STAGE: {BUILD_PIPELINE[activeStep].step} — {BUILD_PIPELINE[activeStep].title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white">
                {BUILD_PIPELINE[activeStep].subtitle}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                {BUILD_PIPELINE[activeStep].description}
              </p>
            </div>

            {/* Stage Architectural Guarantees Pill */}
            <div className="shrink-0 p-6 rounded-2xl bg-[#090c18] border border-slate-800 space-y-3 font-mono text-xs w-full lg:w-72">
              <div className="text-[#00E0FF] font-bold text-[11px] uppercase tracking-wider">
                Pipeline Standards:
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Deterministic Typing (TS/Py)</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E0FF]" />
                <span>Clean Architecture Bounds</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
                <span>Automated Zero-Downtime CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
