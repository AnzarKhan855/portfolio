'use client';

import React from 'react';
import { Calendar, Award, BookOpen, Rocket, CheckCircle2 } from 'lucide-react';
import { TIMELINE_EVENTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
            <Calendar className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            {`// CHRONICLES OF INNOVATION`}
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 font-display tracking-tight mb-16 isolate-text transform-gpu">
          Milestones, Research & <span className="text-emerald-400">Evolution</span>
        </h2>

        {/* Animated Vertical Cyber Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div
              key={idx}
              onMouseEnter={() => audioEngine.playHover()}
              className="relative group"
            >
              {/* Glowing Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-emerald-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(0,245,255,0.6)] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-emerald-400" />
              </div>

              {/* Event Content Box */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold">
                    {event.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-400/30 text-purple-300 font-mono text-[10px] uppercase">
                    {event.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h3>

                <div className="text-xs font-mono text-emerald-400 font-medium">
                  {event.institution}
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
