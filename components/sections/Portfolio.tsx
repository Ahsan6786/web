"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Map old Tailwind gradient class names → galaxy-palette inline gradients
const gradients: Record<string, string> = {
  "from-amber-400 to-orange-500":   "linear-gradient(135deg, #7c3aed, #f97316)",
  "from-rose-400 to-pink-500":      "linear-gradient(135deg, #7c3aed, #db2777)",
  "from-violet-400 to-indigo-500":  "linear-gradient(135deg, #a78bfa, #4f46e5)",
  "from-emerald-400 to-cyan-500":   "linear-gradient(135deg, #2563eb, #0ea5e9)",
  "from-sky-400 to-blue-500":       "linear-gradient(135deg, #2563eb, #7c3aed)",
  "from-fuchsia-400 to-rose-400":   "linear-gradient(135deg, #7c3aed, #f97316)",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section" style={{ background: "var(--bg-surface)", position: "relative" }}>
      {/* Side galaxy glow */}
      <div aria-hidden style={{ position: "absolute", right: "5%", top: "20%", width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.5rem" }}>
        <ScrollReveal>
          <SectionHeading
            label="Our Work"
            title="Projects That"
            titleHighlight="Speak Results"
            subtitle="Every project tells a story of collaboration, craft, and measurable impact."
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {projects.map((project, i) => {
            const gradient = gradients[project.gradient] ?? "linear-gradient(135deg, #7c3aed, #2563eb)";
            return (
              <ScrollReveal key={project.slug} delay={i * 0.07} direction="up">
                <Link href={`/portfolio/${project.slug}`} style={{ display: "block", height: "100%", textDecoration: "none" }}>
                  <motion.div
                    style={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: "20px", overflow: "hidden", background: "var(--bg-card)", border: "1px solid var(--border-subtle)", willChange: "transform" }}
                    whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(124,58,237,0.15)" }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                  >
                    {/* Gradient header */}
                    <div style={{ height: "190px", background: gradient, position: "relative", flexShrink: 0, overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 25% 55%, rgba(255,255,255,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 0%, transparent 45%)" }} />
                      <div style={{ position: "absolute", bottom: "-6px", right: "14px", fontSize: "7rem", fontWeight: 900, color: "rgba(255,255,255,0.08)", lineHeight: 1, userSelect: "none" }}>
                        {project.title[0]}
                      </div>
                      <div style={{ position: "absolute", top: "14px", left: "14px" }}>
                        <span style={{ padding: "0.3rem 0.75rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 600, color: "white", background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}>
                          {project.category}
                        </span>
                      </div>
                      <div style={{ position: "absolute", bottom: "14px", left: "14px" }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.3rem 0.75rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700, color: "white", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>
                          <TrendingUp size={10} /> ↑{project.stats.increase} {project.stats.metric}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding: "1.4rem 1.6rem 1.6rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-primary)", marginBottom: "0.5rem", lineHeight: 1.3 }}>{project.title}</h3>
                      <p style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "1rem" }}>{project.description}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                        {project.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: "0.7rem", padding: "0.25rem 0.65rem", borderRadius: "8px", fontWeight: 600, background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.25)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", fontWeight: 600, color: "#7c3aed" }}>
                        View Case Study <ArrowRight size={13} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.35}>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <a href="/#contact" className="btn btn-primary" style={{ display: "inline-flex" }}>
              Start Your Project <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
