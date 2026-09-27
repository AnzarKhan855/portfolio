'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CentralCoreMesh: React.FC<{ mouseRef: React.RefObject<{ x: number; y: number }> }> = ({ mouseRef }) => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const coreIcosaRef = useRef<THREE.Mesh>(null);
  const particleGroupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();
    const mouse = mouseRef.current || { x: 0, y: 0 };

    if (coreIcosaRef.current) {
      coreIcosaRef.current.rotation.y += delta * 0.2;
      coreIcosaRef.current.rotation.x = Math.sin(elapsed * 0.4) * 0.15;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.12;
      outerRingRef.current.rotation.x = 0.5 + mouse.y * 0.2;
      outerRingRef.current.rotation.y = mouse.x * 0.2;
    }

    if (midRingRef.current) {
      midRingRef.current.rotation.y -= delta * 0.15;
      midRingRef.current.rotation.x = -0.4 - mouse.y * 0.2;
    }

    if (particleGroupRef.current) {
      particleGroupRef.current.rotation.y += delta * 0.05;
    }
  });

  // Generate lightweight orbit particles (32 points only for 60 FPS)
  const particles = React.useMemo(() => {
    const count = 32;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 4.2 + (Math.random() - 0.5) * 1.5;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.2;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  return (
    <group position={[0, 0, -4]}>
      {/* Central Pulsing Geometric Core */}
      <mesh ref={coreIcosaRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#00E0FF"
          emissive="#7C5CFF"
          emissiveIntensity={0.8}
          wireframe
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Solid Shimmer Sphere */}
      <mesh>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.15} />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={outerRingRef} rotation={[0.5, 0, 0]}>
        <ringGeometry args={[3.2, 3.24, 64]} />
        <meshBasicMaterial color="#00FFA3" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh ref={midRingRef} rotation={[-0.4, 0, 0.3]}>
        <ringGeometry args={[4.0, 4.03, 64]} />
        <meshBasicMaterial color="#00E0FF" transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Subtle Data Particles */}
      <points ref={particleGroupRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#00E0FF"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export const HeroCoreCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Pause rendering when Hero is offscreen for optimal 60 FPS performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {isVisible && (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#00E0FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7C5CFF" />
          <CentralCoreMesh mouseRef={mouseRef} />
        </Canvas>
      )}
    </div>
  );
};
