'use client';

import React, { useState } from 'react';
import { Terminal, Play, Check, Cpu, FlaskConical, Sparkles, Activity, ShieldAlert } from 'lucide-react';
import { AI_LAB_EXPERIMENTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const AILab: React.FC = () => {
  const [activeExp, setActiveExp] = useState(AI_LAB_EXPERIMENTS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [outputLogs, setOutputLogs] = useState<string[]>([]);

  const runSimulation = () => {
    audioEngine.playClick();
    setIsRunning(true);
    setOutputLogs(['[INIT] Compiling Tensor AST...', '[BENCHMARK] Dispatching CUDA kernels...']);

    setTimeout(() => {
      setOutputLogs((prev) => [
        ...prev,
        `[SUCCESS] ${activeExp.title} executed in ${activeExp.metrics.speed}`,
        `[METRICS] Telemetry Confidence Score: ${activeExp.metrics.accuracy}`,
      ]);
      setIsRunning(false);
      audioEngine.playChime();
    }, 1200);
  };

  return (
    <section id="ailab" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
            <FlaskConical className="w-5 h-5 animate-pulse" />
          </div>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            {`// SECRET R&D LABORATORY`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 font-display tracking-tight mb-12 isolate-text transform-gpu">
          Autonomous Agentic AI & <span className="text-cyan-400">LLM Benchmarks</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Experiment Selection List */}
          <div className="lg:col-span-5 space-y-4">
            {AI_LAB_EXPERIMENTS.map((exp) => {
              const isSelected = activeExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    audioEngine.playClick();
                    setActiveExp(exp);
                    setOutputLogs([]);
                  }}
                  onMouseEnter={() => audioEngine.playHover()}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400/50 shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                      : 'glass-panel border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-cyan-400 uppercase font-bold">{exp.category}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-mono text-slate-100 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-400">
                    <span>Accuracy: <strong className="text-cyan-300">{exp.metrics.accuracy}</strong></span>
                    <span>Latency: <strong className="text-purple-300">{exp.metrics.speed}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Interactive Terminal Sandbox */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 border border-cyan-500/30 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center space-x-2 text-xs text-slate-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>{activeExp.title}.py</span>
              </div>
              <button
                onClick={runSimulation}
                disabled={isRunning}
                onMouseEnter={() => audioEngine.playHover()}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-mono text-xs font-bold rounded-xl flex items-center space-x-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Running AST...' : 'Run Simulation'}</span>
              </button>
            </div>

            {/* Python Code Snippet View with IDE Syntax Highlighting */}
            <div className="bg-[#05060d] p-4 rounded-xl border border-slate-800 text-xs font-mono text-slate-200 overflow-x-auto mb-4 leading-relaxed shadow-inner">
              <pre>
                <code>
                  {activeExp.codeSnippet.split('\n').map((line, lIdx) => {
                    // Tokenize line for syntax highlighting
                    const formattedLine = line
                      .replace(/\b(class|def|async|await|return|import|from)\b/g, '<span class="text-[#7C5CFF] font-bold">$1</span>')
                      .replace(/\b(self|True|False|None)\b/g, '<span class="text-[#FFD700]">$1</span>')
                      .replace(/(".*?"|'.*? me')/g, '<span class="text-[#00FFA3]">$1</span>')
                      .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g, '<span class="text-[#00E0FF] font-medium">$1</span>')
                      .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-amber-400">$1</span>');

                    return (
                      <div key={lIdx} dangerouslySetInnerHTML={{ __html: formattedLine }} />
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Simulated Console Execution Output */}
            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/20 text-[11px] text-cyan-400 space-y-1 min-h-[100px]">
              <div className="text-slate-500">{`// Execution Console Logs Stream`}</div>
              {outputLogs.map((log, idx) => (
                <div key={idx} className="animate-fadeIn">{log}</div>
              ))}
              {outputLogs.length === 0 && (
                <div className="text-slate-600">Click &quot;Run Simulation&quot; to execute live tensor benchmark...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
