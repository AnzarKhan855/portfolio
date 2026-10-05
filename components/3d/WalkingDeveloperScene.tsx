'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

interface WalkingCharacterProps {
  scrollProgress: number; // 0.0 to 1.0
  activeStage: number; // 0 to 8
}

export const JOURNEY_STAGES = [
  {
    id: 'foundations',
    title: 'THE BEGINNING (FOUNDATIONS)',
    subtitle: 'Curiosity, Mathematics & Logic',
    z: 0,
    desc: 'Started with curiosity, problem solving, mathematics, computers and technology. Exploring algorithmic logic, discrete structures, and systems thinking.',
  },
  {
    id: 'college',
    title: 'COLLEGE (B.TECH AI/ML)',
    subtitle: 'Allenhouse Institute of Technology',
    z: -10,
    desc: 'B.Tech in Artificial Intelligence & Machine Learning (2023–2027), AKTU. Computer science foundations, data structures, relational databases, neural networks, and systems engineering.',
  },
  {
    id: 'learning',
    title: 'LEARNING THE STACK',
    subtitle: 'Technology Acquisition Sequence',
    z: -20,
    desc: 'Systematic technical progression: HTML → CSS → JavaScript → React → Next.js → TypeScript → Node.js → Python → FastAPI → SQL → MongoDB → PostgreSQL → Docker → Git → AI/ML → RAG.',
  },
  {
    id: 'builder-emerges',
    title: 'THE BUILDER EMERGES',
    subtitle: 'First Production Products',
    z: -30,
    desc: 'Transitioning from learning syntax to shipping products. Built AI Resume Builder (50 ATS templates, unpdf parser) and EvalMentor AI (automated resume parsing & interview rubric evaluation).',
  },
  {
    id: 'intelligence',
    title: 'INTELLIGENCE SYSTEMS',
    subtitle: 'Agentic RAG & Vector Workflows',
    z: -40,
    desc: 'Engineering CampusAgent AI: academic productivity platform with Qdrant vector database, sub-45ms semantic RAG retrieval, parallelized exam generation, and 15+ secured REST endpoints.',
  },
  {
    id: 'enterprise',
    title: 'ENTERPRISE ARCHITECTURE',
    subtitle: 'RiskShield AI Fraud Intelligence',
    z: -50,
    desc: 'Clean Architecture with strict layer decoupling. Engineered AST rule compiler evaluated in parallel with XGBoost ML ensemble and TreeSHAP regulatory explainability for banking compliance.',
  },
  {
    id: 'decision',
    title: 'DECISION INTELLIGENCE',
    subtitle: 'DecisionLens Universal Analytics',
    z: -60,
    desc: 'DecisionLens AI v2.1.0-RC: DuckDB in-memory analytical engine, time-series forecasting, automated schema profiling, 30 verified routes, and 269 passing automated backend pytests.',
  },
  {
    id: 'voc',
    title: 'VOICE OF THE CUSTOMER',
    subtitle: 'LOOP 2.0 Intelligence Platform',
    z: -70,
    desc: 'LOOP 2.0: Enterprise VoC platform transforming raw customer signals into grounded product strategy. Dual NLP pipeline (ABSA, Plutchik-8, 0–100 severity), Neon PostgreSQL, and 79/79 passing automated tests.',
  },
  {
    id: 'command-center',
    title: 'FROM LEARNING TO SHIPPING',
    subtitle: 'Engineering Command Center',
    z: -80,
    desc: 'The culmination of the journey: "I don\'t just learn technologies. I use them to build systems." 7 production platforms deployed, 75+ REST API endpoints, 350+ tests passing, and 100% full-stack architectural coverage.',
  },
];

const StylizedDeveloperAvatar: React.FC<{ zPos: number; walkCycle: number }> = ({ zPos, walkCycle }) => {
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const legAngle = Math.sin(walkCycle) * 0.48;
    const armAngle = -Math.sin(walkCycle) * 0.42;
    const bob = Math.abs(Math.sin(walkCycle * 2)) * 0.07;

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
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[0.32, 0.36, 0.3]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.6} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Visor */}
        <mesh position={[0, 0.77, 0.16]}>
          <boxGeometry args={[0.28, 0.09, 0.04]} />
          <meshBasicMaterial color="#00FFA3" />
        </mesh>

        {/* Neck Collar */}
        <mesh position={[0, 0.52, 0]}>
          <cylinderGeometry args={[0.1, 0.12, 0.08, 12]} />
          <meshStandardMaterial color="#7C5CFF" />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[0.5, 0.62, 0.28]} />
          <meshStandardMaterial color="#090c18" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Torso Core Reactor Light */}
        <mesh position={[0, 0.22, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
          <meshBasicMaterial color="#00E0FF" />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.36, 1.6, 0]}>
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
      <group ref={rightArmRef} position={[0.36, 1.6, 0]}>
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
      <group ref={leftLegRef} position={[-0.16, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.14, 0.82, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.16, 1.0, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <boxGeometry args={[0.14, 0.82, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Aura Glow underneath */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.6, 24]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const JourneyCorridorEnvironment: React.FC<{ activeStage: number }> = ({ activeStage }) => {
  // Pathway grid geometry extending from z = 5 to z = -90
  const pathLines = useMemo(() => {
    const pts = [];
    pts.push(new THREE.Vector3(-1.6, 0, 5), new THREE.Vector3(-1.6, 0, -90));
    pts.push(new THREE.Vector3(1.6, 0, 5), new THREE.Vector3(1.6, 0, -90));
    for (let z = 5; z >= -90; z -= 2.5) {
      pts.push(new THREE.Vector3(-1.6, 0, z), new THREE.Vector3(1.6, 0, z));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const acquisitionTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 
    'TypeScript', 'Node.js', 'Python', 'FastAPI', 'SQL', 
    'PostgreSQL', 'Docker', 'Git', 'RAG'
  ];

  return (
    <group>
      {/* Floor Grid Pathway */}
      <lineSegments geometry={pathLines}>
        <lineBasicMaterial color="#00E0FF" transparent opacity={0.25} />
      </lineSegments>

      {/* STAGE 01: THE BEGINNING / FOUNDATIONS (z = 0) */}
      <group position={[-3.4, 0, 0]}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[1.8, 0.1, 1.2]} />
          <meshStandardMaterial color="#090c18" metalness={0.8} />
        </mesh>
        <mesh position={[-0.4, 1.0, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[0.4, 1.1, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.4, 16]} />
          <meshStandardMaterial color="#00FFA3" wireframe />
        </mesh>
        <Html position={[0, 2.3, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00FFA3]/50 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 01 // CURIOSITY & FOUNDATIONS
          </div>
        </Html>
      </group>

      {/* STAGE 02: COLLEGE (z = -10) */}
      <group position={[3.5, 0, -10]}>
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[0.9, 3.6, 0.9]} />
          <meshStandardMaterial color="#090c18" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[0, 3.8, 0]}>
          <octahedronGeometry args={[0.55]} />
          <meshStandardMaterial color="#7C5CFF" wireframe />
        </mesh>
        <Html position={[0, 2.5, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 02 // B.TECH AI & ML (ALLENHOUSE)
          </div>
        </Html>
      </group>

      {/* STAGE 03: LEARNING THE STACK (z = -20) */}
      <group position={[-3.3, 1.4, -20]}>
        {acquisitionTechs.slice(0, 8).map((tech, idx) => (
          <group key={tech} position={[Math.cos(idx * 0.8) * 1.6, Math.sin(idx * 0.8) * 1.1, (idx - 4) * 0.3]}>
            <mesh>
              <sphereGeometry args={[0.16, 16, 16]} />
              <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.8} />
            </mesh>
            <Html position={[0, 0.32, 0]} center distanceFactor={12}>
              <div className="px-1.5 py-0.5 rounded bg-[#05060a] border border-[#00E0FF]/40 text-[#00E0FF] font-mono text-[8px] font-bold whitespace-nowrap">
                {tech}
              </div>
            </Html>
          </group>
        ))}
        <Html position={[0, 2.3, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 03 // TECH STACK ACQUISITION
          </div>
        </Html>
      </group>

      {/* STAGE 04: THE BUILDER EMERGES (z = -30) */}
      <group position={[3.3, 0, -30]}>
        <mesh position={[0, 1.0, 0]}>
          <boxGeometry args={[2.0, 0.1, 1.0]} />
          <meshStandardMaterial color="#090c18" metalness={0.8} />
        </mesh>
        <mesh position={[-0.45, 1.6, 0]} rotation={[0, 0.2, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#38BDF8" emissive="#38BDF8" emissiveIntensity={0.5} wireframe />
        </mesh>
        <mesh position={[0.45, 1.6, 0]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.05]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={0.5} wireframe />
        </mesh>
        <Html position={[0, 2.4, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#38BDF8]/50 text-[#38BDF8] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 04 // THE BUILDER EMERGES (SAAS)
          </div>
        </Html>
      </group>

      {/* STAGE 05: INTELLIGENCE SYSTEMS (z = -40) */}
      <group position={[-3.3, 1.5, -40]}>
        {/* Qdrant Vector Cylinder */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 1.6, 24]} />
          <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.6} wireframe />
        </mesh>
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[0.9, 0.95, 32]} />
          <meshBasicMaterial color="#38BDF8" side={THREE.DoubleSide} />
        </mesh>
        <Html position={[0, 2.1, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 05 // AGENTIC RAG (CAMPUSAGENT)
          </div>
        </Html>
      </group>

      {/* STAGE 06: ENTERPRISE ARCHITECTURE (z = -50) */}
      <group position={[3.3, 1.5, -50]}>
        {/* Clean Architecture Hexagonal Portal */}
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[1.1, 1.1, 0.1, 6]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.7} wireframe />
        </mesh>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.04, 16, 48]} />
          <meshBasicMaterial color="#00E0FF" />
        </mesh>
        <Html position={[0, 2.1, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#10B981]/60 text-emerald-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 06 // RISKSHIELD AI (CLEAN ARCH)
          </div>
        </Html>
      </group>

      {/* STAGE 07: DECISION INTELLIGENCE (z = -60) */}
      <group position={[-3.3, 1.5, -60]}>
        {/* DuckDB Columnar Cube */}
        <mesh>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.6} wireframe />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.6, 1.66, 32]} />
          <meshBasicMaterial color="#F59E0B" side={THREE.DoubleSide} />
        </mesh>
        <Html position={[0, 2.1, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 07 // DECISIONLENS (DUCKDB ANALYTICS)
          </div>
        </Html>
      </group>

      {/* STAGE 08: VOICE OF THE CUSTOMER — LOOP 2.0 (z = -70) */}
      <group position={[3.3, 1.5, -70]}>
        {/* Plutchik-8 Emotion & Feedback Radar */}
        <mesh>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={0.9} wireframe />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.3, 1.36, 48]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, 0, 0]}>
          <ringGeometry args={[1.5, 1.54, 48]} />
          <meshBasicMaterial color="#7C5CFF" side={THREE.DoubleSide} />
        </mesh>
        <Html position={[0, 2.2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1 rounded-xl bg-[#090c18]/95 border border-[#00FFA3]/60 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 08 // LOOP 2.0 (VOC INTELLIGENCE)
          </div>
        </Html>
      </group>

      {/* STAGE 09: THE FINAL DESTINATION — COMMAND CENTER (z = -80) */}
      <group position={[0, 1.8, -80]}>
        {/* Central Futuristic Reactor / Core */}
        <mesh>
          <sphereGeometry args={[1.8, 32, 32]} />
          <meshStandardMaterial color="#00E0FF" emissive="#7C5CFF" emissiveIntensity={1.2} roughness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.7, 2.76, 64]} />
          <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, 0, 0]}>
          <ringGeometry args={[3.1, 3.16, 64]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} />
        </mesh>

        {/* Orbiting Project Nodes around the Command Center */}
        {PROJECTS.map((proj, idx) => {
          const angle = (idx / PROJECTS.length) * Math.PI * 2;
          const px = Math.cos(angle) * 4.2;
          const py = Math.sin(angle) * 1.8;
          const pColor = proj.accentColor || '#00E0FF';

          return (
            <group key={proj.id} position={[px, py, 0]}>
              <mesh>
                <sphereGeometry args={[0.26, 16, 16]} />
                <meshStandardMaterial color={pColor} emissive={pColor} emissiveIntensity={1.0} />
              </mesh>
              <Html position={[0, 0.45, 0]} center distanceFactor={14}>
                <div
                  className="px-2 py-0.5 rounded bg-[#05060a] border text-[8px] font-mono font-bold whitespace-nowrap"
                  style={{ borderColor: pColor, color: pColor }}
                >
                  {proj.title}
                </div>
              </Html>
            </group>
          );
        })}

        <Html position={[0, 3.2, 0]} center distanceFactor={12}>
          <div className="px-4 py-1.5 rounded-full bg-[#05060a]/95 border border-[#00FFA3] text-[#00FFA3] font-mono text-[11px] uppercase font-black tracking-widest whitespace-nowrap shadow-[0_0_30px_rgba(0,255,163,0.6)]">
            STAGE 09 // FROM LEARNING TO SHIPPING
          </div>
        </Html>
      </group>
    </group>
  );
};

const SceneCameraFollower: React.FC<{ zPos: number }> = ({ zPos }) => {
  useFrame((state) => {
    const targetZ = zPos + 6.2;
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
  activeStage: number; // 0 to 8
}

export const WalkingDeveloperScene: React.FC<WalkingDeveloperSceneProps> = ({ scrollProgress, activeStage }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Compute character Z coordinate from scroll progress (0 at start to -80 at end)
  const zPos = -scrollProgress * 80;
  const walkCycle = scrollProgress * 65;

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

          {/* Corridor Environments through all 9 Stages */}
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
