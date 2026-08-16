'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const BrainMesh: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate 3D Neural Nodes Points on geodesic sphere with noise
  const { positions, colors } = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#00F5FF'); // Cyber Cyan
    const color2 = new THREE.Color('#7C3AED'); // Neon Violet
    const color3 = new THREE.Color('#00FFA3'); // Neon Emerald

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.4 + (Math.sin(theta * 5) * Math.cos(phi * 5)) * 0.4;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Interpolate colors
      const mixRatio = Math.random();
      const finalColor = mixRatio < 0.5 ? color1.clone().lerp(color2, mixRatio * 2) : color2.clone().lerp(color3, (mixRatio - 0.5) * 2);
      col[i * 3] = finalColor.r;
      col[i * 3 + 1] = finalColor.g;
      col[i * 3 + 2] = finalColor.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Wireframe Geodesic Icosahedron */}
      <mesh scale={2.6}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#00F5FF"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#7C3AED"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Neural Particles Cluster */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          vertexColors
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Orbiting Holographic Rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[3.2, 3.23, 64]} />
        <meshBasicMaterial color="#00F5FF" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <ringGeometry args={[3.6, 3.62, 64]} />
        <meshBasicMaterial color="#00FFA3" side={THREE.DoubleSide} transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

export const HeroBrainCanvas: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={2.2} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.8} color="#7C5CFF" />
        <pointLight position={[0, 0, 5]} intensity={1.2} color="#00FFA3" />

        <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={1.5} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <BrainMesh />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};
