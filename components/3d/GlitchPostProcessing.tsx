'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GlitchShader = {
  uniforms: {
    tDiffuse: { value: null },
    time: { value: 0 },
    amount: { value: 0.08 },
    distortion: { value: 0.25 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform float amount;
    uniform float distortion;
    varying vec2 vUv;

    float rand(vec2 co) {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 p = vUv;
      float noise = rand(vec2(time * 0.1, p.y)) * amount;
      
      // RGB Split displacement
      float r = texture2D(tDiffuse, vec2(p.x + noise, p.y)).r;
      float g = texture2D(tDiffuse, p).g;
      float b = texture2D(tDiffuse, vec2(p.x - noise, p.y)).b;
      
      gl_FragColor = vec4(r, g, b, 0.2);
    }
  `,
};

export const GlitchPostProcessingOverlay: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = Math.abs(currentScroll - lastScroll);

      // Trigger subtle glitch wipe effect on extremely fast section jumps
      if (diff > 250) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 250);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isGlitching) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 bg-cyan-500/5 backdrop-blur-[1px] animate-glitch border-y border-[#00E0FF]/40" />
  );
};
