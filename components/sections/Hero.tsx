"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const GalaxyCanvas = dynamic(() => import("@/components/animations/GalaxyCanvas"), { ssr: false });

/* ── Ultra Smooth Fast Typewriter hook ── */
function useTypewriter(lines: string[], cps = 120, pauseMs = 1200) {
  const [displayLines, setDisplayLines] = useState<string[]>(lines.map(() => ""));
  
  useEffect(() => {
    let rafId: number;
    let lastTime = performance.now();
    let currentLine = 0;
    let currentChar = 0;
    let pauseUntil = 0;
    
    const msPerChar = 1000 / cps;

    const tick = (now: number) => {
      if (now < pauseUntil) {
        lastTime = now;
        rafId = requestAnimationFrame(tick);
        return;
      }
      
      const target = lines[currentLine];
      let delta = now - lastTime;
      
      if (delta >= msPerChar) {
        const charsToAdd = Math.floor(delta / msPerChar);
        currentChar += charsToAdd;
        // Don't accumulate too much lag
        lastTime += charsToAdd * msPerChar;
        
        if (currentChar > target.length) {
          currentChar = target.length;
        }
        
        setDisplayLines(prev => {
          const next = [...prev];
          next[currentLine] = target.slice(0, currentChar);
          return next;
        });
        
        if (currentChar >= target.length) {
          if (currentLine < lines.length - 1) {
            currentLine++;
            currentChar = 0;
            pauseUntil = now + pauseMs;
          } else {
            return; // Finished all lines
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [lines, cps, pauseMs]);

  return displayLines;
}

/* ── Blinking cursor ── */
function Cursor() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      style={{
        display: "inline-block",
        width: "3px",
        height: "0.85em",
        background: "linear-gradient(180deg, #e879f9, #a78bfa)",
        borderRadius: "2px",
        verticalAlign: "middle",
        marginLeft: "4px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.08s",
      }}
    />
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

// Lines of text to type — plain strings, styling applied separately
const TYPED_LINES = [
  "We Don't Build Websites.",
  "We Build Experiences.",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  const typed = useTypewriter(TYPED_LINES, 30, 1200);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove, { passive: true });

    let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const tick = () => {
      cx += (pos.current.x - cx) * 0.035;
      cy += (pos.current.y - cy) * 0.035;
      if (contentRef.current) {
        const dx = (cx - window.innerWidth / 2) / window.innerWidth * 10;
        const dy = (cy - window.innerHeight / 2) / window.innerHeight * 8;
        contentRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Determine if we're still typing on the last line
  const allDone = typed[TYPED_LINES.length - 1] === TYPED_LINES[TYPED_LINES.length - 1];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        minBlockSize: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0b0614",
        backgroundImage: "radial-gradient(ellipse 110% 70% at 20% 10%, rgba(160, 40, 200, 0.20) 0%, transparent 55%), radial-gradient(ellipse 90% 60% at 80% 8%, rgba(200, 40, 140, 0.16) 0%, transparent 50%), linear-gradient(155deg, #0e0619 0%, #100520 45%, #0c0418 75%, #080316 100%)",
      }}
    >
      {/* ── Galaxy Canvas ── */}
      {mounted && <GalaxyCanvas />}

      {/* ── Vignette ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 65% at 50% 50%, transparent 30%, rgba(11,6,20,0.97) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Bottom fade ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(transparent, #0b0614)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── Foreground content ── */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "820px",
          width: "100%",
          padding: "0 1.5rem",
          textAlign: "center",
          willChange: "transform",
          paddingTop: "5rem",
          paddingBottom: "2rem",
        }}
      >
        {/* Typewriter Headline */}
        <motion.div {...fadeUp(0)}>
          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.6rem, 8.5vw, 5.8rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "2.75rem",
              minHeight: "2.6em",      // reserve space so layout doesn't jump
            }}
          >
            {/* Line 1 */}
            <span style={{ display: "block", color: "#f0eaff" }}>
              {typed[0]}
              {/* Show cursor on active line */}
              {typed[1] === "" && <Cursor />}
            </span>

            {/* Line 2 — gradient */}
            {typed[1] && (
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #e879f9 0%, #a78bfa 45%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {typed[1]}
                {!allDone && <Cursor />}
              </span>
            )}
          </h1>
        </motion.div>

        {/* CTA — fades in only after typing is done */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: allDone ? 1 : 0, y: allDone ? 0 : 18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}
        >
          <motion.a
            href="/#contact"
            className="btn btn-primary"
            style={{ fontSize: "0.95rem", padding: "0.9rem 2.25rem", gap: "0.6rem" }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Your Website <ArrowRight size={17} />
          </motion.a>
          <motion.a
            href="/#portfolio"
            className="btn btn-secondary"
            style={{ fontSize: "0.95rem", padding: "0.9rem 2rem" }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            View Our Work
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
          zIndex: 10,
        }}
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" as const }}
      >
        <div
          style={{
            width: "22px",
            height: "36px",
            borderRadius: "11px",
            border: "1.5px solid rgba(232,121,249,0.5)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "5px",
          }}
        >
          <motion.div
            style={{ width: "3px", height: "7px", borderRadius: "2px", background: "#e879f9" }}
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7c3aed" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
