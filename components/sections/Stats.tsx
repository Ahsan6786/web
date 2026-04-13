"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  LineElement, PointElement, LinearScale, CategoryScale, Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { stats } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, Filler);

function CountUp({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    let frame = 0, steps = Math.round(duration / 16);
    const timer = setInterval(() => {
      frame++;
      const p = frame / steps, eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (frame >= steps) { setCount(target); clearInterval(timer); }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span
      ref={ref}
      style={{
        fontWeight: 900,
        fontSize: "clamp(2.4rem, 6vw, 3.6rem)",
        lineHeight: 1,
        background: "linear-gradient(135deg, #a78bfa, #60a5fa, #fb923c)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const chartsRef = useRef(null);
  const chartsInView = useInView(chartsRef, { once: true, margin: "-80px" });

  const donutData = {
    labels: ["Satisfied", "Other"],
    datasets: [{
      data: [98, 2],
      backgroundColor: ["#7c3aed", "rgba(255,255,255,0.05)"],
      borderWidth: 0, hoverOffset: 4,
    }],
  };

  const lineData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Projects",
        data: [2,4,5,7,8,10,13,16,20,28,38,50],
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124,58,237,0.08)",
        tension: 0.45, fill: true,
        pointBackgroundColor: "#7c3aed", pointRadius: 3, pointHoverRadius: 6, borderWidth: 2,
      },
      {
        label: "Satisfaction %",
        data: [88,90,91,93,94,94,96,96,97,97,98,98],
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.06)",
        tension: 0.45, fill: true,
        pointBackgroundColor: "#f97316", pointRadius: 3, pointHoverRadius: 6, borderWidth: 2,
      },
    ],
  };

  const lineOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "rgba(136,136,187,0.9)", font: { size: 11 }, boxWidth: 10, padding: 16 } },
      tooltip: { backgroundColor: "rgba(8,8,26,0.97)", borderColor: "rgba(124,58,237,0.3)", borderWidth: 1, titleColor: "#f0f0ff", bodyColor: "rgba(136,136,187,0.9)", padding: 12, cornerRadius: 10 },
    },
    scales: {
      x: { grid: { color: "rgba(124,58,237,0.08)" }, ticks: { color: "rgba(136,136,187,0.6)", font: { size: 10 } } },
      y: { grid: { color: "rgba(124,58,237,0.08)" }, ticks: { color: "rgba(136,136,187,0.6)", font: { size: 10 } } },
    },
  };

  const quickStats = [
    { value: "50+",    label: "Projects Delivered" },
    { value: "98%",    label: "Client Satisfaction" },
    { value: "₹2,999", label: "Starting Price" },
    { value: "24/7",   label: "Support" },
  ];

  return (
    <section id="stats" className="section" style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}>
      {/* Galaxy glow accent */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "900px", height: "380px", background: "radial-gradient(ellipse, rgba(160,40,200,0.08) 0%, rgba(120,30,160,0.04) 60%, transparent 100%)", pointerEvents: "none" }} />

      {/* ── Quick-stats ribbon (moved from Hero) ── */}
      <div style={{ maxWidth: "900px", margin: "0 auto 4rem", padding: "0 1.5rem" }}>
        <ScrollReveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0",
              background: "rgba(160,40,200,0.07)",
              border: "1px solid rgba(200,60,220,0.18)",
              borderRadius: "20px",
              backdropFilter: "blur(14px)",
              overflow: "hidden",
            }}
          >
            {quickStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: "1 1 140px",
                  padding: "1.6rem 1.25rem",
                  textAlign: "center",
                  borderRight: i < quickStats.length - 1 ? "1px solid rgba(200,60,220,0.12)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(1.5rem, 4vw, 2.1rem)",
                    lineHeight: 1,
                    background: "linear-gradient(135deg, #e879f9, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </span>
                <span style={{ fontSize: "0.72rem", color: "rgba(200,180,255,0.65)", fontWeight: 500, letterSpacing: "0.04em" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <SectionHeading
            label="By the Numbers"
            title="Results That"
            titleHighlight="Matter"
            subtitle="Every metric here represents a real client who trusted us with their digital presence."
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        {/* Counters */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
              <div
                className="card"
                style={{ padding: "2rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.4rem", background: "var(--bg-card)" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} duration={1800 + i * 200} />
                <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "var(--text-primary)", marginTop: "0.25rem" }}>{stat.label}</div>
                <div style={{ fontSize: "0.74rem", color: "var(--text-muted)" }}>{stat.description}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Charts */}
        <div
          ref={chartsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {/* Doughnut */}
          <ScrollReveal direction="left">
            <div className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", background: "var(--bg-card)" }}>
              <h3 style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0, alignSelf: "flex-start" }}>Client Satisfaction</h3>
              <div style={{ position: "relative", width: "170px", height: "170px" }}>
                {chartsInView && <Doughnut data={donutData} options={{ responsive: false, cutout: "80%", plugins: { legend: { display: false }, tooltip: { enabled: false } }, animation: { animateRotate: true, duration: 1400 } }} width={170} height={170} />}
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <span style={{ fontWeight: 900, fontSize: "2rem", background: "linear-gradient(135deg, #a78bfa, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>98%</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>satisfied</span>
                </div>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)", textAlign: "center", margin: 0 }}>Based on post-project surveys across all clients</p>
            </div>
          </ScrollReveal>

          {/* Line */}
          <ScrollReveal direction="right">
            <div className="card" style={{ padding: "2rem", height: "100%", background: "var(--bg-card)" }}>
              <h3 style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text-secondary)", margin: "0 0 1.5rem 0" }}>Growth Over 12 Months</h3>
              <div style={{ height: "220px", position: "relative" }}>
                {chartsInView && <Line data={lineData} options={lineOptions} />}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
