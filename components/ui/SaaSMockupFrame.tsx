'use client';

import React from 'react';
import { Globe, Lock, Maximize2, Sparkles, Terminal } from 'lucide-react';
import { audioEngine } from '@/lib/audio';

interface SaaSMockupFrameProps {
  title: string;
  url: string;
  children: React.ReactNode;
  statusBadge?: string;
}

export const SaaSMockupFrame: React.FC<SaaSMockupFrameProps> = ({
  title,
  url,
  children,
  statusBadge,
}) => {
  return (
    <div className="w-full rounded-2xl glass-panel-3d neon-border-animated overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-cyan-500/20">
      {/* SaaS Browser Header Bar */}
      <div className="bg-slate-950/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between font-mono text-xs">
        {/* Window Controls (Red, Yellow, Green LEDs) */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/30 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/30 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/30 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 px-4 py-1 rounded-lg text-slate-400 text-[11px] max-w-md w-full mx-4">
          <Lock className="w-3 h-3 text-emerald-400" />
          <span className="text-slate-200 truncate">{url}</span>
        </div>

        {/* Status Badge */}
        {statusBadge && (
          <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-[10px]">
            <Sparkles className="w-3 h-3 text-cyan-400 animate-spin-slow" />
            <span>{statusBadge}</span>
          </div>
        )}
      </div>

      {/* Screen Display Body */}
      <div className="p-6 bg-slate-950/80 relative">
        {children}
      </div>
    </div>
  );
};
