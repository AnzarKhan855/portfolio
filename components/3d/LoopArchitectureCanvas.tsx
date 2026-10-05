'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { audioEngine } from '@/lib/audio';

export interface LoopPipelineNode {
  id: string;
  stepNumber: number;
  label: string;
  tech: string;
  responsibility: string;
  color: string;
  x: number;
  y: number;
  z: number;
}

export const LOOP_PIPELINE_NODES: LoopPipelineNode[] = [
  {
    id: 'feedback-sources',
    stepNumber: 1,
    label: 'Customer Feedback Sources',
    tech: 'Zendesk, Intercom, App Stores, CSV',
    responsibility: 'Multi-channel stream capture & raw text ingestion',
    color: '#00E0FF',
    x: -6.0,
    y: 0,
    z: 0,
  },
  {
    id: 'ingestion-hygiene',
    stepNumber: 2,
    label: 'Ingestion & Data Hygiene',
    tech: 'Normalization & Levenshtein Dedup',
    responsibility: '0–100 data hygiene scoring, prompt injection sanitization, duplicate removal',
    color: '#38BDF8',
    x: -4.0,
    y: 0.4,
    z: 0,
  },
  {
    id: 'neon-postgres',
    stepNumber: 3,
    label: 'PostgreSQL / Neon Cloud',
    tech: 'Prisma ORM & Serverless PG',
    responsibility: 'Strict multi-tenant workspace isolation (workspaceId) & ACID persistence',
    color: '#7C5CFF',
    x: -2.0,
    y: -0.2,
    z: 0,
  },
  {
    id: 'dual-nlp',
    stepNumber: 4,
    label: 'Dual NLP Intelligence',
    tech: 'ABSA, Plutchik-8 & 0–100 Severity',
    responsibility: 'Aspect-based sentiment, 8 emotion dimensions, 9-class intent classification',
    color: '#00FFA3',
    x: 0.0,
    y: 0.5,
    z: 0,
  },
  {
    id: 'grounded-insights',
    stepNumber: 5,
    label: 'Grounded AI & RAG Layer',
    tech: 'Claude 3.5 Sonnet + Verified Citations',
    responsibility: 'Evidence-backed diagnostic hypotheses with verifiable database citations',
    color: '#10B981',
    x: 2.0,
    y: -0.2,
    z: 0,
  },
  {
    id: 'pm-decision-hub',
    stepNumber: 6,
    label: 'Product Decision Workspace',
    tech: '2x2 Priority Matrix & ARR Risk',
    responsibility: 'Strategic quadrant ranking (Quick Wins vs Major Projects) & emerging surges',
    color: '#F59E0B',
    x: 4.0,
    y: 0.4,
    z: 0,
  },
  {
    id: 'actions-reporting',
    stepNumber: 7,
    label: 'Actions & Executive Reports',
    tech: 'Roadmap Promotion & Markdown Export',
    responsibility: '1-click conversion to roadmap tasks & automated VoC executive briefings',
    color: '#EC4899',
    x: 6.0,
    y: 0,
    z: 0,
  },
];

const AnimatedDataFlow: React.FC = () => {
  const particlesCount = 45;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Curve connecting all 7 nodes
  const curve = useMemo(() => {
    const points = LOOP_PIPELINE_NODES.map((n) => new THREE.Vector3(n.x, n.y, n.z));
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const particleProgress = useMemo(() => {
    const arr = new Float32Array(particlesCount);
    for (let i = 0; i < particlesCount; i++) {
      arr[i] = i / particlesCount;
    }
    return arr;
  }, [particlesCount]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    for (let i = 0; i < particlesCount; i++) {
      particleProgress[i] = (particleProgress[i] + delta * 0.12) % 1.0;
      const pt = curve.getPoint(particleProgress[i]);
      dummy.position.copy(pt);
      dummy.scale.setScalar(0.08 + Math.sin(particleProgress[i] * Math.PI) * 0.05);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particlesCount]}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color="#00FFA3" transparent opacity={0.85} />
    </instancedMesh>
  );
};

const PipelineConnectingCables: React.FC = () => {
  const lineObject = useMemo(() => {
    const points = LOOP_PIPELINE_NODES.map((n) => new THREE.Vector3(n.x, n.y, n.z));
    const curve = new THREE.CatmullRomCurve3(points);
    const divisions = 100;
    const curvePoints = curve.getPoints(divisions);
    const geom = new THREE.BufferGeometry().setFromPoints(curvePoints);
    const mat = new THREE.LineBasicMaterial({ color: '#00FFA3', transparent: true, opacity: 0.35 });
    return new THREE.Line(geom, mat);
  }, []);

  return <primitive object={lineObject} />;
};

interface LoopArchitectureCanvasProps {
  activeNodeId?: string | null;
  onSelectNode?: (node: LoopPipelineNode) => void;
}

export const LoopArchitectureCanvas: React.FC<LoopArchitectureCanvasProps> = ({
  activeNodeId,
  onSelectNode,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

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
      className="w-full h-[380px] sm:h-[460px] rounded-3xl overflow-hidden glass-panel-active border border-[#00FFA3]/30 relative bg-[#05060a]"
    >
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 1.2, 8.5], fov: 48 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00FFA3" />
          <pointLight position={[-5, 5, -5]} intensity={0.9} color="#00E0FF" />

          {/* Smooth curved pipeline connecting all 7 nodes */}
          <PipelineConnectingCables />

          {/* Flowing animated data packets */}
          <AnimatedDataFlow />

          {/* 7 Pipeline Nodes */}
          {LOOP_PIPELINE_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            const isHovered = hoveredNodeId === node.id;
            const isHighlighted = isSelected || isHovered;

            return (
              <group key={node.id} position={[node.x, node.y, node.z]}>
                {/* Clickable / Hoverable Central Orb */}
                <mesh
                  onClick={(e) => {
                    e.stopPropagation();
                    audioEngine.playClick();
                    if (onSelectNode) onSelectNode(node);
                  }}
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    audioEngine.playHover();
                    setHoveredNodeId(node.id);
                  }}
                  onPointerOut={(e) => {
                    e.stopPropagation();
                    setHoveredNodeId(null);
                  }}
                >
                  <sphereGeometry args={[isHighlighted ? 0.38 : 0.28, 20, 20]} />
                  <meshStandardMaterial
                    color={node.color}
                    emissive={node.color}
                    emissiveIntensity={isHighlighted ? 2.2 : 0.8}
                    roughness={0.2}
                    metalness={0.8}
                  />
                </mesh>

                {/* Rotating Outer Gyro Ring */}
                <mesh rotation={[Math.PI / 3, 0, 0]}>
                  <ringGeometry args={[0.42, 0.48, 24]} />
                  <meshBasicMaterial
                    color={node.color}
                    transparent
                    opacity={isHighlighted ? 0.9 : 0.35}
                    side={THREE.DoubleSide}
                  />
                </mesh>

                {/* High-Definition HTML Label */}
                <Html position={[0, -0.65, 0]} center distanceFactor={14} style={{ pointerEvents: 'none' }}>
                  <div
                    className={`px-2.5 py-1 rounded-xl font-mono text-[9px] whitespace-nowrap transition-all duration-300 border flex flex-col items-center gap-0.5 ${
                      isHighlighted
                        ? 'bg-[#05060a] text-white font-bold scale-110 z-30 shadow-2xl'
                        : 'bg-[#05060a]/90 text-slate-300 border-slate-800'
                    }`}
                    style={{
                      borderColor: isHighlighted ? node.color : 'rgba(255,255,255,0.1)',
                      boxShadow: isHighlighted ? `0 0 18px ${node.color}` : 'none',
                    }}
                  >
                    <span className="text-[8px] uppercase tracking-wider font-bold" style={{ color: node.color }}>
                      0{node.stepNumber} {'//'} {node.label}
                    </span>
                    <span className="text-[7px] text-slate-400 truncate max-w-[150px]">{node.tech}</span>
                  </div>
                </Html>
              </group>
            );
          })}
        </Canvas>
      )}

      {/* Guidance Pill */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#05060a]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 pointer-events-none">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3] animate-pulse" />
          <span>LOOP 2.0 // MULTI-STAGE INTELLIGENCE DATAFLOW</span>
        </div>
        <span className="text-[#00FFA3]">FEEDBACK → INGESTION → DB → NLP → RAG → ACTIONS</span>
      </div>
    </div>
  );
};
