'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Orbit, Sparkles, Layers, ArrowRight, ExternalLink, 
  RotateCcw, CheckCircle2, ChevronRight, Filter, Cpu, Globe 
} from 'lucide-react';
import dynamic from 'next/dynamic';
import { 
  TECHNOLOGY_GALAXIES, 
  TechnologyGalaxy, 
  TechnologyItem, 
  PROJECTS, 
  Project 
} from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';
import { ProjectModal } from '@/components/ProjectModal';
import { ProjectArchitectureDiagram } from '@/components/ProjectArchitectureDiagram';

const TechnologyUniverseCanvas = dynamic(
  () => import('@/components/3d/TechnologyUniverseCanvas').then((mod) => mod.TechnologyUniverseCanvas),
  { ssr: false }
);

export const TechnologyUniverseSection: React.FC = () => {
  const [selectedGalaxyId, setSelectedGalaxyId] = useState<string | null>('frontend');
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(
    TECHNOLOGY_GALAXIES[0].technologies[0] // Default: Next.js
  );
  const [activeProjectFilter, setActiveProjectFilter] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const activeGalaxy = TECHNOLOGY_GALAXIES.find((g) => g.id === selectedGalaxyId) || null;
  const activeProject = PROJECTS.find((p) => p.id === activeProjectFilter) || null;

  // Determine highlighted techs when a project filter is active
  const highlightedProjectTechs = React.useMemo(() => {
    if (!activeProjectFilter) return null;
    const project = PROJECTS.find((p) => p.id === activeProjectFilter);
    return project ? project.technologies : null;
  }, [activeProjectFilter]);

  const handleSelectGalaxy = (galaxyId: string) => {
    audioEngine.playHover();
    if (selectedGalaxyId === galaxyId) {
      setSelectedGalaxyId(null);
      setSelectedTech(null);
    } else {
      setSelectedGalaxyId(galaxyId);
      const targetGalaxy = TECHNOLOGY_GALAXIES.find((g) => g.id === galaxyId);
      if (targetGalaxy && targetGalaxy.technologies.length > 0) {
        setSelectedTech(targetGalaxy.technologies[0]);
      }
    }
    setActiveProjectFilter(null);
  };

  const handleSelectTech = (tech: TechnologyItem) => {
    audioEngine.playClick();
    setSelectedTech(tech);
    setActiveProjectFilter(null);
    // Auto-focus galaxy of this tech
    const parentGalaxy = TECHNOLOGY_GALAXIES.find((g) =>
      g.technologies.some((t) => t.name === tech.name)
    );
    if (parentGalaxy && selectedGalaxyId !== parentGalaxy.id) {
      setSelectedGalaxyId(parentGalaxy.id);
    }
  };

  const handleProjectFilter = (projectId: string) => {
    audioEngine.playClick();
    if (activeProjectFilter === projectId) {
      setActiveProjectFilter(null);
    } else {
      setActiveProjectFilter(projectId);
      setSelectedGalaxyId(null);
      setSelectedTech(null);
    }
  };

  const handleReset = () => {
    audioEngine.playClick();
    setSelectedGalaxyId(null);
    setSelectedTech(null);
    setActiveProjectFilter(null);
  };

  const scrollTo = (id: string) => {
    audioEngine.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="universe" className="py-28 relative overflow-hidden bg-[#05060a]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-xl bg-[#00E0FF]/10 border border-[#00E0FF]/30 text-[#00E0FF]">
                <Orbit className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#00E0FF] tracking-widest uppercase">
                {`// INTERCONNECTED UNIVERSE — 7 TECH GALAXIES + 7 PROJECT WORLDS`}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase isolate-text transform-gpu">
              Anzar&apos;s <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E0FF] via-[#7C5CFF] to-[#00FFA3] inline-block">Technology Universe</span>
            </h2>
            <p className="text-slate-400 font-sans text-base max-w-2xl mt-2 leading-relaxed">
              Explore the technologies behind the systems I build. Select a galaxy or click an outer project planet to inspect its full architecture and verified stack.
            </p>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <button
              onClick={handleReset}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3.5 py-2 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-300 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#00E0FF]" />
              <span>Reset Universe</span>
            </button>
          </div>
        </div>

        {/* Project Reverse Filter Strip (Project -> Tech Relationship) */}
        <div className="mb-8 p-3.5 rounded-2xl bg-[#090c18] border border-slate-800 flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 px-2 text-xs font-mono text-slate-400">
            <Globe className="w-3.5 h-3.5 text-[#00FFA3]" />
            <span>Outer Project Worlds:</span>
          </div>

          {PROJECTS.map((proj) => {
            const isActive = activeProjectFilter === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => handleProjectFilter(proj.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#00FFA3]/20 border border-[#00FFA3] text-[#00FFA3] font-bold shadow-[0_0_12px_rgba(0,255,163,0.3)]'
                    : 'bg-[#05060a] border border-slate-800/80 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: proj.accentColor || '#00FFA3' }}
                />
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Universe Experience: 3D Canvas (Left) + Inspector Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3D Technology Universe Scene */}
          <div className="lg:col-span-7 glass-panel-active rounded-3xl p-4 sm:p-6 border border-slate-800 relative flex flex-col justify-between min-h-[580px]">
            {/* 3D Scene Viewport */}
            <div className="w-full h-[470px] rounded-2xl overflow-hidden relative bg-[#05060a]/60">
              <TechnologyUniverseCanvas
                focusedGalaxyId={selectedGalaxyId}
                selectedTech={selectedTech}
                selectedProjectId={activeProjectFilter}
                highlightedProjectTechs={highlightedProjectTechs}
                onSelectGalaxy={handleSelectGalaxy}
                onSelectTech={handleSelectTech}
                onSelectProject={handleProjectFilter}
                onReset={handleReset}
              />

              {/* Status Overlay Badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <div className="px-3 py-1 rounded-full bg-[#05060a]/90 border border-slate-800 backdrop-blur-md flex items-center space-x-2 text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
                  <span className="text-slate-300">
                    {activeProjectFilter
                      ? `ORBITING PROJECT: ${PROJECTS.find((p) => p.id === activeProjectFilter)?.title.toUpperCase()}`
                      : selectedGalaxyId
                      ? `FOCUSED GALAXY: ${activeGalaxy?.name.toUpperCase()}`
                      : 'INTERACTIVE ORBITAL SIMULATION'}
                  </span>
                </div>
              </div>

              {/* Quick Reset Overlay Button when focused */}
              {(activeProjectFilter || selectedGalaxyId) && (
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={handleReset}
                    className="px-3 py-1 rounded-xl bg-[#05060a]/90 hover:bg-[#090c18] border border-[#00E0FF]/40 text-[#00E0FF] text-[10px] font-mono flex items-center space-x-1.5 shadow-lg transition-all"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset View</span>
                  </button>
                </div>
              )}
            </div>

            {/* Galaxy Quick Selector Tabs */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {TECHNOLOGY_GALAXIES.map((galaxy) => {
                const isSelected = selectedGalaxyId === galaxy.id;
                return (
                  <button
                    key={galaxy.id}
                    onClick={() => handleSelectGalaxy(galaxy.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center space-x-1.5 ${
                      isSelected
                        ? 'bg-[#090c18] font-bold border'
                        : 'bg-[#05060a] text-slate-400 hover:text-white border border-transparent'
                    }`}
                    style={{
                      borderColor: isSelected ? galaxy.color : 'transparent',
                      color: isSelected ? galaxy.color : undefined,
                    }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: galaxy.color }} 
                    />
                    <span>{galaxy.name.replace(' Galaxy', '')}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Technology & Project Relationship Inspector */}
          <div className="lg:col-span-5 glass-panel-active rounded-3xl p-6 sm:p-8 border border-slate-800 min-h-[580px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeProject ? (
                /* Focused Project World Inspector */
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-5"
                >
                  {/* Project Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <span 
                          className="text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full"
                          style={{ backgroundColor: `${activeProject.accentColor || '#00FFA3'}20`, color: activeProject.accentColor || '#00FFA3' }}
                        >
                          PROJECT WORLD // 0{PROJECTS.findIndex((p) => p.id === activeProject.id) + 1}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#05060a] border border-slate-800 text-slate-300">
                          {activeProject.category}
                        </span>
                      </div>

                      <button
                        onClick={handleReset}
                        className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center space-x-1"
                      >
                        <RotateCcw className="w-3 h-3 text-[#00E0FF]" />
                        <span>← ALL GALAXIES</span>
                      </button>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black font-mono text-white">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-[#00FFA3] font-mono mt-1 font-semibold">
                      {activeProject.tagline}
                    </p>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mt-2.5 p-3 rounded-xl bg-[#090c18] border border-slate-800/80">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Architecture Flow Diagram */}
                  <div>
                    <ProjectArchitectureDiagram
                      projectId={activeProject.id}
                      accentColor={activeProject.accentColor || '#00FFA3'}
                      compact
                    />
                  </div>

                  {/* Verified Technology Stack */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase mb-2">
                      <span>Verified Stack Technologies:</span>
                      <span className="text-[#00E0FF] text-[10px]">Click to inspect node</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                      {activeProject.technologies.map((tName) => {
                        let matchedTech: TechnologyItem | null = null;
                        for (const g of TECHNOLOGY_GALAXIES) {
                          const found = g.technologies.find(
                            (t) => t.name.toLowerCase() === tName.toLowerCase()
                          );
                          if (found) {
                            matchedTech = found;
                            break;
                          }
                        }
                        return (
                          <button
                            key={tName}
                            onClick={() => {
                              if (matchedTech) {
                                handleSelectTech(matchedTech);
                              }
                            }}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#090c18] border border-slate-800 hover:border-[#00FFA3] text-slate-300 hover:text-white transition-all flex items-center space-x-1"
                          >
                            <span>{tName}</span>
                            {matchedTech && <ChevronRight className="w-2.5 h-2.5 text-[#00FFA3]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        audioEngine.playClick();
                        setModalProject(activeProject);
                      }}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00FFA3] to-[#00E0FF] text-[#05060a] font-mono text-xs font-bold flex items-center space-x-2 hover:brightness-110 shadow-[0_0_15px_rgba(0,255,163,0.3)] transition-all"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Full System Architecture</span>
                    </button>

                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        className="px-3.5 py-2 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-200 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#00E0FF]" />
                        <span>Live App</span>
                      </a>
                    )}

                    {activeProject.githubUrl && (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => audioEngine.playHover()}
                        className="px-3.5 py-2 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-slate-200 hover:text-white font-mono text-xs flex items-center space-x-1.5 transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#7C5CFF]" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : selectedTech ? (
                <motion.div
                  key={selectedTech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  {/* Technology Header */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00E0FF]" />
                      <span>{`${selectedTech.category} // TECHNOLOGY NODE`}</span>
                    </div>

                    <h3 className="text-3xl font-black font-mono text-white">
                      {selectedTech.name}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed mt-3 p-3.5 rounded-xl bg-[#090c18] border border-slate-800/80">
                      {selectedTech.description}
                    </p>
                  </div>

                  {/* Technology -> Project Connection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
                      <span>Used across ({selectedTech.usedInProjectIds.length} Projects):</span>
                      <span className="text-[#00FFA3]">Verified Implementation</span>
                    </div>

                    <div className="space-y-2">
                      {selectedTech.usedInProjectIds.map((projId) => {
                        const proj = PROJECTS.find((p) => p.id === projId);
                        if (!proj) return null;

                        return (
                          <div
                            key={proj.id}
                            onClick={() => handleProjectFilter(proj.id)}
                            className="p-3.5 rounded-xl bg-[#05060a] border border-slate-800 hover:border-[#00E0FF] cursor-pointer transition-all duration-200 group flex items-center justify-between"
                          >
                            <div>
                              <div className="font-mono text-xs font-bold text-white group-hover:text-[#00E0FF] transition-colors">
                                {proj.title}
                              </div>
                              <div className="text-[10px] font-mono text-slate-400 truncate max-w-[240px]">
                                {proj.tagline}
                              </div>
                            </div>

                            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#00E0FF] transition-colors shrink-0" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Other Tech in This Galaxy */}
                  {activeGalaxy && (
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                        Other {activeGalaxy.name} Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeGalaxy.technologies.map((t) => (
                          <button
                            key={t.name}
                            onClick={() => handleSelectTech(t)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                              selectedTech.name === t.name
                                ? 'bg-[#00E0FF]/20 border border-[#00E0FF] text-[#00E0FF] font-bold'
                                : 'bg-[#090c18] border border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            {t.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : activeGalaxy ? (
                <motion.div
                  key={activeGalaxy.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <div>
                    <span 
                      className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${activeGalaxy.color}20`, color: activeGalaxy.color }}
                    >
                      GALAXY 0{activeGalaxy.galaxyNumber}
                    </span>

                    <h3 className="text-2xl font-black font-mono text-white mt-3">
                      {activeGalaxy.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mt-2">
                      {activeGalaxy.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase mb-3">
                      Verified Technology Nodes:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {activeGalaxy.technologies.map((t) => (
                        <button
                          key={t.name}
                          onClick={() => handleSelectTech(t)}
                          className="p-3 rounded-xl bg-[#090c18] border border-slate-800 hover:border-[#00E0FF] text-left transition-all group"
                        >
                          <div className="text-xs font-mono font-bold text-white group-hover:text-[#00E0FF]">
                            {t.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                            {t.usedInProjectIds.length} Projects
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <Orbit className="w-12 h-12 text-[#00E0FF]/40 mx-auto" />
                  <h4 className="text-lg font-mono font-bold text-white">
                    Explore the Technology Ecosystem
                  </h4>
                  <p className="text-xs text-slate-400 font-sans max-w-sm mx-auto leading-relaxed">
                    Click any orbiting galaxy, technology node, or outer project world to inspect its architectural purpose and the verified production systems it powers.
                  </p>
                </div>
              )}
            </AnimatePresence>

            {/* Bottom Section Link */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">ANZAR ENGINEERING CORE</span>
              <button
                onClick={() => scrollTo('projects')}
                className="text-[#00FFA3] hover:underline flex items-center space-x-1"
              >
                <span>View Full Projects Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Project Modal for Direct Deep-Dive */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};
