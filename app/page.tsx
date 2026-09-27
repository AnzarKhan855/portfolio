'use client';

import React, { useState } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { Navbar } from '@/components/Navbar';
import { CommandPalette } from '@/components/CommandPalette';
import { Hero } from '@/components/Hero';
import { AboutStory } from '@/components/AboutStory';
import { DecisionLensShowcase } from '@/components/DecisionLensShowcase';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { EngineeringPipeline } from '@/components/EngineeringPipeline';
import { GitHubDashboard } from '@/components/GitHubDashboard';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { AILab } from '@/components/AILab';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { RecruiterQuickView } from '@/components/ui/RecruiterQuickView';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import dynamic from 'next/dynamic';

const BackgroundNeuralCanvas = dynamic(
  () => import('@/components/3d/BackgroundNeuralCanvas').then((mod) => mod.BackgroundNeuralCanvas),
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

            {/* 1. Hero with 3D Software Architecture Stack */}
            <Hero />

            {/* Recruiter 10-Second Executive HUD */}
            <RecruiterQuickView />

            {/* 2. About & Engineering DNA & Verified Metrics */}
            <AboutStory />

            {/* 3. Flagship Enterprise Centerpiece: DecisionLens AI */}
            <DecisionLensShowcase />

            {/* 4. Complete Shipped Projects Showcase & Case Studies */}
            <ProjectsSection />

            {/* 5. System Architecture Mesh & 3D Tech Universe */}
            <ArchitectureSection />

            {/* 6. How I Build / 7-Stage Engineering Pipeline */}
            <EngineeringPipeline />

            {/* 7. GitHub Open-Source Dashboard & Commit Activity */}
            <GitHubDashboard />

            {/* 8. Journey, Research & Milestones */}
            <ExperienceTimeline />

            {/* 9. AI Lab Experiments */}
            <AILab />

            {/* 10. Verified 3D Resume Architecture */}
            <ResumeSection />

            {/* 11. Direct Communication Terminal (Preserved Resend API) */}
            <ContactSection />

            {/* 12. Premium Footer */}
            <Footer />
          </div>
        )}
      </main>
    </SmoothScrollProvider>
  );
}
