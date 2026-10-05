'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Play, Pause, ChevronLeft, ChevronRight,
  ExternalLink, Github, Layers, Shield, Terminal, ArrowRight,
  GraduationCap, Briefcase, Award, CheckCircle2, Star, Rocket
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { JOURNEY_STORY_MILESTONES, JourneyMilestone, PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

const WalkingDeveloperScene = dynamic(
  () => import('@/components/3d/WalkingDeveloperScene').then((mod) => mod.WalkingDeveloperScene),
  { ssr: false }
);

export const EngineeringJourneySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isPlayingAutoTour, setIsPlayingAutoTour] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoTourIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalStages = JOURNEY_STORY_MILESTONES.length; // 11
  const currentMilestone: JourneyMilestone = JOURNEY_STORY_MILESTONES[activeStage] || JOURNEY_STORY_MILESTONES[0];

  // Helper to jump to a specific milestone
  const goToMilestone = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(totalStages - 1, index));
    setActiveStage(clampedIndex);
    setScrollProgress(clampedIndex / (totalStages - 1));
    audioEngine.playClick();
  }, [totalStages]);

  const handleNext = useCallback(() => {
    if (activeStage < totalStages - 1) {
      goToMilestone(activeStage + 1);
    } else {
      goToMilestone(0);
    }
  }, [activeStage, totalStages, goToMilestone]);

  const handlePrev = useCallback(() => {
    if (activeStage > 0) {
      goToMilestone(activeStage - 1);
    }
  }, [activeStage, goToMilestone]);

  // Toggle Auto-Tour
  const toggleAutoTour = () => {
    audioEngine.playClick();
    setIsPlayingAutoTour((prev) => !prev);
  };

  // Auto-tour animation loop
  useEffect(() => {
    if (isPlayingAutoTour) {
      autoTourIntervalRef.current = setInterval(() => {
        setActiveStage((prevStage) => {
          const nextStage = prevStage + 1;
          if (nextStage >= totalStages) {
            setIsPlayingAutoTour(false);
            return prevStage;
          }
          setScrollProgress(nextStage / (totalStages - 1));
          return nextStage;
        });
      }, 4500);
    } else if (autoTourIntervalRef.current) {
      clearInterval(autoTourIntervalRef.current);
      autoTourIntervalRef.current = null;
    }

    return () => {
      if (autoTourIntervalRef.current) clearInterval(autoTourIntervalRef.current);
    };
  }, [isPlayingAutoTour, totalStages]);

  // ---------------------------------------------------------------------------
  // BOUNDED WHEEL SCROLL LOGIC
  // Prevents scroll hijacking and page trapping:
  // - Inside journey: progresses the character
  // - At top (progress <= 0.001) & scrolling UP: release wheel to scroll page UP
  // - At bottom (progress >= 0.999) & scrolling DOWN: release wheel to scroll page DOWN
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If user is auto-touring, stop auto-tour on manual interaction
      if (isPlayingAutoTour) {
        setIsPlayingAutoTour(false);
      }

      const delta = e.deltaY;

      // Scrolling DOWN
      if (delta > 0) {
        if (scrollProgress < 0.995) {
          e.preventDefault();
          const step = Math.min(1, scrollProgress + delta * 0.00065);
          setScrollProgress(step);
          const stageIndex = Math.min(totalStages - 1, Math.round(step * (totalStages - 1)));
          setActiveStage(stageIndex);
        }
        // When progress >= 0.995, default browser scroll continues naturally down
      } 
      // Scrolling UP
      else if (delta < 0) {
        if (scrollProgress > 0.005) {
          e.preventDefault();
          const step = Math.max(0, scrollProgress + delta * 0.00065);
          setScrollProgress(step);
          const stageIndex = Math.max(0, Math.round(step * (totalStages - 1)));
          setActiveStage(stageIndex);
        }
        // When progress <= 0.005, default browser scroll continues naturally up
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, [scrollProgress, totalStages, isPlayingAutoTour]);

  // Touch swipe support for mobile
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Only trigger if horizontal swipe is clearly dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0) {
          // Swipe left -> Next stage
          handleNext();
        } else {
          // Swipe right -> Prev stage
          handlePrev();
        }
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [activeStage, handleNext, handlePrev]);

  // Corresponding project if this is a project milestone
  const linkedProject = PROJECTS.find((p) => p.id === currentMilestone.id);

  return (
    <section id="story" className="py-24 relative overflow-hidden bg-[#05060a]">
      {/* Anchors for navigation */}
      <div id="journey" className="absolute -top-10 left-0 pointer-events-none" />
      <div id="engineering-journey" className="absolute -top-10 left-0 pointer-events-none" />

      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// INTERACTIVE 3D ENGINEERING DOCUMENTARY`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Watch Me Build My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Engineering Career</span>
            </h2>
            <p className="text-slate-400 font-sans text-sm sm:text-base max-w-3xl mt-2 leading-relaxed">
              Experience my progression through time: from college curiosity and foundational computer science to learning the modern stack, shipping real SaaS products, engineering agentic RAG, architecting enterprise decision platforms, and operating in production.
            </p>
          </div>

          {/* Quick Recruiter Jumps */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => goToMilestone(5)} // DecisionLens is index 5
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3 py-1.5 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/50 text-[#F59E0B] font-mono text-xs font-bold hover:bg-[#F59E0B]/25 transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            >
              <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
              <span>JUMP TO FLAGSHIP: DECISIONLENS</span>
            </button>

            <button
              onClick={() => goToMilestone(8)} // LOOP 2.0 is index 8
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3 py-1.5 rounded-xl bg-[#00FFA3]/15 border border-[#00FFA3]/50 text-[#00FFA3] font-mono text-xs font-bold hover:bg-[#00FFA3]/25 transition-all flex items-center space-x-1.5 shadow-[0_0_15px_rgba(0,255,163,0.25)]"
            >
              <Rocket className="w-3.5 h-3.5 text-[#00FFA3]" />
              <span>JUMP TO LATEST: LOOP 2.0</span>
            </button>
          </div>
        </div>

        {/* Recruiter Mini Milestone Bar (11 interactive pills) */}
        <div className="mb-6 p-2 rounded-2xl bg-[#090c18] border border-slate-800/80 overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-1.5 min-w-max">
            {JOURNEY_STORY_MILESTONES.map((m, idx) => {
              const isActive = activeStage === idx;
              const isFlagship = m.isFlagship;
              const isLatest = m.isLatest;

              let badgeStyle = 'text-slate-400 hover:text-white hover:bg-slate-800/50';
              if (isActive) {
                if (isFlagship) {
                  badgeStyle = 'bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]';
                } else if (isLatest) {
                  badgeStyle = 'bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] font-bold shadow-[0_0_15px_rgba(0,255,163,0.4)]';
                } else {
                  badgeStyle = 'bg-[#00E0FF]/15 border border-[#00E0FF]/60 text-[#00E0FF] font-bold shadow-[0_0_12px_rgba(0,224,255,0.3)]';
                }
              }

              return (
                <button
                  key={m.id}
                  onClick={() => goToMilestone(idx)}
                  onMouseEnter={() => audioEngine.playHover()}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 flex items-center space-x-1.5 ${badgeStyle}`}
                >
                  <span className="opacity-70 text-[10px]">
                    {m.projectNumber ? `P${m.projectNumber}` : `M${m.milestoneNumber}`}
                  </span>
                  <span>{m.title.replace('AI ', '').replace(' — FLAGSHIP', '')}</span>
                  {isFlagship && <Star className="w-3 h-3 text-[#F59E0B] fill-[#F59E0B]" />}
                  {isLatest && <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive 3D Journey Canvas with Bounded Scroll Container */}
        <div
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#05060a] shadow-2xl group cursor-grab active:cursor-grabbing mb-8"
        >
          {/* Top HUD Controls Overlay */}
          <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            {/* Stage Indicator Pill */}
            <div className="pointer-events-auto px-4 py-2 rounded-xl bg-[#05060a]/90 backdrop-blur-md border border-slate-700/80 text-xs font-mono text-slate-200 flex items-center space-x-3 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#00FFA3] animate-pulse" />
              <span className="font-bold text-[#00E0FF]">
                MILESTONE {String(activeStage).padStart(2, '0')} / {String(totalStages - 1).padStart(2, '0')}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-white font-semibold uppercase">{currentMilestone.title}</span>
              {currentMilestone.isFlagship && (
                <span className="px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#F59E0B] font-bold text-[10px] border border-[#F59E0B]/40">
                  FLAGSHIP
                </span>
              )}
              {currentMilestone.isLatest && (
                <span className="px-2 py-0.5 rounded bg-[#00FFA3]/20 text-[#00FFA3] font-bold text-[10px] border border-[#00FFA3]/40">
                  LATEST
                </span>
              )}
            </div>

            {/* Tour Controls (Auto-Tour, Prev, Next) */}
            <div className="pointer-events-auto flex items-center space-x-2">
              <button
                onClick={toggleAutoTour}
                onMouseEnter={() => audioEngine.playHover()}
                className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1.5 transition-all shadow-lg ${
                  isPlayingAutoTour
                    ? 'bg-[#00FFA3]/20 border-[#00FFA3] text-[#00FFA3] shadow-[0_0_15px_rgba(0,255,163,0.35)]'
                    : 'bg-[#090c18]/90 border-slate-700 text-slate-300 hover:text-white hover:border-[#00E0FF]'
                }`}
                title="Automatically tour through milestones"
              >
                {isPlayingAutoTour ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>PAUSE TOUR</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>AUTO-TOUR</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrev}
                disabled={activeStage === 0}
                onMouseEnter={() => audioEngine.playHover()}
                className="p-2 rounded-xl bg-[#090c18]/90 border border-slate-700 text-slate-300 hover:text-white hover:border-[#00E0FF] disabled:opacity-40 transition-all shadow-lg"
                title="Previous Milestone"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                onMouseEnter={() => audioEngine.playHover()}
                className="p-2 rounded-xl bg-[#090c18]/90 border border-slate-700 text-slate-300 hover:text-white hover:border-[#00E0FF] transition-all shadow-lg"
                title="Next Milestone"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3D Scene */}
          <WalkingDeveloperScene
            scrollProgress={scrollProgress}
            activeStage={activeStage}
            onSelectStage={goToMilestone}
          />

          {/* Top Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900/60 z-30">
            <div
              className={`h-full transition-all duration-300 ${
                currentMilestone.isFlagship
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#00E0FF]'
                  : currentMilestone.isLatest
                  ? 'bg-gradient-to-r from-[#00FFA3] to-[#00E0FF]'
                  : 'bg-gradient-to-r from-[#7C5CFF] to-[#00E0FF]'
              }`}
              style={{ width: `${(scrollProgress * 100).toFixed(1)}%` }}
            />
          </div>
        </div>

        {/* Milestone Detail Story Card (Synchronized HUD) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMilestone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-8 rounded-3xl border bg-[#090c18]/95 backdrop-blur-xl relative overflow-hidden shadow-2xl ${
              currentMilestone.isFlagship
                ? 'border-[#F59E0B]/60 shadow-[0_0_35px_rgba(245,158,11,0.15)]'
                : currentMilestone.isLatest
                ? 'border-[#00FFA3]/60 shadow-[0_0_35px_rgba(0,255,163,0.15)]'
                : 'border-slate-800'
            }`}
          >
            {/* Subtle Gradient Backlight */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                backgroundColor: currentMilestone.isFlagship
                  ? '#F59E0B'
                  : currentMilestone.isLatest
                  ? '#00FFA3'
                  : '#00E0FF',
              }}
            />

            <div className="relative z-10">
              {/* Header: Milestone Tag, Year & Category */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                      currentMilestone.isFlagship
                        ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40'
                        : currentMilestone.isLatest
                        ? 'bg-[#00FFA3]/20 text-[#00FFA3] border border-[#00FFA3]/40'
                        : 'bg-[#00E0FF]/15 text-[#00E0FF] border border-[#00E0FF]/30'
                    }`}
                  >
                    {currentMilestone.tag}
                  </span>

                  <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 font-mono text-xs border border-slate-700/60">
                    {currentMilestone.category}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400">
                  {currentMilestone.year}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-black text-white font-mono mb-2 flex items-center gap-3">
                <span>{currentMilestone.title}</span>
                {currentMilestone.isFlagship && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#F59E0B]/20 border border-[#F59E0B] text-[#F59E0B] font-bold">
                    FLAGSHIP PROJECT
                  </span>
                )}
                {currentMilestone.isLatest && (
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] font-bold">
                    LATEST PROJECT
                  </span>
                )}
              </h3>

              <p className="text-sm font-mono text-[#00E0FF] font-semibold mb-4">
                {currentMilestone.subtitle}
              </p>

              {/* Narrative Lead (The Story Behind This Step) */}
              <div className="p-4 rounded-2xl bg-[#05060a]/90 border border-slate-800 mb-5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1.5 flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#00FFA3]" />
                  <span>THE NARRATIVE EVOLUTION:</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 font-sans italic leading-relaxed">
                  &ldquo;{currentMilestone.narrativeLead}&rdquo;
                </p>
                <p className="text-xs text-slate-400 font-sans mt-2 leading-relaxed">
                  {currentMilestone.narrativeDetail}
                </p>
              </div>

              {/* Pipeline Flow (if present) */}
              {currentMilestone.pipelineFlow && currentMilestone.pipelineFlow.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-[#05060a]/70 border border-slate-800/80 mb-5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                    <Layers className="w-3 h-3 text-[#00E0FF]" />
                    <span>ENGINEERING DATA / PIPELINE FLOW:</span>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono text-slate-300 pb-1 scrollbar-thin">
                    {currentMilestone.pipelineFlow.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2.5 py-1 rounded-lg bg-[#090c18] border border-slate-700/80 whitespace-nowrap text-slate-200">
                          {step}
                        </span>
                        {sIdx < currentMilestone.pipelineFlow!.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer: Key Techs, Metrics & Action Links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {currentMilestone.keyTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-800/70 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {currentMilestone.metricsSummary && (
                    <span className="text-[10px] font-mono text-[#00FFA3] ml-2">
                      &bull; {currentMilestone.metricsSummary}
                    </span>
                  )}
                </div>

                {/* Direct Action Links */}
                <div className="flex items-center gap-2">
                  {linkedProject?.demoUrl && (
                    <a
                      href={linkedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => audioEngine.playHover()}
                      className="px-3.5 py-1.5 rounded-xl bg-[#00E0FF]/15 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-xs font-bold hover:bg-[#00E0FF]/25 transition-all flex items-center space-x-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {linkedProject?.githubUrl && (
                    <a
                      href={linkedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => audioEngine.playHover()}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-slate-200 font-mono text-xs font-semibold transition-all flex items-center space-x-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
