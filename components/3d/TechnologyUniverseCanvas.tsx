'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TECHNOLOGY_GALAXIES, TechnologyGalaxy, TechnologyItem, PROJECTS, Project } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface GalaxyRingProps {
  galaxy: TechnologyGalaxy;
  isFocused: boolean;
  isAnyFocused: boolean;
  selectedTech: string | null;
  highlightedProjectTechs: string[] | null;
  onSelectGalaxy: (galaxyId: string) => void;
  onSelectTech: (tech: TechnologyItem) => void;
}

const GalaxyOrbitalRing: React.FC<GalaxyRingProps> = ({
  galaxy,
  isFocused,
  isAnyFocused,
  selectedTech,
  highlightedProjectTechs,
  onSelectGalaxy,
  onSelectTech,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Generate smooth orbital ring points
  const points = useMemo(() => {
    const pts = [];
    const segments = 100;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * galaxy.radius, 0, Math.sin(theta) * galaxy.radius));
    }
    return pts;
  }, [galaxy.radius]);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);

  // Extremely low continuous rotation speed (never dizzying)
  useFrame((_, delta) => {
    if (groupRef.current) {
      const activeSpeed = isFocused || hoveredNode ? galaxy.speed * 0.2 : galaxy.speed;
      groupRef.current.rotation.y += delta * activeSpeed;
    }
  });

  const isHighlightedByProjectGalaxy = highlightedProjectTechs
    ? galaxy.technologies.some((t) => highlightedProjectTechs.includes(t.name))
    : false;

  const ringOpacity = isFocused 
    ? 0.75 
    : isHighlightedByProjectGalaxy 
    ? 0.5 
    : isAnyFocused 
    ? 0.08 
    : 0.25;

  return (
    <group rotation={[galaxy.tiltX, 0, galaxy.tiltZ]}>
      {/* Orbital Path Line */}
      <lineLoop geometry={lineGeometry}>
        <lineBasicMaterial
          color={galaxy.color}
          transparent
          opacity={ringOpacity}
          linewidth={isFocused || isHighlightedByProjectGalaxy ? 2 : 1}
        />
      </lineLoop>

      {/* Orbiting Technology Nodes Group */}
      <group ref={groupRef}>
        {galaxy.technologies.map((tech, idx) => {
          const angle = (idx / galaxy.technologies.length) * Math.PI * 2;
          const x = Math.cos(angle) * galaxy.radius;
          const z = Math.sin(angle) * galaxy.radius;

          const isThisSelected = selectedTech === tech.name;
          const isThisHovered = hoveredNode === tech.name;
          const isHighlightedByProject = highlightedProjectTechs
            ? highlightedProjectTechs.includes(tech.name)
            : false;

          const isNodeActive = isThisSelected || isThisHovered || isHighlightedByProject;
          const isDimmed = (isAnyFocused && !isFocused && !isHighlightedByProject) || 
                          (highlightedProjectTechs && !isHighlightedByProject);

          return (
            <group key={tech.name} position={[x, 0, z]}>
              {/* 3D Sphere Node */}
              <mesh
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.playClick();
                  onSelectGalaxy(galaxy.id);
                  onSelectTech(tech);
                }}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  audioEngine.playHover();
                  setHoveredNode(tech.name);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  setHoveredNode(null);
                }}
              >
                <sphereGeometry args={[isNodeActive ? 0.34 : 0.2, 16, 16]} />
                <meshStandardMaterial
                  color={galaxy.color}
                  emissive={galaxy.color}
                  emissiveIntensity={isNodeActive ? 2.5 : isFocused ? 1.0 : isDimmed ? 0.12 : 0.5}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* Readable HTML Billboard Label */}
              <Html
                position={[0, 0.48, 0]}
                center
                distanceFactor={20}
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className={`px-2 py-0.5 rounded font-mono text-[10px] whitespace-nowrap transition-all duration-300 border shadow-lg ${
                    isNodeActive
                      ? 'bg-[#05060a] text-white font-bold scale-110 z-30'
                      : isFocused
                      ? 'bg-[#090c18]/95 text-slate-200 font-medium'
                      : isDimmed
                      ? 'bg-[#05060a]/30 text-slate-600 opacity-20 border-transparent'
                      : 'bg-[#05060a]/80 text-slate-400 border-transparent'
                  }`}
                  style={{
                    borderColor: isNodeActive || isFocused ? galaxy.color : 'transparent',
                    boxShadow: isNodeActive ? `0 0 15px ${galaxy.color}` : 'none',
                  }}
                >
                  {tech.name}
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};

// Outer Project Worlds Belt: 6 Production Systems Orbiting around the Tech Universe
interface ProjectWorldsBeltProps {
  selectedProjectId: string | null;
  onSelectProject: (projectId: string) => void;
}

const PROJECT_WORLDS_CONFIG = [
  { id: 'decisionlens-ai', title: 'DECISIONLENS AI', subtitle: 'Enterprise Analytics', color: '#00E0FF', angleOffset: 0, radius: 23.0 },
  { id: 'riskshield-ai', title: 'RISKSHIELD AI', subtitle: 'Fraud Intelligence', color: '#10B981', angleOffset: (Math.PI * 2) / 6, radius: 24.5 },
  { id: 'campusagent-ai', title: 'CAMPUSAGENT AI', subtitle: 'Agentic RAG Student', color: '#7C5CFF', angleOffset: (Math.PI * 4) / 6, radius: 23.2 },
  { id: 'evalmentor-ai', title: 'EVALMENTOR AI', subtitle: 'AI Interview Agent', color: '#00FFA3', angleOffset: (Math.PI * 6) / 6, radius: 24.8 },
  { id: 'resume-builder', title: 'AI RESUME BUILDER', subtitle: 'ATS Document Engine', color: '#38BDF8', angleOffset: (Math.PI * 8) / 6, radius: 23.4 },
  { id: 'bookstore-sql', title: 'BOOKSTORE SQL', subtitle: 'Relational BI Engine', color: '#F59E0B', angleOffset: (Math.PI * 10) / 6, radius: 24.6 },
];

const ProjectWorldsBelt: React.FC<ProjectWorldsBeltProps> = ({
  selectedProjectId,
  onSelectProject,
}) => {
  const beltGroupRef = useRef<THREE.Group>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Outer orbital track points
  const trackPoints = useMemo(() => {
    const pts = [];
    const segments = 120;
    const baseRadius = 23.8;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * baseRadius, 0, Math.sin(theta) * baseRadius));
    }
    return pts;
  }, []);

  const trackGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(trackPoints), [trackPoints]);

  // Very slow continuous outer orbital revolution
  useFrame((_, delta) => {
    if (beltGroupRef.current) {
      const activeSpeed = hoveredProjectId || selectedProjectId ? 0.005 : 0.012;
      beltGroupRef.current.rotation.y += delta * activeSpeed;
    }
  });

  return (
    <group rotation={[0.08, 0, -0.06]}>
      {/* Outer Orbit Guide Line */}
      <lineLoop geometry={trackGeometry}>
        <lineBasicMaterial
          color="#00FFA3"
          transparent
          opacity={selectedProjectId ? 0.35 : 0.15}
          linewidth={1}
        />
      </lineLoop>

      {/* Orbiting Project Planets */}
      <group ref={beltGroupRef}>
        {PROJECT_WORLDS_CONFIG.map((world, idx) => {
          const x = Math.cos(world.angleOffset) * world.radius;
          const z = Math.sin(world.angleOffset) * world.radius;
          const isSelected = selectedProjectId === world.id;
          const isHovered = hoveredProjectId === world.id;
          const isDimmed = selectedProjectId !== null && !isSelected;

          return (
            <group key={world.id} position={[x, 0, z]}>
              {/* Planetary Mesh & Rings */}
              <group
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.playClick();
                  onSelectProject(world.id);
                }}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  audioEngine.playHover();
                  setHoveredProjectId(world.id);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  setHoveredProjectId(null);
                }}
              >
                {/* Planet Body */}
                <mesh>
                  <sphereGeometry args={[isSelected ? 0.65 : isHovered ? 0.58 : 0.48, 24, 24]} />
                  <meshStandardMaterial
                    color={world.color}
                    emissive={world.color}
                    emissiveIntensity={isSelected ? 2.5 : isHovered ? 1.6 : isDimmed ? 0.25 : 0.8}
                    roughness={0.2}
                    metalness={0.8}
                  />
                </mesh>

                {/* Planetary Ring */}
                <mesh rotation={[Math.PI / 3, 0.2, 0]}>
                  <ringGeometry args={[0.7, 0.88, 32]} />
                  <meshBasicMaterial
                    color={world.color}
                    transparent
                    opacity={isSelected ? 0.8 : isHovered ? 0.6 : isDimmed ? 0.15 : 0.4}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                {/* Beacon Aura for Selected Planet */}
                {isSelected && (
                  <mesh rotation={[0, 0, 0]}>
                    <ringGeometry args={[1.0, 1.15, 32]} />
                    <meshBasicMaterial
                      color="#00FFA3"
                      transparent
                      opacity={0.7}
                      side={THREE.DoubleSide}
                    />
                  </mesh>
                )}
              </group>

              {/* Billboard Label */}
              <Html
                position={[0, 1.25, 0]}
                center
                distanceFactor={22}
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className={`px-3 py-1.5 rounded-xl font-mono whitespace-nowrap transition-all duration-300 border shadow-2xl flex flex-col items-center gap-0.5 ${
                    isSelected
                      ? 'bg-[#05060a] text-white font-bold scale-125 z-40 border-2'
                      : isHovered
                      ? 'bg-[#090c18] text-white scale-110 z-30'
                      : isDimmed
                      ? 'bg-[#05060a]/40 text-slate-500 opacity-25 border-transparent'
                      : 'bg-[#05060a]/90 text-slate-300 border-slate-800'
                  }`}
                  style={{
                    borderColor: isSelected || isHovered ? world.color : 'rgba(255,255,255,0.1)',
                    boxShadow: isSelected || isHovered ? `0 0 25px ${world.color}` : 'none',
                  }}
                >
                  <span className="text-[8px] uppercase tracking-widest text-[#00FFA3] font-mono">
                    SYSTEM 0{idx + 1}
                  </span>
                  <span className="font-bold text-[11px] text-white">{world.title}</span>
                  <span className="text-[9px] text-slate-400">{world.subtitle}</span>
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};

const CentralEngineeringCore: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.15;
      coreRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.1;
    }
  });

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        audioEngine.playClick();
        onReset();
      }}
    >
      {/* Central Pulsing Polyhedron Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#00E0FF"
          emissive="#7C5CFF"
          emissiveIntensity={1.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Orbit Collar Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[2.3, 2.38, 64]} />
        <meshBasicMaterial color="#00FFA3" transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>

      {/* Central Core Label */}
      <Html position={[0, -2.6, 0]} center distanceFactor={16}>
        <div className="px-3.5 py-1 rounded-full bg-[#05060a]/95 border border-[#00E0FF]/60 text-[#00E0FF] font-mono text-[11px] font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(0,224,255,0.45)] whitespace-nowrap cursor-pointer hover:scale-105 transition-transform">
          ANZAR // CORE
        </div>
      </Html>
    </group>
  );
};

interface TechnologyUniverseCanvasProps {
  focusedGalaxyId: string | null;
  selectedTech: TechnologyItem | null;
  selectedProjectId: string | null;
  highlightedProjectTechs: string[] | null;
  onSelectGalaxy: (galaxyId: string) => void;
  onSelectTech: (tech: TechnologyItem) => void;
  onSelectProject: (projectId: string) => void;
  onReset: () => void;
}

export const TechnologyUniverseCanvas: React.FC<TechnologyUniverseCanvasProps> = ({
  focusedGalaxyId,
  selectedTech,
  selectedProjectId,
  highlightedProjectTechs,
  onSelectGalaxy,
  onSelectTech,
  onSelectProject,
  onReset,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Pause Three.js rendering loop when section is offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[500px] relative">
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 22, 34], fov: 44 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.45} />
          <pointLight position={[15, 20, 15]} intensity={0.9} color="#00E0FF" />
          <pointLight position={[-15, -20, -15]} intensity={0.6} color="#7C5CFF" />

          {/* Central Engineering Core */}
          <CentralEngineeringCore onReset={onReset} />

          {/* 7 Orbiting Technology Galaxies */}
          {TECHNOLOGY_GALAXIES.map((galaxy) => (
            <GalaxyOrbitalRing
              key={galaxy.id}
              galaxy={galaxy}
              isFocused={focusedGalaxyId === galaxy.id}
              isAnyFocused={focusedGalaxyId !== null}
              selectedTech={selectedTech ? selectedTech.name : null}
              highlightedProjectTechs={highlightedProjectTechs}
              onSelectGalaxy={onSelectGalaxy}
              onSelectTech={onSelectTech}
            />
          ))}

          {/* Outer Belt of 6 Production Project Worlds */}
          <ProjectWorldsBelt
            selectedProjectId={selectedProjectId}
            onSelectProject={onSelectProject}
          />
        </Canvas>
      )}
    </div>
  );
};
