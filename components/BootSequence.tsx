'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Terminal, Zap } from 'lucide-react';
import { audioEngine } from '@/lib/audio';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'Initializing AI System...',
  'Loading Neural Engine [v4.8]...',
  'Loading Intelligence Core...',
  'Connecting Knowledge Graph (Qdrant Vector DB)...',
  'Configuring DecisionLens Intelligence Platform...',
  'Launching Experience...',
];

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    let logIdx = 0;

    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 6;

      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      const nextLogIdx = Math.floor((currentProgress / 100) * BOOT_LOGS.length);
      if (nextLogIdx > logIdx && nextLogIdx < BOOT_LOGS.length) {
        logIdx = nextLogIdx;
        setLogs((prev) => [...prev, BOOT_LOGS[logIdx]]);
        audioEngine.playHover();
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          audioEngine.playChime();
          setTimeout(() => {
            onComplete();
          }, 600);
        }, 300);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050C] text-slate-100 transition-opacity duration-700 ${
        isDone ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Holographic Glowing Core Icon */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-emerald-400 p-[2px] animate-pulse-glow">
          <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center relative overflow-hidden">
            <Cpu className="w-12 h-12 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 bg-cyan-500/10 backdrop-blur-xs"></div>
          </div>
        </div>
        <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl -z-10 animate-pulse"></div>
      </div>

      {/* Terminal Title */}
      <div className="text-center max-w-md px-6">
        <h2 className="text-xl font-bold tracking-widest font-mono text-cyan-300 glow-text-cyan uppercase mb-1">
          ANZAR.AI OPERATING SYSTEM
        </h2>
        <p className="text-xs text-slate-400 font-mono mb-6">
          INITIALIZING ENTERPRISE INTELLIGENCE COMMAND CENTER
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-2xl relative mb-6">
          <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-2">
            <span className="flex items-center space-x-1">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>BOOT SEQUENCE</span>
            </span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-400 rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(0,245,255,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Boot Terminal Logs Stream */}
        <div className="w-full h-24 bg-slate-950/80 border border-slate-800/80 rounded-lg p-3 text-left font-mono text-[11px] space-y-1 text-slate-400 overflow-hidden shadow-inner">
          {logs.map((log, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-cyan-400/90 animate-fadeIn">
              <span className="text-slate-600">&gt;</span>
              <span>{log}</span>
            </div>
          ))}
          {logs.length === 0 && (
            <div className="flex items-center space-x-2 text-slate-500">
              <span className="text-slate-600">&gt;</span>
              <span>Initializing Kernel...</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Security Badge */}
      <div className="absolute bottom-8 flex items-center space-x-2 text-slate-500 text-[11px] font-mono">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>ENTERPRISE ENCRYPTION VERIFIED</span>
      </div>
    </div>
  );
};
