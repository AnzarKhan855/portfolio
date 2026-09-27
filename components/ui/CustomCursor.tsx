'use client';

import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only activate custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let hoverText = '';
    let isVisible = false;
    let rafId: number;
    let lastLookupTime = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      // Throttle DOM element lookup to at most once per 60ms to prevent main-thread jank
      const now = performance.now();
      if (now - lastLookupTime > 60) {
        lastLookupTime = now;
        const target = e.target as HTMLElement | null;
        const interactiveEl = target?.closest('a, button, [data-cursor], [role="button"]') as HTMLElement | null;

        if (interactiveEl) {
          isHovering = true;
          hoverText = interactiveEl.getAttribute('data-cursor') || '';
        } else {
          isHovering = false;
          hoverText = '';
        }
      }
    };

    const onMouseDown = () => {
      isClicking = true;
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    // 60 FPS animation loop with lerping for fluid inertia
    const render = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 1.5 : isHovering ? 0.5 : 1
        })`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${
          isClicking ? 0.75 : isHovering ? 2.4 : 1
        })`;
        ringRef.current.style.borderColor = isHovering ? 'rgba(0, 224, 255, 0.9)' : 'rgba(0, 224, 255, 0.4)';
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(0, 224, 255, 0.15)' : 'transparent';
      }

      if (labelRef.current) {
        if (hoverText) {
          labelRef.current.textContent = hoverText;
          labelRef.current.style.opacity = '1';
        } else {
          labelRef.current.style.opacity = '0';
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Outer Magnetic Ring */}
      <div
        ref={ringRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="w-8 h-8 rounded-full border border-cyan-400/50 backdrop-blur-[2px] transition-colors duration-150 flex items-center justify-center pointer-events-none fixed top-0 left-0"
      >
        <span
          ref={labelRef}
          className="text-[7px] font-mono text-cyan-200 font-bold uppercase tracking-wider transition-opacity duration-150 pointer-events-none"
        />
      </div>

      {/* Inner Glowing Cursor Dot */}
      <div
        ref={cursorRef}
        style={{ opacity: 0, willChange: 'transform' }}
        className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(0,224,255,0.9)] pointer-events-none fixed top-0 left-0"
      />
    </div>
  );
};
