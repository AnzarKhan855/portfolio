'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Layer Colors for Section Atmosphere Tinting
const SECTION_COLORS = {
  default: new THREE.Color('#00E0FF'),
  decisionlens: new THREE.Color('#00E0FF'),
  campusagent: new THREE.Color('#00FFA3'),
  evalmentor: new THREE.Color('#7C5CFF'),
  resumebuilder: new THREE.Color('#F8FAFC'),
};

interface EnvironmentProps {
  mouseRef: React.RefObject<{ x: number; y: number }>;
}

const ContinuousAIEnvironment: React.FC<EnvironmentProps> = ({ mouseRef }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const motifRef = useRef<THREE.Group>(null);
  const lightRef1 = useRef<THREE.PointLight>(null);
  const lightRef2 = useRef<THREE.PointLight>(null);

  const scrollYRef = useRef(0);
  const targetColorRef = useRef(SECTION_COLORS.default);
  const currentColorRef = useRef(SECTION_COLORS.default.clone());

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollYRef.current = scrollY;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      if (progress < 0.2) {
        targetColorRef.current = SECTION_COLORS.default;
      } else if (progress < 0.45) {
        targetColorRef.current = SECTION_COLORS.decisionlens;
      } else if (progress < 0.65) {
        targetColorRef.current = SECTION_COLORS.campusagent;
      } else if (progress < 0.85) {
        targetColorRef.current = SECTION_COLORS.evalmentor;
      } else {
        targetColorRef.current = SECTION_COLORS.resumebuilder;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Layer 1 & 2 Geometry & Colors Generator (Optimized Particle Counts for 60 FPS)
  const { nodePositions, nodeColors, linePositions, particlePositions } = useMemo(() => {
    const count = 110; // 38% reduction in nodes
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cViolet = new THREE.Color('#7C5CFF');
    const cCyan = new THREE.Color('#00E0FF');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mix = Math.random();
      const color = cViolet.clone().lerp(cCyan, mix);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    const linesList: number[] = [];
    const maxDist = 7.5;
    for (let i = 0; i < count; i++) {
      const p1 = new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      for (let j = i + 1; j < count; j++) {
        const p2 = new THREE.Vector3(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        if (p1.distanceTo(p2) < maxDist) {
          linesList.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
        }
      }
    }

    const pCount = 90; // 40% reduction in floating particles
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 70;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 70;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    return {
      nodePositions: pos,
      nodeColors: col,
      linePositions: new Float32Array(linesList),
      particlePositions: pPos,
    };
  }, []);

  useFrame((state, delta) => {
    const totalHeight = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1;
    const scrollProgress = totalHeight > 0 ? Math.max(0, Math.min(1, scrollYRef.current / totalHeight)) : 0;

    currentColorRef.current.lerp(targetColorRef.current, delta * 2.0);

    if (lightRef1.current) {
      lightRef1.current.color.copy(currentColorRef.current);
    }
    if (lightRef2.current) {
      lightRef2.current.color.copy(currentColorRef.current);
    }

    const mouse = mouseRef.current || { x: 0, y: 0 };
    const targetCameraZ = 20 - scrollProgress * 8;
    const targetCameraY = -scrollProgress * 8 + mouse.y * 0.8;
    const targetCameraX = mouse.x * 1.2;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetCameraZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetCameraY, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetCameraX, 0.05);

    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.012 + scrollProgress * 0.3;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.04;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.012 + scrollProgress * 0.3;
      linesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.04;
    }

    if (motifRef.current) {
      motifRef.current.rotation.y += delta * 0.03;
      motifRef.current.rotation.z += delta * 0.015;
      const motifScale = 2.2 + Math.sin(scrollProgress * Math.PI) * 0.4;
      motifRef.current.scale.set(motifScale, motifScale, motifScale);
    }
  });

  return (
    <group>
      <ambientLight intensity={0.25} />
      <pointLight ref={lightRef1} position={[15, 20, 10]} intensity={0.4} distance={60} />
      <pointLight ref={lightRef2} position={[-15, -20, -10]} intensity={0.3} distance={60} />

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.09}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7C5CFF"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#00E0FF"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <group ref={motifRef} position={[0, 0, -18]}>
        <mesh>
          <icosahedronGeometry args={[2.5, 2]} />
          <meshBasicMaterial
            color="#7C5CFF"
            wireframe
            transparent
            opacity={0.05}
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[3.8, 3.82, 64]} />
          <meshBasicMaterial color="#00E0FF" side={THREE.DoubleSide} transparent opacity={0.04} />
        </mesh>
      </group>
    </group>
  );
};

export const BackgroundNeuralCanvas: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#090c15] via-[#05060a] to-[#05060a]" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#090c18]/40 to-[#05060a] opacity-80 pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 20], fov: 55 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <ContinuousAIEnvironment mouseRef={mouseRef} />
      </Canvas>
    </div>
  );
};
