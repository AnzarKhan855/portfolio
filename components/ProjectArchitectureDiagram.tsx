'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Layers, Cpu, CheckCircle2, Info } from 'lucide-react';
import { PROJECT_ARCHITECTURE_FLOWS, ProjectArchitectureStep } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface ProjectArchitectureDiagramProps {
  projectId: string;
  accentColor?: string;
  compact?: boolean;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({
  projectId,
  accentColor = '#00E0FF',
  compact = false,
}) => {
  const flow = PROJECT_ARCHITECTURE_FLOWS[projectId];
  const [selectedStepId, setSelectedStepId] = useState<string | null>(
    flow ? flow.steps[Math.floor(flow.steps.length / 2)].id : null
  );

  if (!flow) return null;

  const activeStep = flow.steps.find((s) => s.id === selectedStepId) || flow.steps[0];

  const handleSelectStep = (step: ProjectArchitectureStep) => {
    audioEngine.playClick();
    setSelectedStepId(step.id);
  };

  return (
    <div className="w-full space-y-4">
      {/* Architecture Flow Title Strip */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-xs font-mono">
          <Layers className="w-3.5 h-3.5" style={{ color: accentColor }} />
          <span className="text-slate-300 font-bold uppercase">SYSTEM ARCHITECTURE PIPELINE</span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          {flow.steps.length} Connected Stages • Click Node to Inspect
        </span>
      </div>

      {/* Interactive Horizontal Pipeline Nodes */}
      <div className="p-3.5 rounded-2xl bg-[#05060a] border border-slate-800/90 overflow-x-auto scrollbar-none">
        <div className="flex items-center min-w-max gap-2 py-1">
          {flow.steps.map((step, idx) => {
            const isSelected = activeStep.id === step.id;

            return (
              <React.Fragment key={step.id}>
                {/* Clickable Pipeline Stage Node */}
                <button
                  onClick={() => handleSelectStep(step)}
                  onMouseEnter={() => audioEngine.playHover()}
                  className={`px-3 py-2 rounded-xl border text-left transition-all duration-300 relative group flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#090c18] scale-105 z-10 shadow-lg'
                      : 'bg-[#090c18]/60 border-slate-800 hover:border-slate-700 hover:bg-[#090c18]'
                  }`}
                  style={{
                    borderColor: isSelected ? accentColor : undefined,
                    boxShadow: isSelected ? `0 0 16px ${accentColor}30` : undefined,
                  }}
                >
                  <div className="flex items-center space-x-1.5 mb-1">
                    <span 
                      className="text-[9px] font-mono px-1.5 py-0.2 rounded font-bold"
                      style={{ 
                        backgroundColor: isSelected ? `${accentColor}25` : '#1e293b',
                        color: isSelected ? accentColor : '#94a3b8'
                      }}
                    >
                      0{step.stepNumber}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-medium truncate max-w-[110px]">
                      {step.subLabel}
                    </span>
                  </div>

                  <div className="text-xs font-mono font-bold text-white group-hover:text-slate-100 truncate max-w-[130px]">
                    {step.label}
                  </div>
                </button>

                {/* Directional Connector Arrow */}
                {idx < flow.steps.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-700 shrink-0 mx-0.5" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Selected Node Inspector Card (Readable First, Zero Clutter) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="p-4 rounded-2xl bg-[#090c18] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[11px] font-mono">
              <span className="font-bold text-white">STAGE 0{activeStep.stepNumber}: {activeStep.label}</span>
              <span className="text-slate-500">•</span>
              <span style={{ color: accentColor }}>{activeStep.subLabel}</span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-2xl">
              {activeStep.description}
            </p>
          </div>

          <div className="shrink-0 p-2.5 rounded-xl bg-[#05060a] border border-slate-800 text-right sm:text-left">
            <div className="text-[9px] font-mono text-slate-500 uppercase">Implementation Tech</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5" style={{ color: accentColor }}>
              {activeStep.tech}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
