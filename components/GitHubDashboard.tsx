'use client';

import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Code, Calendar, Flame, ExternalLink, Activity } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const GitHubDashboard: React.FC = () => {
  // Generate simulated 365-day commit heatmap calendar tiles
  const weeks = 52;
  const daysPerWeek = 7;
  const commitGrid = Array.from({ length: weeks * daysPerWeek }, (_, i) => {
    // Generate realistic heat intensity (0 to 4)
    const seed = (i * 17 + 3) % 10;
    if (seed > 7) return 4; // High commit day
    if (seed > 4) return 2; // Medium commit day
    if (seed > 2) return 1; // Light commit day
    return 0; // No commit day
  });

  const getHeatColor = (level: number) => {
    switch (level) {
      case 4: return 'bg-cyan-400 shadow-[0_0_8px_rgba(0,245,255,0.8)]';
      case 3: return 'bg-cyan-500';
      case 2: return 'bg-purple-600';
      case 1: return 'bg-purple-900/60';
      default: return 'bg-slate-900 border border-slate-800';
    }
  };

  const languages = [
    { name: 'Python', pct: 45, color: '#3572A5' },
    { name: 'TypeScript', pct: 30, color: '#3178C6' },
    { name: 'SQL', pct: 15, color: '#e38c00' },
    { name: 'JavaScript / C++', pct: 10, color: '#f1e05a' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
            <Github className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
            {`// GITHUB INTELLIGENCE HUB`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 font-display tracking-tight mb-8 flex items-center justify-between flex-wrap gap-4 isolate-text transform-gpu">
          <span>Live Open-Source <span className="text-cyan-400">Commit Calendar</span></span>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => audioEngine.playHover()}
            className="text-xs font-mono text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 px-4 py-2 rounded-xl flex items-center space-x-2 transition-all bg-slate-900"
          >
            <span>@{PERSONAL_INFO.github}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </h2>

        {/* GitHub Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel-active p-5 rounded-2xl border border-[#7C5CFF]/30 text-center hover:border-[#00E0FF]/50 transition-all">
            <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-300 font-mono mb-1">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Yearly Contributions</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">1,280+</div>
          </div>

          <div className="glass-panel-active p-5 rounded-2xl border border-[#7C5CFF]/30 text-center hover:border-[#00E0FF]/50 transition-all">
            <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-300 font-mono mb-1">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Repositories & Stars</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#00E0FF]">18 Repos</div>
          </div>

          <div className="glass-panel-active p-5 rounded-2xl border border-[#7C5CFF]/30 text-center hover:border-[#00E0FF]/50 transition-all">
            <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-300 font-mono mb-1">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span>Longest Streak</span>
            </div>
            <div className="text-2xl font-bold font-mono text-emerald-400">42 Days</div>
          </div>

          <div className="glass-panel-active p-5 rounded-2xl border border-[#7C5CFF]/30 text-center hover:border-[#00E0FF]/50 transition-all">
            <div className="flex items-center justify-center space-x-1.5 text-xs text-slate-300 font-mono mb-1">
              <Code className="w-4 h-4 text-purple-400" />
              <span>Primary Tech Stack</span>
            </div>
            <div className="text-2xl font-bold font-mono text-[#7C5CFF]">Python & TS</div>
          </div>
        </div>

        {/* Interactive Commit Heatmap Canvas Container */}
        <div className="glass-panel-active p-6 rounded-2xl border border-[#7C5CFF]/30 mb-8 overflow-x-auto">
          <div className="flex items-center justify-between mb-4 min-w-[700px]">
            <span className="text-xs font-mono text-slate-200 flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#00E0FF]" />
              <span>365-Day Activity Heatmap Grid</span>
            </span>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
              <span>Less</span>
              <div className="flex space-x-1">
                <span className="w-3 h-3 rounded bg-slate-900 border border-slate-800 inline-block" />
                <span className="w-3 h-3 rounded bg-purple-900/60 inline-block" />
                <span className="w-3 h-3 rounded bg-purple-600 inline-block" />
                <span className="w-3 h-3 rounded bg-[#7C5CFF] inline-block" />
                <span className="w-3 h-3 rounded bg-[#00E0FF] inline-block" />
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="grid grid-rows-7 grid-flow-col gap-1.5 min-w-[700px]">
            {commitGrid.map((level, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-[3px] transition-all duration-300 hover:scale-125 cursor-pointer ${getHeatColor(level)}`}
                title={`Day ${idx + 1}: ${level * 4} commits`}
              />
            ))}
          </div>
        </div>

        {/* Language Breakdown Bar */}
        <div className="glass-panel-active p-6 rounded-2xl border border-[#7C5CFF]/30">
          <h4 className="text-xs font-mono text-slate-200 uppercase mb-4 tracking-wider">
            Language Composition Across Repositories
          </h4>
          <div className="w-full h-3 bg-[#05060a] rounded-full overflow-hidden flex mb-4 border border-slate-800">
            {languages.map((l, i) => (
              <div
                key={i}
                className="h-full transition-all"
                style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                title={`${l.name}: ${l.pct}%`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            {languages.map((l, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-slate-100 font-semibold">{l.name} ({l.pct}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
