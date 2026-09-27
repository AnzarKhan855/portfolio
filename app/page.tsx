'use client';

import React, { useState } from 'react';
import { BootSequence } from '@/components/BootSequence';
import { Navbar } from '@/components/Navbar';
import { CommandPalette } from '@/components/CommandPalette';
import { Hero } from '@/components/Hero';
import { WhatIBuild } from '@/components/WhatIBuild';
import { AboutStory } from '@/components/AboutStory';
import { TechnologyUniverseSection } from '@/components/TechnologyUniverseSection';
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

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#05060a] text-slate-100 relative selection:bg-[#00E0FF] selection:text-[#05060a]">
        {/* Custom Active Theory Magnetic Cursor (Smooth 60 FPS) */}
        <CustomCursor />

        {/* 3D Living Persistent Background Canvas (Optimized 50 ambient particles) */}
        <BackgroundNeuralCanvas />

        {/* Boot Sequence Loader */}
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}

        {/* Main Experience Interface */}
        {booted && (
          <div className="animate-fadeIn relative z-10">
            <Navbar onOpenCommandPalette={() => setIsCmdOpen(true)} />
            <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />

            {/* 1. Hero with Clean 3D Engineering Core */}
            <Hero />

            {/* Recruiter 10-Second Executive HUD */}
            <RecruiterQuickView />

            {/* 2. What I Build — Core Architectural Pillars */}
            <WhatIBuild />

            {/* 3. About & Engineering DNA & Concrete Metrics */}
            <AboutStory />

            {/* 4. The Signature Experience: Anzar's Technology Universe (7 Revolving Galaxies) */}
            <TechnologyUniverseSection />

            {/* 5. Flagship Enterprise Centerpiece: DecisionLens AI */}
            <DecisionLensShowcase />

            {/* 6. Complete Shipped Projects Showcase & Case Studies (6 Verified Projects) */}
            <ProjectsSection />

            {/* 7. System Architecture Mesh & Constellation */}
            <ArchitectureSection />

            {/* 8. How I Build / 7-Stage Engineering Pipeline */}
            <EngineeringPipeline />

            {/* 9. GitHub Open-Source Dashboard & Commit Activity */}
            <GitHubDashboard />

            {/* 10. Journey, Research & Milestones */}
            <ExperienceTimeline />

            {/* 11. AI Lab Experiments */}
            <AILab />

            {/* 12. Verified 3D Resume Architecture */}
            <ResumeSection />

            {/* 13. Direct Communication Terminal (Preserved Resend API) */}
            <ContactSection />

            {/* 14. Premium Footer */}
            <Footer />
          </div>
        )}
      </main>
    </SmoothScrollProvider>
  );
}
