'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface ResumeSectionMeshProps {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  y: number;
  color: string;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

const ResumeCardMesh: React.FC<ResumeSectionMeshProps> = ({
  id,
  title,
  subtitle,
  badge,
  y,
  color,
  isHovered,
  isSelected,
  onHover,
  onSelect,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const colorObj = useMemo(() => new THREE.Color(color), [color]);

  return (
    <group position={[0, y, isSelected ? 0.3 : 0]}>
      {/* 3D Glass Document Page Slab */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(id);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <boxGeometry args={[4.2, 0.72, 0.08]} />
        <meshStandardMaterial
          color={colorObj}
          transparent
          opacity={isSelected ? 0.75 : isHovered ? 0.5 : 0.22}
          roughness={0.2}
          metalness={0.8}
          emissive={colorObj}
          emissiveIntensity={isSelected ? 0.7 : isHovered ? 0.5 : 0.15}
        />
      </mesh>

      {/* High-Definition Edge Border */}
      <mesh>
        <boxGeometry args={[4.22, 0.74, 0.082]} />
        <meshBasicMaterial
          color={colorObj}
          wireframe
          transparent
          opacity={isSelected ? 0.95 : isHovered ? 0.8 : 0.35}
        />
      </mesh>

      {/* Floating 3D Title Card within canvas */}
      <Html position={[-1.8, 0, 0.06]} transform distanceFactor={5.5}>
        <div 
          onClick={() => onSelect(id)}
          className={`pointer-events-auto select-none cursor-pointer p-2.5 rounded-xl transition-all duration-300 w-80 text-left ${
            isSelected 
              ? 'bg-[#090c18]/95 border border-[#00E0FF] shadow-[0_0_20px_rgba(0,224,255,0.3)]' 
              : 'bg-[#05060a]/80 border border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span 
              className="text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase"
              style={{ backgroundColor: `${color}20`, color: color }}
            >
              {badge}
            </span>
            <span className="text-[9px] font-mono text-slate-500">CLICK TO EXPAND</span>
          </div>
          <div className="text-xs font-bold font-mono text-white mt-1">{title}</div>
          <div className="text-[10px] text-slate-400 font-mono truncate">{subtitle}</div>
        </div>
      </Html>
    </group>
  );
};

interface Resume3DSceneProps {
  selectedSection: string;
  onSectionSelect: (id: string) => void;
}

const Resume3DScene: React.FC<Resume3DSceneProps> = ({ selectedSection, onSectionSelect }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'profile',
      title: 'ANZAR KHAN',
      subtitle: 'Full-Stack Developer • MERN • AI/ML',
      badge: '01 IDENTITY',
      y: 2.1,
      color: '#00E0FF',
    },
    {
      id: 'education',
      title: 'B.Tech in Artificial Intelligence & ML',
      subtitle: 'Allenhouse Institute of Technology (2023–2027)',
      badge: '02 EDUCATION',
      y: 1.4,
      color: '#7C5CFF',
    },
    {
      id: 'flagship',
      title: 'DecisionLens & RiskShield AI',
      subtitle: 'Enterprise Analytics & Fraud Decisioning Platforms',
      badge: '03 FLAGSHIP SYSTEMS',
      y: 0.7,
      color: '#10B981',
    },
    {
      id: 'platforms',
      title: 'CampusAgent & EvalMentor AI',
      subtitle: 'Qdrant Vector RAG & Groq LLM Agent Workflows',
      badge: '04 AI PLATFORMS',
      y: 0.0,
      color: '#F59E0B',
    },
    {
      id: 'stack',
      title: 'Full-Stack Technical Matrix',
      subtitle: 'Next.js 15, FastAPI, Node, PostgreSQL, MongoDB',
      badge: '05 TECH STACK',
      y: -0.7,
      color: '#EC4899',
    },
    {
      id: 'data-sql',
      title: 'BookStore SQL & Research',
      subtitle: 'PostgreSQL Relational Analytics & Research Presentation',
      badge: '06 DATA & RESEARCH',
      y: -1.4,
      color: '#38BDF8',
    },
    {
      id: 'contact',
      title: 'Direct Channels & Verification',
      subtitle: 'Email: anzark964@gmail.com • Phone: +91-7705855855',
      badge: '07 VERIFIED CONTACT',
      y: -2.1,
      color: '#8B5CF6',
    },
  ];

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle natural document float & tilt
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.06;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central spine line */}
      <mesh position={[-2.15, 0, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 4.6, 8]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.4} />
      </mesh>

      {sections.map((sec) => (
        <ResumeCardMesh
          key={sec.id}
          id={sec.id}
          title={sec.title}
          subtitle={sec.subtitle}
          badge={sec.badge}
          y={sec.y}
          color={sec.color}
          isHovered={hoveredSection === sec.id}
          isSelected={selectedSection === sec.id}
          onHover={setHoveredSection}
          onSelect={onSectionSelect}
        />
      ))}
    </group>
  );
};

export const Resume3DCanvas: React.FC<{
  selectedSection: string;
  onSectionSelect: (id: string) => void;
}> = ({ selectedSection, onSectionSelect }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebGlSupported(!!gl);
    } catch {
      setWebGlSupported(false);
    }
  }, []);

  if (isReducedMotion || !webGlSupported) {
    return (
      <div className="w-full h-[520px] rounded-3xl bg-[#090c18] border border-slate-800 flex items-center justify-center p-8 text-center font-mono text-xs text-slate-400">
        <div>
          <div className="text-[#00E0FF] font-bold mb-2">3D DOCUMENT ENGINE READY</div>
          <div>Explore the verified document sections directly in the interactive panel.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[540px] relative rounded-3xl overflow-hidden glass-panel-active border border-[#7C5CFF]/30">
      <Canvas
        camera={{ position: [0, 0, 4.6], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00E0FF" />
        <pointLight position={[-5, -5, 5]} intensity={1.0} color="#7C5CFF" />

        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
          <Resume3DScene
            selectedSection={selectedSection}
            onSectionSelect={onSectionSelect}
          />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          maxAzimuthAngle={Math.PI / 8}
          minAzimuthAngle={-Math.PI / 8}
        />
      </Canvas>

      <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-500 flex items-center space-x-2 bg-[#05060a]/90 px-3 py-1.5 rounded-lg border border-slate-800">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00E0FF] animate-pulse" />
        <span>DRAG TO TILT 3D DOCUMENT • CLICK ANY LAYER TO INSPECT</span>
      </div>
    </div>
  );
};
