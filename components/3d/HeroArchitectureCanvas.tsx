'use client';

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

interface LayerData {
  id: string;
  name: string;
  tech: string;
  color: string;
  y: number;
  width: number;
  depth: number;
  height: number;
  description: string;
  dataType: string;
}

const ARCHITECTURE_LAYERS: LayerData[] = [
  {
    id: 'frontend',
    name: '01 FRONTEND CLIENT',
    tech: 'Next.js 15 • React 19 • TypeScript • Tailwind',
    color: '#00E0FF', // Electric Cyan
    y: 2.7,
    width: 3.5,
    depth: 3.5,
    height: 0.12,
    description: 'App Router server-side rendering, streaming client components & 60 FPS 3D canvas',
    dataType: 'User Interactions & Render Events',
  },
  {
    id: 'gateway',
    name: '02 API GATEWAY & SECURITY',
    tech: 'REST Ingress • JWT • Rate Limiting • Honeypot',
    color: '#7C5CFF', // Radiant Violet
    y: 1.8,
    width: 3.2,
    depth: 3.2,
    height: 0.12,
    description: 'Cryptographic token validation, IP sliding-window rate limiting & sanitization',
    dataType: 'Authenticated Requests & Tokens',
  },
  {
    id: 'backend',
    name: '03 BACKEND MICROSERVICES',
    tech: 'FastAPI • Python 3.12 • Node.js • Express',
    color: '#10B981', // Neon Emerald
    y: 0.9,
    width: 3.4,
    depth: 3.4,
    height: 0.12,
    description: 'High-throughput async ASGI services, Pydantic type safety & Clean Architecture',
    dataType: 'Serialized Payloads & Business Logic',
  },
  {
    id: 'ai-ml',
    name: '04 AI & DECISION ENGINE',
    tech: 'RAG • Groq LLMs • XGBoost • TreeSHAP',
    color: '#F59E0B', // Amber Gold
    y: 0.0,
    width: 3.6,
    depth: 3.6,
    height: 0.14,
    description: 'Sub-15ms fraud scoring, adverse action explainability & low-latency RAG synthesis',
    dataType: 'Dense Embeddings & Model Inference',
  },
  {
    id: 'database',
    name: '05 DUAL PERSISTENCE LAYER',
    tech: 'PostgreSQL • MongoDB Atlas • Qdrant Vector DB',
    color: '#EC4899', // Vivid Rose
    y: -0.9,
    width: 3.3,
    depth: 3.3,
    height: 0.12,
    description: '3NF relational schemas, document stores & sub-45ms cosine similarity indexing',
    dataType: 'ACID Transactions & Dense Vectors',
  },
  {
    id: 'analytics',
    name: '06 DATA & PROFILING PIPELINE',
    tech: 'Pandas • Time-Series Forecasting • Recharts',
    color: '#38BDF8', // Sky Cyan
    y: -1.8,
    width: 3.1,
    depth: 3.1,
    height: 0.12,
    description: 'Automated column profiling, statistical anomaly detection & executive KPI rollups',
    dataType: 'Aggregated Metrics & Anomaly Scores',
  },
  {
    id: 'cloud',
    name: '07 CLOUD & EDGE INFRASTRUCTURE',
    tech: 'Docker • Vercel Edge • Render Microservices',
    color: '#8B5CF6', // Cyber Purple
    y: -2.7,
    width: 3.7,
    depth: 3.7,
    height: 0.14,
    description: 'Zero-downtime CI/CD deployment, edge caching & containerized microservices',
    dataType: 'Distributed Packets & Edge Caches',
  },
];

interface LayerMeshProps {
  layer: LayerData;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const ArchitectureLayerMesh: React.FC<LayerMeshProps> = ({ layer, isHovered, onHover }) => {
  const colorObj = useMemo(() => new THREE.Color(layer.color), [layer.color]);

  return (
    <group position={[0, layer.y, 0]}>
      {/* Primary Semi-Transparent Slab */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(layer.id);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
        }}
      >
        <boxGeometry args={[layer.width, layer.height, layer.depth]} />
        <meshStandardMaterial
          color={colorObj}
          transparent
          opacity={isHovered ? 0.75 : 0.22}
          roughness={0.15}
          metalness={0.85}
          emissive={colorObj}
          emissiveIntensity={isHovered ? 0.8 : 0.18}
        />
      </mesh>

      {/* Wireframe Edge Cage */}
      <mesh>
        <boxGeometry args={[layer.width + 0.02, layer.height + 0.02, layer.depth + 0.02]} />
        <meshBasicMaterial
          color={colorObj}
          wireframe
          transparent
          opacity={isHovered ? 0.95 : 0.35}
        />
      </mesh>

      {/* 4 Corner Tech Node Crystals */}
      {[
        [-layer.width / 2, -layer.depth / 2],
        [layer.width / 2, -layer.depth / 2],
        [layer.width / 2, layer.depth / 2],
        [-layer.width / 2, layer.depth / 2],
      ].map(([cx, cz], i) => (
        <mesh key={i} position={[cx, 0, cz]}>
          <octahedronGeometry args={[0.08, 0]} />
          <meshBasicMaterial
            color={colorObj}
            transparent
            opacity={isHovered ? 1 : 0.75}
          />
        </mesh>
      ))}

      {/* Interactive Floating Tooltip when Hovered */}
      {isHovered && (
        <Html distanceFactor={8} position={[layer.width / 2 + 0.45, 0.2, 0]} center>
          <div className="pointer-events-none whitespace-nowrap rounded-2xl bg-[#05060a]/95 px-4 py-3 border border-[#00E0FF]/60 shadow-[0_0_30px_rgba(0,224,255,0.25)] backdrop-blur-xl animate-fadeIn z-30">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
              <span className="font-mono text-xs font-bold text-white uppercase">{layer.name}</span>
            </div>
            <div className="font-mono text-[11px] text-[#00E0FF] mt-1 font-semibold">{layer.tech}</div>
            <div className="font-sans text-[10px] text-slate-300 mt-1 max-w-[220px] leading-tight">
              {layer.description}
            </div>
            <div className="text-[9px] font-mono text-slate-500 mt-1.5 pt-1.5 border-t border-slate-800">
              DATA FLOW: <span className="text-slate-300">{layer.dataType}</span>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
};

// Specialized 3D Data Flow Particles
const SpecializedDataFlow: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 180;

  const { positions, colors, speeds, types } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const spd = new Float32Array(particleCount);
    const typ = new Uint8Array(particleCount);

    const cCyan = new THREE.Color('#00E0FF');
    const cViolet = new THREE.Color('#7C5CFF');
    const cEmerald = new THREE.Color('#10B981');
    const cGold = new THREE.Color('#F59E0B');

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 2.8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5.8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2.8;

      const pick = Math.random();
      if (pick < 0.35) {
        // Fast User/API pulses
        spd[i] = 1.8 + Math.random() * 1.5;
        col[i * 3] = cCyan.r; col[i * 3 + 1] = cCyan.g; col[i * 3 + 2] = cCyan.b;
        typ[i] = 1;
      } else if (pick < 0.65) {
        // Branching AI/Logic signals
        spd[i] = 1.2 + Math.random() * 0.8;
        col[i * 3] = cViolet.r; col[i * 3 + 1] = cViolet.g; col[i * 3 + 2] = cViolet.b;
        typ[i] = 2;
      } else if (pick < 0.85) {
        // Database persist data
        spd[i] = 0.9 + Math.random() * 0.6;
        col[i * 3] = cEmerald.r; col[i * 3 + 1] = cEmerald.g; col[i * 3 + 2] = cEmerald.b;
        typ[i] = 3;
      } else {
        // Analytics & Cloud data
        spd[i] = 0.7 + Math.random() * 0.5;
        col[i * 3] = cGold.r; col[i * 3 + 1] = cGold.g; col[i * 3 + 2] = cGold.b;
        typ[i] = 4;
      }
    }

    return { positions: pos, colors: col, speeds: spd, types: typ };
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        // Traverse downward through the architecture
        arr[i * 3 + 1] -= delta * speeds[i];

        // Circular spiral jitter for database particles (type 3)
        if (types[i] === 3) {
          arr[i * 3] += Math.sin(arr[i * 3 + 1] * 3) * 0.015;
          arr[i * 3 + 2] += Math.cos(arr[i * 3 + 1] * 3) * 0.015;
        }

        // Cycle back to top when reaching bottom
        if (arr[i * 3 + 1] < -3.2) {
          arr[i * 3 + 1] = 3.2;
          arr[i * 3] = (Math.random() - 0.5) * 2.8;
          arr[i * 3 + 2] = (Math.random() - 0.5) * 2.8;
        }
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Crystalline Central Engineering Nucleus (Master Prompt Section 4)
const EngineeringNucleus: React.FC = () => {
  const nucleusRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (nucleusRef.current) {
      nucleusRef.current.rotation.y -= delta * 0.35;
      nucleusRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={nucleusRef} position={[0, 0, 0]}>
      {/* Central Core Octahedron */}
      <mesh scale={0.55}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#00E0FF"
          wireframe
          transparent
          opacity={0.65}
          emissive="#00E0FF"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Outer Holographic Energy Shell */}
      <mesh scale={0.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#7C5CFF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Orbiting Tech Badges Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.35, 1.38, 48]} />
        <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} transparent opacity={0.35} />
      </mesh>
    </group>
  );
};

const ArchitectureScene: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.16;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.35) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 4 Structural High-Speed Data Conduits linking all layers */}
      {[
        [-1.35, -1.35],
        [1.35, -1.35],
        [1.35, 1.35],
        [-1.35, 1.35],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0, z]}>
          <cylinderGeometry args={[0.02, 0.02, 5.8, 8]} />
          <meshBasicMaterial color="#00E0FF" transparent opacity={0.35} />
        </mesh>
      ))}

      {/* Central High-Capacity Backbone Conduit */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 6.0, 16]} />
        <meshBasicMaterial color="#7C5CFF" transparent opacity={0.55} />
      </mesh>

      {/* Central Engineering Nucleus Core */}
      <EngineeringNucleus />

      {/* Multi-Typed Data Stream Particles */}
      <SpecializedDataFlow />

      {/* 7 Software Architecture Slabs */}
      {ARCHITECTURE_LAYERS.map((layer) => (
        <ArchitectureLayerMesh
          key={layer.id}
          layer={layer}
          isHovered={hoveredLayer === layer.id}
          onHover={setHoveredLayer}
        />
      ))}
    </group>
  );
};

export const HeroArchitectureCanvas: React.FC = () => {
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
    // Beautiful lightweight CSS/SVG architectural fallback
    return (
      <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none flex items-center justify-center opacity-30">
        <div className="w-96 h-96 rounded-full border border-[#00E0FF]/30 bg-gradient-to-tr from-[#7C5CFF]/15 to-[#00E0FF]/15 blur-2xl" />
      </div>
    );
  }

  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-auto">
      <Canvas
        camera={{ position: [5.4, 2.2, 7.0], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={1.6} color="#00E0FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#7C5CFF" />
        <pointLight position={[0, 0, 5]} intensity={0.9} color="#10B981" />

        <Stars radius={60} depth={30} count={2200} factor={3} saturation={0} fade speed={1.2} />

        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <ArchitectureScene />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
