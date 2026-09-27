'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface WalkingCharacterProps {
  scrollProgress: number; // 0.0 to 1.0
  activeStage: number; // 0 to 7
}

export const JOURNEY_STAGES = [
  { id: 'foundations', title: 'FOUNDATIONS', z: 0, desc: 'Core computer science fundamentals, mathematics, and logic architecture.' },
  { id: 'college', title: 'COLLEGE (B.TECH AI/ML)', z: -10, desc: 'Allenhouse Institute of Technology (2023–2027), AKTU. Data structures, neural networks, RDBMS.' },
  { id: 'learning', title: 'LEARNING ECOSYSTEM', z: -20, desc: 'Systematic progression: Python, TypeScript, modern frontend, async microservices, and databases.' },
  { id: 'building', title: 'BUILDING WORKSTATION', z: -30, desc: 'Transitioning from code to systems: REST APIs, containerization, Git workflows, and deployment.' },
  { id: 'application', title: 'APPLICATION MOMENT', z: -40, desc: 'End-to-end full-stack architectures: Next.js + FastAPI + PostgreSQL/MongoDB operational live.' },
  { id: 'aiml', title: 'AI / ML PIPELINES', z: -50, desc: 'Operational intelligence: RAG semantic search, Qdrant vectors, calibrated XGBoost, and TreeSHAP.' },
  { id: 'projects', title: 'PROJECT WORLDS', z: -60, desc: '6 deployed production systems orbiting the developer: DecisionLens, RiskShield, CampusAgent...' },
  { id: 'galaxy', title: 'ENGINEERING GALAXY', z: -70, desc: 'The interconnected universe: everything converges at the central Anzar Engineering Core.' },
];

const StylizedDeveloperAvatar: React.FC<{ zPos: number; walkCycle: number }> = ({ zPos, walkCycle }) => {
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const legAngle = Math.sin(walkCycle) * 0.45;
    const armAngle = -Math.sin(walkCycle) * 0.4;
    const bob = Math.abs(Math.sin(walkCycle * 2)) * 0.06;

    if (leftLegRef.current) leftLegRef.current.rotation.x = legAngle;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legAngle;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armAngle;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armAngle;
    if (torsoRef.current) torsoRef.current.position.y = 1.6 + bob;
  });

  return (
    <group position={[0, 0, zPos]}>
      {/* Torso & Head */}
      <group ref={torsoRef} position={[0, 1.6, 0]}>
        {/* Head */}
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[0.3, 0.35, 0.3]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.6} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Visor */}
        <mesh position={[0, 0.75, 0.16]}>
          <boxGeometry args={[0.26, 0.08, 0.04]} />
          <meshBasicMaterial color="#00FFA3" />
        </mesh>

        {/* Neck Collar */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.08, 12]} />
          <meshStandardMaterial color="#7C5CFF" />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.48, 0.6, 0.28]} />
          <meshStandardMaterial color="#090c18" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Torso Core Reactor Light */}
        <mesh position={[0, 0.22, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.07, 0.07, 0.04, 16]} />
          <meshBasicMaterial color="#00E0FF" />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.34, 1.6, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.12, 0.55, 0.14]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.34, 1.6, 0]}>
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.12, 0.55, 0.14]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.15, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.14, 0.8, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.15, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.14, 0.8, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Small Aura Glow underneath */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.55, 24]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const JourneyCorridorEnvironment: React.FC<{ activeStage: number }> = ({ activeStage }) => {
  // Pathway grid geometry extending from z = 5 to z = -80
  const pathLines = useMemo(() => {
    const pts = [];
    // Central rails
    pts.push(new THREE.Vector3(-1.4, 0, 5), new THREE.Vector3(-1.4, 0, -80));
    pts.push(new THREE.Vector3(1.4, 0, 5), new THREE.Vector3(1.4, 0, -80));
    // Cross ties
    for (let z = 5; z >= -80; z -= 2.5) {
      pts.push(new THREE.Vector3(-1.4, 0, z), new THREE.Vector3(1.4, 0, z));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group>
      {/* Floor Grid Pathway */}
      <lineSegments geometry={pathLines}>
        <lineBasicMaterial color="#00E0FF" transparent opacity={0.25} />
      </lineSegments>

      {/* STAGE 01: FOUNDATIONS (z = 0) */}
      <group position={[-3.2, 0, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[1.8, 0.1, 1.2]} />
          <meshStandardMaterial color="#090c18" metalness={0.8} />
        </mesh>
        <mesh position={[-0.4, 1.0, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0.4, 1.1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
          <meshStandardMaterial color="#00FFA3" wireframe />
        </mesh>
        <Html position={[0, 2.2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00FFA3]/50 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 01 // FOUNDATIONS
          </div>
        </Html>
      </group>

      {/* STAGE 02: COLLEGE (z = -10) */}
      <group position={[3.4, 0, -10]}>
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[0.8, 3.6, 0.8]} />
          <meshStandardMaterial color="#090c18" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[0, 3.8, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#7C5CFF" wireframe />
        </mesh>
        <Html position={[0, 2.5, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 02 // B.TECH AI & ML (ALLENHOUSE)
          </div>
        </Html>
      </group>

      {/* STAGE 03: LEARNING ECOSYSTEM (z = -20) */}
      <group position={[-3.2, 1.5, -20]}>
        {['Python', 'TypeScript', 'SQL', 'FastAPI', 'Next.js'].map((tech, idx) => (
          <group key={tech} position={[Math.cos(idx * 1.25) * 1.5, Math.sin(idx * 1.25) * 1.0, 0]}>
            <mesh>
              <sphereGeometry args={[0.18, 16, 16]} />
              <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.8} />
            </mesh>
            <Html position={[0, 0.35, 0]} center distanceFactor={12}>
              <div className="px-2 py-0.5 rounded bg-[#05060a] border border-[#00E0FF]/40 text-[#00E0FF] font-mono text-[9px] font-bold whitespace-nowrap">
                {tech}
              </div>
            </Html>
          </group>
        ))}
        <Html position={[0, 2.2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 03 // LEARNING NODES
          </div>
        </Html>
      </group>

      {/* STAGE 04: BUILDING WORKSTATION (z = -30) */}
      <group position={[3.2, 0, -30]}>
        {/* Workstation Console */}
        <mesh position={[0, 1.0, 0]}>
          <boxGeometry args={[2.0, 0.1, 1.0]} />
          <meshStandardMaterial color="#090c18" metalness={0.8} />
        </mesh>
        {/* Holographic Dual Monitors */}
        <mesh position={[-0.4, 1.6, 0]} rotation={[0, 0.2, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={0.4} wireframe />
        </mesh>
        <mesh position={[0.4, 1.6, 0]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.4} wireframe />
        </mesh>
        <Html position={[0, 2.4, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00FFA3]/50 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 04 // BUILDING SYSTEMS
          </div>
        </Html>
      </group>

      {/* STAGE 05: APPLICATION BUILDING MOMENT (z = -40) */}
      <group position={[-3.2, 1.6, -40]}>
        {/* Floating Holographic Product Window (Frontend -> API -> DB) */}
        <mesh>
          <boxGeometry args={[2.4, 1.6, 0.05]} />
          <meshStandardMaterial color="#090c18" transparent opacity={0.8} roughness={0.1} />
        </mesh>
        <mesh>
          <boxGeometry args={[2.42, 1.62, 0.052]} />
          <meshBasicMaterial color="#00E0FF" wireframe />
        </mesh>
        <Html position={[0, 0, 0.06]} center distanceFactor={10}>
          <div className="p-3 rounded-xl bg-[#05060a]/95 border border-[#00E0FF]/60 text-left w-52 font-mono shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span className="text-[9px] text-[#00FFA3] font-bold">● APPLICATION ARCHITECTURE</span>
              <span className="text-[8px] text-slate-500">PROD</span>
            </div>
            <div className="text-[10px] font-bold text-white">Next.js 15 App Client</div>
            <div className="text-[8px] text-[#00E0FF] my-0.5">↓ REST API / Pydantic</div>
            <div className="text-[10px] font-bold text-white">FastAPI Async Microservice</div>
            <div className="text-[8px] text-purple-400 my-0.5">↓ Vector / SQL Persistence</div>
            <div className="text-[10px] font-bold text-white">PostgreSQL & Qdrant</div>
          </div>
        </Html>
        <Html position={[0, 2.0, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 05 // APPLICATION MOMENT
          </div>
        </Html>
      </group>

      {/* STAGE 06: AI / ML PIPELINES (z = -50) */}
      <group position={[3.2, 1.6, -50]}>
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.8} wireframe />
        </mesh>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[1.3, 1.34, 32]} />
          <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} />
        </mesh>
        <Html position={[0, 2.0, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 06 // AI & ML PIPELINES
          </div>
        </Html>
      </group>

      {/* STAGE 07: PROJECT WORLDS (z = -60) */}
      <group position={[0, 2.2, -60]}>
        {PROJECTS.map((proj, idx) => {
          const angle = (idx / PROJECTS.length) * Math.PI * 2;
          const px = Math.cos(angle) * 3.6;
          const py = Math.sin(angle) * 1.5;
          const pColor = proj.accentColor || '#00E0FF';

          return (
            <group key={proj.id} position={[px, py, 0]}>
              <mesh>
                <sphereGeometry args={[0.3, 16, 16]} />
                <meshStandardMaterial color={pColor} emissive={pColor} emissiveIntensity={0.8} />
              </mesh>
              <Html position={[0, 0.45, 0]} center distanceFactor={14}>
                <div className="px-2 py-0.5 rounded bg-[#05060a] border text-[9px] font-mono font-bold whitespace-nowrap" style={{ borderColor: pColor, color: pColor }}>
                  {proj.title}
                </div>
              </Html>
            </group>
          );
        })}
        <Html position={[0, -2.4, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00FFA3]/50 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            CHAPTER 07 // 6 SHIPPED SYSTEMS
          </div>
        </Html>
      </group>

      {/* STAGE 08: THE ENGINEERING GALAXY THRESHOLD (z = -70) */}
      <group position={[0, 1.8, -70]}>
        <mesh>
          <sphereGeometry args={[1.6, 24, 24]} />
          <meshStandardMaterial color="#00E0FF" emissive="#7C5CFF" emissiveIntensity={1.2} roughness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.5, 2.55, 64]} />
          <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} />
        </mesh>
        <Html position={[0, 3.0, 0]} center distanceFactor={12}>
          <div className="px-3.5 py-1.5 rounded-full bg-[#05060a]/95 border border-[#00E0FF] text-[#00E0FF] font-mono text-[11px] uppercase font-black tracking-widest whitespace-nowrap shadow-[0_0_25px_rgba(0,224,255,0.6)]">
            ANZAR KHAN // ENGINEERING GALAXY
          </div>
        </Html>
      </group>
    </group>
  );
};

const SceneCameraFollower: React.FC<{ zPos: number }> = ({ zPos }) => {
  useFrame((state) => {
    const targetZ = zPos + 6.0;
    const targetY = 2.2;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.08);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0, 0.08);
    state.camera.lookAt(0, 1.6, zPos - 4.0);
  });
  return null;
};

interface WalkingDeveloperSceneProps {
  scrollProgress: number; // 0 to 1
  activeStage: number; // 0 to 7
}

export const WalkingDeveloperScene: React.FC<WalkingDeveloperSceneProps> = ({ scrollProgress, activeStage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Compute character Z coordinate from scroll progress (0 at start to -70 at end)
  const zPos = -scrollProgress * 70;
  const walkCycle = scrollProgress * 55;

  useEffect(() => {
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
    <div ref={containerRef} className="w-full h-[580px] rounded-3xl overflow-hidden glass-panel-active border border-[#7C5CFF]/30 relative bg-[#05060a]">
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 2.2, 6], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.2} color="#00E0FF" />
          <pointLight position={[-10, 10, -30]} intensity={0.8} color="#7C5CFF" />

          {/* Camera smoothly tracks the walking developer along the corridor */}
          <SceneCameraFollower zPos={zPos} />

          {/* Stylized Developer Human Avatar Walking with Scroll */}
          <StylizedDeveloperAvatar zPos={zPos} walkCycle={walkCycle} />

          {/* Corridor Environments through all 8 Chapters */}
          <JourneyCorridorEnvironment activeStage={activeStage} />
        </Canvas>
      )}

      {/* Bottom Guidance Pill */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#05060a]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
          <span>SCROLL TO WALK THROUGH CAREER EVOLUTION</span>
        </div>
        <span className="text-[#00E0FF]">STAGE 0{activeStage + 1} &bull; {JOURNEY_STAGES[activeStage]?.title}</span>
      </div>
    </div>
  );
};
