"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LiquidBlobProps {
  colorFrom?: string;
  colorTo?: string;
  size?: number;
  opacity?: number;
  className?: string;
  speed?: number;
}

// GPU-friendly blob: uses border-radius morphing instead of SVG path (much smoother)
export default function LiquidBlob({
  colorFrom = "#5b9eff",
  colorTo = "#9d6ef8",
  size = 600,
  opacity = 0.25,
  className = "",
  speed = 1,
}: LiquidBlobProps) {
  const morphKeyframes = [
    "60% 40% 30% 70% / 60% 30% 70% 40%",
    "30% 60% 70% 40% / 50% 60% 30% 60%",
    "50% 60% 30% 60% / 30% 60% 40% 70%",
    "40% 60% 60% 40% / 60% 30% 70% 40%",
    "60% 40% 30% 70% / 60% 30% 70% 40%",
  ];

  return (
    <motion.div
      className={className}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
        opacity,
        willChange: "transform, border-radius",
        pointerEvents: "none",
        userSelect: "none",
      }}
      animate={{
        borderRadius: morphKeyframes,
        y: [0, -22, 8, -14, 0],
        rotate: [0, 4, -3, 2, 0],
      }}
      transition={{
        duration: 10 / speed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Light cursor orb — follows mouse, pure CSS radial gradient div
export function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    let cx = 0, cy = 0;

    const tick = () => {
      cx = lerp(cx, pos.current.x, 0.07);
      cy = lerp(cy, pos.current.y, 0.07);
      if (ref.current) {
        ref.current.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, var(--brand-glow-b) 0%, transparent 65%)",
        pointerEvents: "none",
        zIndex: 0,
        willChange: "transform",
      }}
    />
  );
}
