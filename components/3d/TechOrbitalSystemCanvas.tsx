'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { TECHNICAL_SKILL_GROUPS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

// Distinct, purposeful color & geometry mapping per category
const CATEGORY_CONFIG: Record<
  string,
  { color: string; radius: number; tiltX: number; tiltZ: number; speed: number; description: string }
> = {
  Languages: {
    color: '#00E0FF', // Electric Cyan
    radius: 4.6,
    tiltX: 0.38,
    tiltZ: -0.22,
    speed: 0.12,
    description: 'Core programming languages powering AI logic, backend servers, and web applications.',
  },
  Frontend: {
    color: '#00FFA3', // Neon Emerald
    radius: 6.8,
    tiltX: -0.32,
    tiltZ: 0.28,
    speed: -0.09,
    description: 'Modern frontend frameworks, styling engines, and reactive UI architecture.',
  },
  Backend: {
    color: '#FFD700', // Deep Amber Gold
    radius: 9.0,
    tiltX: 0.26,
    tiltZ: 0.42,
    speed: 0.10,
    description: 'High-throughput async web frameworks, microservices, and server REST APIs.',
  },
  'AI / LLM': {
    color: '#7C5CFF', // Radiant Violet
    radius: 11.2,
    tiltX: -0.42,
    tiltZ: -0.32,
    speed: -0.08,
    description: 'Retrieval-Augmented Generation, vector similarity, prompt engineering, and LLMs.',
  },
  'Data / Vector DB': {
    color: '#FF00A0', // Vivid Magenta
    radius: 13.4,
    tiltX: 0.48,
    tiltZ: -0.18,
    speed: 0.07,
    description: 'Vector databases, document stores, relational DBs, and cloud data infrastructure.',
  },
  'Auth & Tools': {
    color: '#3B82F6', // Cyber Blue
    radius: 15.6,
    tiltX: -0.22,
    tiltZ: 0.46,
    speed: -0.06,
    description: 'Security authentication protocols, JWT encryption, developer tooling, and API testing.',
  },
  'Deployment & CS Core': {
    color: '#FF499E', // Coral Rose
    radius: 17.8,
    tiltX: 0.34,
    tiltZ: -0.38,
    speed: 0.05,
    description: 'Cloud hosting deployment platforms and computer science engineering fundamentals.',
  },
};

interface OrbitRingProps {
  category: string;
  skills: string[];
  config: { color: string; radius: number; tiltX: number; tiltZ: number; speed: number };
  focusedCategory: string | null;
  hoveredNode: string | null;
  onHoverNode: (skillName: string | null) => void;
  onSelectNode: (techName: string, categoryName: string) => void;
}

const OrbitRing: React.FC<OrbitRingProps> = ({
  category,
  skills,
  config,
  focusedCategory,
  hoveredNode,
  onHoverNode,
  onSelectNode,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  const isCategoryFocused = focusedCategory === null || focusedCategory === category;

  // Generate ring points for smooth line rendering
  const points = useMemo(() => {
    const pts = [];
    const segments = 120;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * config.radius, 0, Math.sin(theta) * config.radius));
    }
    return pts;
  }, [config.radius]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Decelerate rotation when a node in this category or ring is hovered/focused
      const activeSpeed = hoveredNode || (focusedCategory && focusedCategory !== category)
        ? config.speed * 0.15
        : config.speed;
      groupRef.current.rotation.y += delta * activeSpeed;
    }
  });

  return (
    <group rotation={[config.tiltX, 0, config.tiltZ]}>
      {/* Orbit Ring Path */}
      <lineLoop geometry={lineGeometry}>
        <lineBasicMaterial
          color={config.color}
          transparent
          opacity={isCategoryFocused ? 0.7 : 0.12}
          linewidth={isCategoryFocused ? 2 : 1}
        />
      </lineLoop>

      {/* Orbiting Nodes Group */}
      <group ref={groupRef}>
        {skills.map((skill, idx) => {
          const angle = (idx / skills.length) * Math.PI * 2;
          const x = Math.cos(angle) * config.radius;
          const z = Math.sin(angle) * config.radius;
          const isThisNodeHovered = hoveredNode === skill;

          return (
            <group key={skill} position={[x, 0, z]}>
              {/* Glowing 3D Node Mesh */}
              <mesh
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.playClick();
                  onSelectNode(skill, category);
                }}
                onPointerOver={(e) => {
                  e.stopPropagation();
                  audioEngine.playHover();
                  onHoverNode(skill);
                }}
                onPointerOut={(e) => {
                  e.stopPropagation();
                  onHoverNode(null);
                }}
              >
                <sphereGeometry args={[isThisNodeHovered ? 0.32 : 0.22, 16, 16]} />
                <meshStandardMaterial
                  color={config.color}
                  emissive={config.color}
                  emissiveIntensity={isThisNodeHovered ? 2.2 : isCategoryFocused ? 1.0 : 0.3}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* HTML Label Chip */}
              <Html
                position={[0, 0.48, 0]}
                center
                distanceFactor={18}
                style={{ pointerEvents: 'none' }}
              >
                <div
                  className={`px-2.5 py-1 rounded-md font-mono text-xs whitespace-nowrap transition-all duration-300 border shadow-lg ${
                    isThisNodeHovered
                      ? 'bg-[#05060a] text-white font-bold scale-125 z-30'
                      : isCategoryFocused
                      ? 'bg-[#090c18]/95 text-slate-100 font-medium'
                      : 'bg-[#05060a]/60 text-slate-500 opacity-40 border-transparent'
                  }`}
                  style={{
                    borderColor: isThisNodeHovered || isCategoryFocused ? config.color : 'transparent',
                    boxShadow: isThisNodeHovered ? `0 0 20px ${config.color}` : 'none',
                  }}
                >
                  {skill}
                </div>
              </Html>
            </group>
          );
        })}
      </group>
    </group>
  );
};

const CentralAICore: React.FC = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerWireRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.2;
      outerWireRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Central Pulsing Icosahedron Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00E0FF"
          emissive="#7C5CFF"
          emissiveIntensity={1.4}
          wireframe={false}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Wireframe Shell */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshStandardMaterial
          color="#00E0FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Central Core Label */}
      <Html position={[0, -2.8, 0]} center distanceFactor={14}>
        <div className="px-3.5 py-1 rounded-full bg-[#05060a]/95 border border-[#00E0FF]/60 text-[#00E0FF] font-mono text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(0,224,255,0.6)]">
          ANZAR // AI CORE
        </div>
      </Html>
    </group>
  );
};

const OrbitalCameraRig: React.FC = () => {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const container = document.getElementById('capabilities');
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));

    const targetZ = 25 - scrollProgress * 10;
    const targetY = (scrollProgress - 0.5) * 4;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

export const TechOrbitalSystemCanvas: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<{ name: string; category: string } | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [focusedCategory, setFocusedCategory] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[680px] rounded-3xl overflow-hidden glass-panel-active border border-[#7C5CFF]/30 bg-[#05060a]">
      {/* Category Interactive Legend Filter Strip */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-center flex-wrap gap-2 pointer-events-auto">
        <button
          onClick={() => {
            audioEngine.playClick();
            setFocusedCategory(null);
          }}
          className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all ${
            focusedCategory === null
              ? 'bg-[#00E0FF] text-[#05060a] shadow-[0_0_15px_rgba(0,224,255,0.6)]'
              : 'bg-[#090c18]/80 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          ALL ORBITS
        </button>

        {TECHNICAL_SKILL_GROUPS.map((group) => {
          const cfg = CATEGORY_CONFIG[group.category] || { color: '#00E0FF' };
          const isSelected = focusedCategory === group.category;

          return (
            <button
              key={group.category}
              onClick={() => {
                audioEngine.playClick();
                setFocusedCategory(isSelected ? null : group.category);
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all flex items-center space-x-1.5 border"
              style={{
                backgroundColor: isSelected ? cfg.color : 'rgba(9, 12, 24, 0.8)',
                color: isSelected ? '#05060a' : cfg.color,
                borderColor: cfg.color,
                boxShadow: isSelected ? `0 0 15px ${cfg.color}` : 'none',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isSelected ? '#05060a' : cfg.color }}
              />
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      {/* R3F 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 24], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[12, 12, 12]} intensity={1.8} color="#00E0FF" />
        <pointLight position={[-12, -12, -12]} intensity={1.4} color="#7C5CFF" />
        <Stars radius={60} depth={30} count={1800} factor={3} fade speed={0.5} />

        <CentralAICore />

        {/* Render Categorized Multi-Plane Orbit Rings */}
        {TECHNICAL_SKILL_GROUPS.map((group) => {
          const cfg = CATEGORY_CONFIG[group.category] || {
            color: '#00E0FF',
            radius: 8,
            tiltX: 0,
            tiltZ: 0,
            speed: 0.1,
            description: '',
          };

          return (
            <OrbitRing
              key={group.category}
              category={group.category}
              skills={group.skills}
              config={cfg}
              focusedCategory={focusedCategory}
              hoveredNode={hoveredNode}
              onHoverNode={(skill) => setHoveredNode(skill)}
              onSelectNode={(techName, catName) => setSelectedTech({ name: techName, category: catName })}
            />
          );
        })}

        <OrbitalCameraRig />
      </Canvas>

      {/* Selected / Hovered Node Details Overlay Panel */}
      {selectedTech && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-84 glass-panel-active p-5 rounded-2xl border border-[#00E0FF]/50 text-xs font-mono shadow-2xl animate-fadeIn z-30">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] text-[#00E0FF] uppercase tracking-wider font-bold">
              {`// ORBIT NODE INSPECTOR`}
            </span>
            <button
              onClick={() => setSelectedTech(null)}
              className="text-slate-400 hover:text-white font-bold"
            >
              ✕
            </button>
          </div>
          <div className="text-xl font-extrabold text-white font-display mb-1">{selectedTech.name}</div>
          <div className="text-xs font-semibold mb-2" style={{ color: CATEGORY_CONFIG[selectedTech.category]?.color || '#00E0FF' }}>
            Category: {selectedTech.category}
          </div>
          <p className="text-slate-200 text-xs leading-relaxed mb-3">
            {CATEGORY_CONFIG[selectedTech.category]?.description || 'Integrated into Anzar Khan\'s production AI stack.'}
          </p>
          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2 flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Deployed in Anzar Khan&apos;s production architecture</span>
          </div>
        </div>
      )}
    </div>
  );
};
