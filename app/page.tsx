'use client';

import React, { useState } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { Navbar } from '@/components/Navbar';
import { CommandPalette } from '@/components/CommandPalette';
import { Hero } from '@/components/Hero';
import { AboutStory } from '@/components/AboutStory';
import { DecisionLensShowcase } from '@/components/DecisionLensShowcase';
import { ProjectsSection } from '@/components/ProjectsSection';
import { GitHubDashboard } from '@/components/GitHubDashboard';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { AILab } from '@/components/AILab';
import { WhyHireMe } from '@/components/WhyHireMe';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import dynamic from 'next/dynamic';

const BackgroundNeuralCanvas = dynamic(
  () => import('@/components/3d/BackgroundNeuralCanvas').then((mod) => mod.BackgroundNeuralCanvas),
  { ssr: false }
);

const TechUniverseCanvas = dynamic(
  () => import('@/components/3d/TechUniverseCanvas').then((mod) => mod.TechUniverseCanvas),
  { ssr: false }
);

const GlitchPostProcessingOverlay = dynamic(
  () => import('@/components/3d/GlitchPostProcessing').then((mod) => mod.GlitchPostProcessingOverlay),
  { ssr: false }
);

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#05060a] text-slate-100 relative selection:bg-[#00E0FF] selection:text-[#05060a]">
        {/* Custom Active Theory Magnetic Cursor */}
        <CustomCursor />

        {/* GLSL Distortion Glitch Section Wipe Overlay */}
        <GlitchPostProcessingOverlay />

        {/* 3D Living Persistent Background Canvas & Camera Corridor */}
        <BackgroundNeuralCanvas />

        {/* Boot Sequence Loader */}
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}

        {/* Main Experience Interface */}
        {booted && (
          <div className="animate-fadeIn relative z-10">
            <Navbar onOpenCommandPalette={() => setIsCmdOpen(true)} />
            <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />

            <Hero />
            <AboutStory />
            <DecisionLensShowcase />
            <ProjectsSection />

            {/* 3D Tech Universe Section */}
            <section id="capabilities" className="py-24 relative overflow-hidden bg-[#05060a]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                    {`// 3D ORBITAL SYSTEM & KNOWLEDGE CORRIDOR`}
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mt-2 uppercase isolate-text transform-gpu">
                    The AI Technology <span className="text-[#00E0FF]">Universe</span>
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-2">
                    Interactive 3D multi-plane orbital solar system surrounding the central AI core. Drag or scroll to orbit and dolly-zoom.
                  </p>
                </div>

                <TechUniverseCanvas />
              </div>
            </section>

            <GitHubDashboard />
            <ExperienceTimeline />
            <AILab />
            <WhyHireMe />
            <ContactSection />
            <Footer />
          </div>
        )}
      </main>
    </SmoothScrollProvider>
  );
}
