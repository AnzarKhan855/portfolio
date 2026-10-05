'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { JOURNEY_STORY_MILESTONES, JourneyMilestone, PROJECTS } from '@/lib/portfolioData';
import { audioEngine } from '@/lib/audio';

// Preserve alias for any components importing JOURNEY_STAGES
export const JOURNEY_STAGES = JOURNEY_STORY_MILESTONES.map((m, idx) => ({
  id: m.id,
  title: m.title,
  subtitle: m.subtitle,
  z: -idx * 10,
  desc: m.narrativeDetail,
  tag: m.tag,
  year: m.year,
  isFlagship: m.isFlagship,
  isLatest: m.isLatest,
}));

interface WalkingDeveloperSceneProps {
  scrollProgress: number; // 0.0 to 1.0
  activeStage: number; // 0 to 10
  onSelectStage?: (stageIndex: number) => void;
}

// -------------------------------------------------------------
// 1. STYLIZED PROCEDURAL DEVELOPER AVATAR
// -------------------------------------------------------------
const StylizedDeveloperAvatar: React.FC<{ zPos: number; walkCycle: number }> = ({ zPos, walkCycle }) => {
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const torsoRef = useRef<THREE.Group>(null);
  const pulseRingRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const isMoving = Math.abs(Math.sin(walkCycle)) > 0.01;
    const legAngle = Math.sin(walkCycle) * 0.52;
    const armAngle = -Math.sin(walkCycle) * 0.46;
    const bob = Math.abs(Math.sin(walkCycle * 2)) * 0.08;

    if (leftLegRef.current) leftLegRef.current.rotation.x = legAngle;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legAngle;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armAngle;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armAngle;
    if (torsoRef.current) torsoRef.current.position.y = 1.6 + bob;

    // Ground pulse animation
    if (pulseRingRef.current) {
      const scale = 1 + (Math.sin(state.clock.getElapsedTime() * 4) + 1) * 0.15;
      pulseRingRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <group position={[0, 0, zPos]}>
      {/* Torso & Head */}
      <group ref={torsoRef} position={[0, 1.6, 0]}>
        {/* Head */}
        <mesh position={[0, 0.72, 0]}>
          <boxGeometry args={[0.34, 0.38, 0.32]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.65} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Cyber Visor */}
        <mesh position={[0, 0.78, 0.17]}>
          <boxGeometry args={[0.3, 0.1, 0.04]} />
          <meshBasicMaterial color="#00FFA3" />
        </mesh>

        {/* Neck Collar */}
        <mesh position={[0, 0.51, 0]}>
          <cylinderGeometry args={[0.11, 0.13, 0.09, 12]} />
          <meshStandardMaterial color="#7C5CFF" />
        </mesh>

        {/* Cyber Torso Armor */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.54, 0.65, 0.3]} />
          <meshStandardMaterial color="#090c18" roughness={0.3} metalness={0.7} />
        </mesh>

        {/* Torso Core Reactor Light */}
        <mesh position={[0, 0.22, 0.16]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
          <meshBasicMaterial color="#00E0FF" />
        </mesh>
      </group>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.38, 1.6, 0]}>
        <mesh position={[0, -0.32, 0]}>
          <boxGeometry args={[0.13, 0.58, 0.14]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.38, 1.6, 0]}>
        <mesh position={[0, -0.32, 0]}>
          <boxGeometry args={[0.13, 0.58, 0.14]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color="#00E0FF" emissive="#00E0FF" emissiveIntensity={0.6} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.17, 1.0, 0]}>
        <mesh position={[0, -0.48, 0]}>
          <boxGeometry args={[0.15, 0.88, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.17, 1.0, 0]}>
        <mesh position={[0, -0.48, 0]}>
          <boxGeometry args={[0.15, 0.88, 0.18]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* Ground Contact Aura Ring */}
      <mesh ref={pulseRingRef} position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.25, 0.65, 24]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.45} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// -------------------------------------------------------------
// 2. CORRIDOR ENVIRONMENTS FOR ALL 11 MILESTONES
// -------------------------------------------------------------
const CorridorFloorGrid: React.FC = () => {
  const pathGeometry = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    // Main boundary rails
    pts.push(new THREE.Vector3(-1.8, 0, 8), new THREE.Vector3(-1.8, 0, -112));
    pts.push(new THREE.Vector3(1.8, 0, 8), new THREE.Vector3(1.8, 0, -112));
    
    // Cross ties every 2 units
    for (let z = 8; z >= -112; z -= 2) {
      pts.push(new THREE.Vector3(-1.8, 0, z), new THREE.Vector3(1.8, 0, z));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group>
      <lineSegments geometry={pathGeometry}>
        <lineBasicMaterial color="#00E0FF" transparent opacity={0.22} />
      </lineSegments>

      {/* Milestone Waypoint Rings along the path */}
      {[0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100].map((z, idx) => (
        <group key={z} position={[0, 0.02, z]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.75, 1.85, 32]} />
            <meshBasicMaterial color={idx === 5 ? '#F59E0B' : idx === 8 ? '#00FFA3' : '#7C5CFF'} transparent opacity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Dynamic visual environments for each stage
const AllMilestoneEnvironments: React.FC<{ activeStage: number }> = ({ activeStage }) => {
  const timeRef = useRef(0);
  const scannerRef = useRef<THREE.Mesh>(null);
  const waveformRefs = useRef<THREE.Mesh[]>([]);
  const duckDbCubeRef = useRef<THREE.Mesh>(null);
  const loopRadarRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;

    // Stage 02: Moving laser scanner
    if (scannerRef.current) {
      scannerRef.current.position.y = 1.3 + Math.sin(t * 3.5) * 0.9;
    }

    // Stage 03: Equalizer waveforms
    waveformRefs.current.forEach((bar, i) => {
      if (bar) {
        const height = 0.3 + Math.abs(Math.sin(t * 5 + i * 0.8)) * 1.1;
        bar.scale.y = height;
      }
    });

    // Stage 05: DecisionLens DuckDB rotating cube
    if (duckDbCubeRef.current) {
      duckDbCubeRef.current.rotation.y = t * 0.6;
      duckDbCubeRef.current.rotation.x = Math.sin(t * 0.4) * 0.2;
    }

    // Stage 08: LOOP 2.0 Emotion Radar icosahedron
    if (loopRadarRef.current) {
      loopRadarRef.current.rotation.y = t * 0.8;
      loopRadarRef.current.rotation.z = Math.cos(t * 0.5) * 0.3;
    }
  });

  const acquisitionTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 
    'TypeScript', 'Node.js', 'Python', 'FastAPI', 'SQL', 
    'PostgreSQL', 'Docker', 'Git', 'RAG'
  ];

  return (
    <group>
      {/* ------------------------------------------------------------- */}
      {/* 00. COLLEGE FOUNDATION (z = 0) */}
      {/* ------------------------------------------------------------- */}
      <group position={[-3.6, 0, 0]}>
        {/* Architectural College Columns & Arch */}
        <mesh position={[-0.8, 1.8, 0]}>
          <cylinderGeometry args={[0.22, 0.25, 3.6, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0.8, 1.8, 0]}>
          <cylinderGeometry args={[0.22, 0.25, 3.6, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 3.6, 0]}>
          <boxGeometry args={[2.2, 0.3, 0.6]} />
          <meshStandardMaterial color="#090c18" metalness={0.8} />
        </mesh>

        {/* Stack of Glowing AI / CS Books */}
        <group position={[0, 0.6, 0.4]}>
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[1.0, 0.18, 0.7]} />
            <meshStandardMaterial color="#1e1b4b" />
          </mesh>
          <mesh position={[0, 0.28, 0]} rotation={[0, 0.1, 0]}>
            <boxGeometry args={[0.9, 0.16, 0.65]} />
            <meshStandardMaterial color="#312e81" />
          </mesh>
          <mesh position={[0, 0.44, 0]} rotation={[0, -0.15, 0]}>
            <boxGeometry args={[0.8, 0.15, 0.6]} />
            <meshStandardMaterial color="#4338ca" emissive="#4338ca" emissiveIntensity={0.4} />
          </mesh>
        </group>

        {/* Spinning 3D Neural Network Graph */}
        <mesh position={[0, 2.4, 0]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#00E0FF" wireframe />
        </mesh>

        <Html position={[0, 4.3, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-[0_0_20px_rgba(0,224,255,0.3)]">
            2023 // B.TECH AI & ML (ALLENHOUSE)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 01. LEARNING THE STACK (z = -10) */}
      {/* ------------------------------------------------------------- */}
      <group position={[3.6, 1.4, -10]}>
        {acquisitionTechs.slice(0, 10).map((tech, idx) => {
          const angle = idx * 0.65;
          const px = Math.cos(angle) * 1.8;
          const py = Math.sin(angle) * 1.2;
          const pz = (idx - 5) * 0.35;
          return (
            <group key={tech} position={[px, py, pz]}>
              <mesh>
                <sphereGeometry args={[0.18, 16, 16]} />
                <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.9} />
              </mesh>
              <Html position={[0, 0.35, 0]} center distanceFactor={12}>
                <div className="px-1.5 py-0.5 rounded bg-[#05060a] border border-[#7C5CFF]/60 text-purple-200 font-mono text-[8px] font-bold whitespace-nowrap shadow-md">
                  {tech}
                </div>
              </Html>
            </group>
          );
        })}

        <Html position={[0, 3.2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 01 // TECHNOLOGY ACQUISITION
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 02. AI RESUME BUILDER — PROJECT 01 (z = -20) */}
      {/* ------------------------------------------------------------- */}
      <group position={[-3.6, 0, -20]}>
        {/* Holographic Resume Document Slab */}
        <mesh position={[0, 1.5, 0]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[1.8, 2.4, 0.05]} />
          <meshStandardMaterial color="#090c18" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Document Border Glow */}
        <mesh position={[0, 1.5, 0.01]} rotation={[0, 0.3, 0]}>
          <planeGeometry args={[1.7, 2.3]} />
          <meshBasicMaterial color="#00E0FF" wireframe />
        </mesh>

        {/* Moving Emerald Laser Scanner Beam */}
        <mesh ref={scannerRef} position={[0, 1.5, 0.1]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[2.0, 0.05, 0.05]} />
          <meshBasicMaterial color="#00FFA3" />
        </mesh>

        {/* ATS Score 98 Ring */}
        <mesh position={[1.2, 2.2, 0.2]}>
          <torusGeometry args={[0.35, 0.04, 16, 32]} />
          <meshBasicMaterial color="#00FFA3" />
        </mesh>

        <Html position={[0, 3.4, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#00FFA3]/60 text-[#00FFA3] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            PROJECT 01 // AI RESUME BUILDER (98 ATS)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 03. EVALMENTOR AI — PROJECT 02 (z = -30) */}
      {/* ------------------------------------------------------------- */}
      <group position={[3.6, 0, -30]}>
        {/* Groq LPU Core Chip */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[1.2, 0.2, 1.2]} />
          <meshStandardMaterial color="#1e1b4b" metalness={0.8} />
        </mesh>

        {/* Oscillating Audio Waveform Visualizer Bars */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            ref={(el) => {
              if (el) waveformRefs.current[i] = el;
            }}
            position={[(i - 3.5) * 0.32, 1.8, 0]}
          >
            <boxGeometry args={[0.18, 1, 0.18]} />
            <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.8} />
          </mesh>
        ))}

        {/* Holographic Microphone Cylinder */}
        <mesh position={[0, 2.8, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#00E0FF" wireframe />
        </mesh>

        <Html position={[0, 3.6, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#7C5CFF]/60 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            PROJECT 02 // EVALMENTOR AI (GROQ LPU)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 04. CAMPUSAGENT AI — PROJECT 03 (z = -40) */}
      {/* ------------------------------------------------------------- */}
      <group position={[-3.6, 0, -40]}>
        {/* Qdrant Vector DB Storage Towers */}
        <mesh position={[-0.8, 1.6, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 3.2, 24]} />
          <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.5} wireframe />
        </mesh>
        <mesh position={[0.8, 1.6, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 3.2, 24]} />
          <meshStandardMaterial color="#0284c7" emissive="#0284c7" emissiveIntensity={0.5} wireframe />
        </mesh>

        {/* Vector Retrieval Core Ring */}
        <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[0.85, 0.95, 32]} />
          <meshBasicMaterial color="#38BDF8" side={THREE.DoubleSide} />
        </mesh>

        <Html position={[0, 3.8, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#38BDF8]/60 text-sky-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            PROJECT 03 // CAMPUSAGENT AI (QDRANT RAG)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 05. DECISIONLENS AI — PROJECT 04 ★ FLAGSHIP ★ (z = -50) */}
      {/* ------------------------------------------------------------- */}
      <group position={[3.8, 0, -50]}>
        {/* Monumental Flagship Platform Desk */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[2.4, 2.6, 0.4, 32]} />
          <meshStandardMaterial color="#090c18" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Central Rotating DuckDB Columnar Monolith */}
        <mesh ref={duckDbCubeRef} position={[0, 1.8, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#F59E0B" emissive="#F59E0B" emissiveIntensity={0.7} wireframe />
        </mesh>

        {/* Double Golden / Amber Orbital Energy Rings */}
        <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.8, 1.9, 48]} />
          <meshBasicMaterial color="#F59E0B" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 1.8, 0]} rotation={[-Math.PI / 4, 0, 0]}>
          <ringGeometry args={[2.1, 2.18, 48]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} />
        </mesh>

        {/* 269 Passing Pytests Test Shield */}
        <mesh position={[0, 3.3, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={0.9} />
        </mesh>

        <Html position={[0, 4.3, 0]} center distanceFactor={12}>
          <div className="px-4 py-2 rounded-2xl bg-[#05060a]/98 border-2 border-[#F59E0B] text-[#F59E0B] font-mono text-[11px] uppercase font-black tracking-wider whitespace-nowrap shadow-[0_0_35px_rgba(245,158,11,0.6)]">
            ★ FLAGSHIP // DECISIONLENS (269 PYTESTS)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 06. BOOKSTORE SQL ANALYTICS — PROJECT 05 (z = -60) */}
      {/* ------------------------------------------------------------- */}
      <group position={[-3.6, 0, -60]}>
        {/* 4 Interconnected 3NF Relational Table Blocks */}
        {[
          { name: 'CUSTOMERS', x: -0.7, y: 1.2 },
          { name: 'ORDERS', x: 0.7, y: 1.2 },
          { name: 'BOOKS', x: -0.7, y: 2.3 },
          { name: 'AUTHORS', x: 0.7, y: 2.3 },
        ].map((tbl) => (
          <group key={tbl.name} position={[tbl.x, tbl.y, 0]}>
            <mesh>
              <boxGeometry args={[0.9, 0.7, 0.4]} />
              <meshStandardMaterial color="#0369a1" emissive="#0369a1" emissiveIntensity={0.4} wireframe />
            </mesh>
            <Html position={[0, 0.5, 0]} center distanceFactor={12}>
              <div className="px-1.5 py-0.5 rounded bg-[#05060a] border border-[#00E0FF]/40 text-[#00E0FF] font-mono text-[7px] font-bold whitespace-nowrap">
                {tbl.name}
              </div>
            </Html>
          </group>
        ))}

        {/* Relational Foreign Key Connector Beams */}
        <mesh position={[0, 1.75, 0]}>
          <torusGeometry args={[0.85, 0.03, 16, 32]} />
          <meshBasicMaterial color="#00E0FF" />
        </mesh>

        <Html position={[0, 3.4, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#00E0FF]/50 text-[#00E0FF] font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            PROJECT 05 // BOOKSTORE SQL (3NF ENGINE)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 07. RISKSHIELD AI — PROJECT 06 (z = -70) */}
      {/* ------------------------------------------------------------- */}
      <group position={[3.6, 0, -70]}>
        {/* Hexagonal Fraud Security Shields */}
        <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[1.4, 1.4, 0.15, 6]} />
          <meshStandardMaterial color="#059669" emissive="#059669" emissiveIntensity={0.7} wireframe />
        </mesh>
        <mesh position={[0, 1.8, 0.2]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[1.0, 1.0, 0.1, 6]} />
          <meshStandardMaterial color="#7C5CFF" emissive="#7C5CFF" emissiveIntensity={0.6} wireframe />
        </mesh>

        {/* TreeSHAP Feature Attribution Fan */}
        <mesh position={[0, 3.2, 0]}>
          <coneGeometry args={[0.8, 1.2, 16]} />
          <meshStandardMaterial color="#10B981" wireframe />
        </mesh>

        <Html position={[0, 4.2, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#10B981]/60 text-emerald-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            PROJECT 06 // RISKSHIELD AI (TREESHAP)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 08. LOOP 2.0 — PROJECT 07 ★ LATEST PROJECT ★ (z = -80) */}
      {/* ------------------------------------------------------------- */}
      <group position={[-3.6, 0, -80]}>
        {/* Plutchik-8 Emotion Radar Icosahedron */}
        <mesh ref={loopRadarRef} position={[0, 1.8, 0]}>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={0.8} wireframe />
        </mesh>

        {/* Dual NLP Concentric Rings */}
        <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[1.5, 1.58, 48]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0, 1.8, 0]} rotation={[-Math.PI / 4, 0, 0]}>
          <ringGeometry args={[1.8, 1.86, 48]} />
          <meshBasicMaterial color="#7C5CFF" side={THREE.DoubleSide} />
        </mesh>

        {/* 79 / 79 Automated Tests Beacon */}
        <mesh position={[0, 3.2, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#00FFA3" emissive="#00FFA3" emissiveIntensity={1.0} />
        </mesh>

        <Html position={[0, 4.3, 0]} center distanceFactor={12}>
          <div className="px-4 py-2 rounded-2xl bg-[#05060a]/98 border-2 border-[#00FFA3] text-[#00FFA3] font-mono text-[11px] uppercase font-black tracking-wider whitespace-nowrap shadow-[0_0_35px_rgba(0,255,163,0.5)]">
            🚀 LATEST // LOOP 2.0 (VOC INTELLIGENCE)
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 09. PROFESSIONAL ENGINEERING (ZIDIO INTERNSHIP) (z = -90) */}
      {/* ------------------------------------------------------------- */}
      <group position={[3.6, 0, -90]}>
        {/* 3D Kanban Sprint Board (4 columns) */}
        {['BACKLOG', 'IN PROGRESS', 'CODE REVIEW', 'SHIPPED'].map((col, idx) => (
          <group key={col} position={[(idx - 1.5) * 0.75, 1.6, 0]}>
            <mesh>
              <boxGeometry args={[0.65, 1.8, 0.08]} />
              <meshStandardMaterial color="#090c18" metalness={0.7} />
            </mesh>
            <Html position={[0, 1.1, 0]} center distanceFactor={12}>
              <div className="px-1 py-0.5 rounded bg-[#0f172a] border border-slate-700 text-slate-300 font-mono text-[7px] font-bold whitespace-nowrap">
                {col}
              </div>
            </Html>
          </group>
        ))}

        {/* Git Branching Merge Node */}
        <mesh position={[0, 3.0, 0]}>
          <torusGeometry args={[0.4, 0.05, 16, 32]} />
          <meshBasicMaterial color="#7C5CFF" />
        </mesh>

        <Html position={[0, 4.1, 0]} center distanceFactor={12}>
          <div className="px-3 py-1.5 rounded-xl bg-[#05060a]/95 border border-[#7C5CFF]/70 text-purple-300 font-mono text-[10px] uppercase font-bold whitespace-nowrap shadow-lg">
            STAGE 09 // ZIDIO DEVELOPMENT INTERNSHIP
          </div>
        </Html>
      </group>

      {/* ------------------------------------------------------------- */}
      {/* 10. FROM LEARNING TO SHIPPING — COMMAND CENTER (z = -100) */}
      {/* ------------------------------------------------------------- */}
      <group position={[0, 1.8, -100]}>
        {/* Central Core Reactor */}
        <mesh>
          <sphereGeometry args={[2.0, 32, 32]} />
          <meshStandardMaterial color="#00E0FF" emissive="#7C5CFF" emissiveIntensity={1.3} roughness={0.1} />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[2.8, 2.88, 64]} />
          <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, 0, 0]}>
          <ringGeometry args={[3.3, 3.38, 64]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} />
        </mesh>

        {/* Orbiting Satellites for All 7 Projects in Story Order */}
        {PROJECTS.map((proj, idx) => {
          const angle = (idx / PROJECTS.length) * Math.PI * 2;
          const px = Math.cos(angle) * 4.6;
          const py = Math.sin(angle) * 2.2;
          const pColor = proj.isFlagship ? '#F59E0B' : proj.isLatest ? '#00FFA3' : proj.accentColor || '#00E0FF';

          return (
            <group key={proj.id} position={[px, py, 0]}>
              <mesh>
                <sphereGeometry args={[proj.isFlagship ? 0.38 : 0.26, 16, 16]} />
                <meshStandardMaterial color={pColor} emissive={pColor} emissiveIntensity={1.1} />
              </mesh>
              <Html position={[0, 0.5, 0]} center distanceFactor={14}>
                <div
                  className="px-2 py-0.5 rounded bg-[#05060a] border text-[8px] font-mono font-bold whitespace-nowrap"
                  style={{ borderColor: pColor, color: pColor }}
                >
                  {proj.isFlagship ? `★ ${proj.title}` : proj.title}
                </div>
              </Html>
            </group>
          );
        })}

        <Html position={[0, 3.8, 0]} center distanceFactor={12}>
          <div className="px-5 py-2 rounded-full bg-[#05060a]/98 border-2 border-[#00FFA3] text-[#00FFA3] font-mono text-[12px] uppercase font-black tracking-widest whitespace-nowrap shadow-[0_0_40px_rgba(0,255,163,0.7)]">
            STAGE 10 // FROM LEARNING TO SHIPPING
          </div>
        </Html>
      </group>
    </group>
  );
};

// -------------------------------------------------------------
// 3. SMOOTH CAMERA FOLLOWER
// -------------------------------------------------------------
const SceneCameraFollower: React.FC<{ zPos: number }> = ({ zPos }) => {
  useFrame((state) => {
    const targetZ = zPos + 5.8;
    const targetY = 2.1;
    const targetX = 0;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.08);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.08);
    state.camera.lookAt(0, 1.4, zPos - 3.8);
  });
  return null;
};

// -------------------------------------------------------------
// 4. MAIN EXPORTED COMPONENT
// -------------------------------------------------------------
export const WalkingDeveloperScene: React.FC<WalkingDeveloperSceneProps> = ({
  scrollProgress,
  activeStage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  // Compute character Z coordinate from scroll progress (0 at start to -100 at end)
  const zPos = -scrollProgress * 100;
  const walkCycle = scrollProgress * 75;

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
    <div
      ref={containerRef}
      className="w-full h-[580px] rounded-3xl overflow-hidden glass-panel-active border border-[#7C5CFF]/30 relative bg-[#05060a]"
    >
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 2.1, 5.8], fov: 50 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[10, 20, 10]} intensity={1.3} color="#00E0FF" />
          <pointLight position={[-10, 10, -40]} intensity={0.9} color="#7C5CFF" />
          <pointLight position={[10, 10, -50]} intensity={1.2} color="#F59E0B" />

          {/* Camera smoothly tracks the walking developer along the corridor */}
          <SceneCameraFollower zPos={zPos} />

          {/* Stylized Developer Human Avatar Walking with Scroll */}
          <StylizedDeveloperAvatar zPos={zPos} walkCycle={walkCycle} />

          {/* Corridor Floor Grid */}
          <CorridorFloorGrid />

          {/* Corridor Environments through all 11 Stages */}
          <AllMilestoneEnvironments activeStage={activeStage} />
        </Canvas>
      )}

      {/* Bottom Guidance Pill */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#05060a]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
          <span>SCROLL OR USE CONTROLS TO PROGRESS THROUGH CAREER</span>
        </div>
        <span className="text-[#00E0FF]">
          STAGE {String(activeStage).padStart(2, '0')} &bull;{' '}
          {JOURNEY_STORY_MILESTONES[activeStage]?.title}
        </span>
      </div>
    </div>
  );
};
