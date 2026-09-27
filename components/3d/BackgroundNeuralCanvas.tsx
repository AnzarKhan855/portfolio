'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LightweightAmbientField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          scrollYRef.current = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lightweight particle field (50 points only for optimal 60 FPS performance)
  const { positions, colors } = useMemo(() => {
    const count = 50;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cViolet = new THREE.Color('#7C5CFF');
    const cCyan = new THREE.Color('#00E0FF');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;

      const mix = Math.random();
      const color = cViolet.clone().lerp(cCyan, mix);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.01 + scrollYRef.current * 0.0002;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.03;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export const BackgroundNeuralCanvas: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleVisibilityChange = () => {
      setIsTabActive(document.visibilityState === 'visible');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  if (reducedMotion || !isTabActive) {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#090c15] via-[#05060a] to-[#05060a]" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#090c18]/30 to-[#05060a] opacity-80 pointer-events-none" />

      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 20], fov: 55 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      >
        <LightweightAmbientField />
      </Canvas>
    </div>
  );
};
