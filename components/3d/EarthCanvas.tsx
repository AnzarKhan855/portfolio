'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const EarthGlobe: React.FC = () => {
  const globeRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Outer Wireframe Grid */}
      <mesh scale={2}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#00F5FF" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh scale={1.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.2} />
      </mesh>

      {/* Location Marker Pin (India / Global) */}
      <mesh position={[0.7, 0.8, 1.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#00FFA3" />
      </mesh>
    </group>
  );
};

export const EarthCanvas: React.FC = () => {
  return (
    <div className="w-full h-[380px] relative rounded-2xl overflow-hidden glass-panel border border-cyan-500/20">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F5FF" />
        <Stars radius={50} depth={20} count={1000} factor={3} fade />
        <EarthGlobe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      <div className="absolute bottom-3 left-4 text-[11px] font-mono text-cyan-300 flex items-center space-x-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>HQ LOCATION: KANPUR / REMOTE, INDIA</span>
      </div>
    </div>
  );
};
