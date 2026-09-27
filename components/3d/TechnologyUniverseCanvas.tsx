'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { TECHNOLOGY_GALAXIES, TechnologyGalaxy, TechnologyItem } from '@/lib/portfolioData';
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

  const ringOpacity = isFocused ? 0.65 : isAnyFocused ? 0.08 : 0.25;

  return (
    <group rotation={[galaxy.tiltX, 0, galaxy.tiltZ]}>
      {/* Orbital Path Line */}
      <lineLoop geometry={lineGeometry}>
        <lineBasicMaterial
          color={galaxy.color}
          transparent
          opacity={ringOpacity}
          linewidth={isFocused ? 2 : 1}
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
          const isDimmed = (isAnyFocused && !isFocused) || (highlightedProjectTechs && !isHighlightedByProject);

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
                <sphereGeometry args={[isNodeActive ? 0.32 : 0.2, 16, 16]} />
                <meshStandardMaterial
                  color={galaxy.color}
                  emissive={galaxy.color}
                  emissiveIntensity={isNodeActive ? 2.2 : isFocused ? 1.0 : isDimmed ? 0.15 : 0.5}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* Readable HTML Label */}
              <Html
                position={[0, 0.45, 0]}
                center
                distanceFactor={18}
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className={`px-2 py-0.5 rounded font-mono text-[10px] whitespace-nowrap transition-all duration-300 border shadow-lg ${
                    isNodeActive
                      ? 'bg-[#05060a] text-white font-bold scale-110 z-30'
                      : isFocused
                      ? 'bg-[#090c18]/95 text-slate-200 font-medium'
                      : isDimmed
                      ? 'bg-[#05060a]/40 text-slate-600 opacity-20 border-transparent'
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
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00E0FF"
          emissive="#7C5CFF"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Orbit Collar Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[2.2, 2.25, 64]} />
        <meshBasicMaterial color="#00FFA3" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      {/* Central Core Label */}
      <Html position={[0, -2.4, 0]} center distanceFactor={14}>
        <div className="px-3 py-1 rounded-full bg-[#05060a]/95 border border-[#00E0FF]/60 text-[#00E0FF] font-mono text-[11px] font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,224,255,0.4)] whitespace-nowrap">
          ANZAR // CORE
        </div>
      </Html>
    </group>
  );
};

interface TechnologyUniverseCanvasProps {
  focusedGalaxyId: string | null;
  selectedTech: TechnologyItem | null;
  highlightedProjectTechs: string[] | null;
  onSelectGalaxy: (galaxyId: string) => void;
  onSelectTech: (tech: TechnologyItem) => void;
  onReset: () => void;
}

export const TechnologyUniverseCanvas: React.FC<TechnologyUniverseCanvasProps> = ({
  focusedGalaxyId,
  selectedTech,
  highlightedProjectTechs,
  onSelectGalaxy,
  onSelectTech,
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
          camera={{ position: [0, 16, 26], fov: 42 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[15, 20, 15]} intensity={0.8} color="#00E0FF" />
          <pointLight position={[-15, -20, -15]} intensity={0.5} color="#7C5CFF" />

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
        </Canvas>
      )}
    </div>
  );
};
