"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  tint: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  opacity: number;
  active: boolean;
  angle: number;
  progress: number;
}

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let stars: Star[] = [];
    const MAX_SHOOTERS = 3;
    const shooters: ShootingStar[] = [];
    const shootingTimers: ReturnType<typeof setTimeout>[] = [];
    let t = 0;
    let lastDtTime = performance.now();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const isMobile = window.innerWidth < 768;
      // Adaptive count: Halved on mobile for "fast like hell" performance
      const baseDensity = isMobile ? 12000 : 8000;
      const count = Math.min(isMobile ? 80 : 150, Math.floor((canvas.width * canvas.height) / baseDensity));
      
      stars = Array.from({ length: count }, () => {
        const tintRoll = Math.random();
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() > 0.85 ? 2 : 1,
          baseOpacity: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.04 + 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          tint: tintRoll < 0.55 ? 0 : tintRoll < 0.80 ? 1 : 2,
        };
      });
    };

    const rTint = (tint: number) => {
      if (tint === 1) return [210, 160, 255];
      if (tint === 2) return [255, 160, 200];
      return [245, 230, 255];
    };

    const spawnShootingStar = (): ShootingStar => ({
      x: Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
      y: Math.random() * canvas.height * 0.4,
      len: 120 + Math.random() * 180,
      speed: 7 + Math.random() * 6, // Reduced speed for cinematic feel
      opacity: 0,
      active: true,
      angle: 195 + Math.random() * 35,
      progress: 0,
    });

    const scheduleShootingStar = (slot: number) => {
      const delay = 4000 + Math.random() * 6000; // Increased delay for maturity
      shootingTimers[slot] = setTimeout(() => {
        shooters[slot] = spawnShootingStar();
        scheduleShootingStar(slot);
      }, delay);
    };

    /* ── Nebula: deeper, richer pinkish-purple clouds ── */
    const drawNebula = () => {
      const cx = canvas.width * 0.5 + Math.sin(t * 0.0004) * 50;
      const cy = canvas.height * 0.42 + Math.cos(t * 0.0003) * 35;

      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, canvas.width * 0.6);
      g1.addColorStop(0, "rgba(160, 40, 220, 0.15)");
      g1.addColorStop(0.5, "rgba(120, 20, 180, 0.06)");
      g1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g2 = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.65, 0,
        canvas.width * 0.85, canvas.height * 0.65,
        canvas.width * 0.4
      );
      g2.addColorStop(0, "rgba(200, 40, 140, 0.11)");
      g2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const g3 = ctx.createRadialGradient(
        canvas.width * 0.08, canvas.height * 0.75, 0,
        canvas.width * 0.08, canvas.height * 0.75,
        canvas.width * 0.4
      );
      g3.addColorStop(0, "rgba(180, 40, 200, 0.12)");
      g3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    /* ── Stars: Sharp pixel-based drawing (no anti-aliasing blur) ── */
    const drawStars = () => {
      for (const star of stars) {
        const twinkle = (Math.sin(t * star.twinkleSpeed + star.twinklePhase) + 1) / 2;
        const alpha = star.baseOpacity * (0.15 + twinkle * 0.85);

        // Snap to integers to avoid any sub-pixel rendering blur
        const x = Math.round(star.x);
        const y = Math.round(star.y);
        const [r, g, b] = rTint(star.tint);

        if (star.size === 1) {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fillRect(x, y, 1, 1);
        } else {
          // Draw a sharp cross without arc/line anti-aliasing
          const a1 = alpha * 0.8;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a1})`;
          ctx.fillRect(x - 2, y, 5, 1); // horizontal bar
          ctx.fillRect(x, y - 2, 1, 5); // vertical bar

          // Core bright pixel
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    };

    /* ── Shooting stars: smooth movement based on delta time ── */
    const drawShootingStar = (s: ShootingStar, speedMult: number) => {
      if (!s.active) return;

      // Update by high precision speed multiplier 
      s.progress += s.speed * speedMult;
      const totalLen = s.len + canvas.width * 0.35;
      const frac = s.progress / totalLen;

      if (frac < 0.1) s.opacity = frac / 0.1;
      else if (frac > 0.7) s.opacity = 1 - (frac - 0.7) / 0.3;
      else s.opacity = 1;

      if (frac >= 1) { s.active = false; return; }

      const rad = (s.angle * Math.PI) / 180;
      const tailLen = Math.min(s.progress, s.len);
      const ex = s.x + Math.cos(rad) * s.progress;
      const ey = s.y + Math.sin(rad) * s.progress;
      const sx = ex - Math.cos(rad) * tailLen;
      const sy = ey - Math.sin(rad) * tailLen;

      const grad = ctx.createLinearGradient(sx, sy, ex, ey);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(0.6, `rgba(220, 140, 255, ${s.opacity * 0.7})`);
      grad.addColorStop(0.9, `rgba(255, 180, 220, ${s.opacity * 0.9})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

      ctx.beginPath();
      // Keep lineTo for shooting star trails as they naturally look better smooth
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.4;
      ctx.lineCap = "round";
      ctx.stroke();

      const headGlow = ctx.createRadialGradient(ex, ey, 0, ex, ey, 5);
      headGlow.addColorStop(0, `rgba(255, 220, 255, ${s.opacity})`);
      headGlow.addColorStop(1, "rgba(200, 100, 255, 0)");
      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(ex, ey, 5, 0, Math.PI * 2);
      ctx.fill();
    };

    const draw = (now: number) => {
      // Calculate delta time for 144fps / varied frame-rate support
      const dt = (now - lastDtTime) / 1000;
      lastDtTime = now;
      const speedMult = Math.min(dt * 60, 2.5); // 1.0 at 60fps, ~0.41 at 144fps

      t += speedMult;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();
      drawStars();
      for (const s of shooters) drawShootingStar(s, speedMult);

      raf = requestAnimationFrame(draw);
    };

    resize();

    for (let i = 0; i < MAX_SHOOTERS; i++) {
      shooters.push({ x: 0, y: 0, len: 0, speed: 0, opacity: 0, active: false, angle: 0, progress: 0 });
      setTimeout(() => scheduleShootingStar(i), i * 600);
    }

    raf = requestAnimationFrame((now) => {
      lastDtTime = now;
      draw(now);
    });

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      for (const timer of shootingTimers) clearTimeout(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
        // Hint to browser to reduce anti-aliasing interpolation on pixel-snapped shapes
        imageRendering: "pixelated"
      }}
    />
  );
}
