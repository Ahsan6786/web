"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const gradients: Record<string, string> = {
  "from-amber-400 to-orange-500": "var(--gradient-cta)",
  "from-rose-400 to-pink-500": "var(--gradient-brand)",
  "from-violet-400 to-indigo-500": "var(--gradient-text)",
  "from-emerald-400 to-cyan-500": "var(--gradient-cta)",
  "from-sky-400 to-blue-500": "var(--gradient-brand)",
  "from-fuchsia-400 to-rose-400": "var(--gradient-text)",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section"
      style={{
        background: "var(--bg-surface)", // DARK BG
        position: "relative",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          right: "5%",
          top: "20%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse, var(--glow-blue) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

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

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {projects.map((project, i) => {
            const gradient =
              gradients[project.gradient] ?? "var(--gradient-brand)";

            return (
              <ScrollReveal key={project.slug} delay={i * 0.07} direction="up">
                <Link
                  href={`/portfolio/${project.slug}`}
                  style={{ display: "block", height: "100%" }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "20px",
                      overflow: "hidden",

                      // ✅ LIGHT CARD
                      background: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",

                      // premium shadow
                      boxShadow: "0 8px 28px rgba(0,0,0,0.06)",

                      willChange: "transform, box-shadow",
                    }}
                    whileHover={{
                      y: -6,
                      boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* TOP GRADIENT */}
                    <div
                      style={{
                        height: "190px",
                        background: gradient,
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Background Art */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage:
                            "radial-gradient(circle at 25% 55%, rgba(255,255,255,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.15) 0%, transparent 45%)",
                          zIndex: 1,
                        }}
                      />

                      {/* Explicit Custom Thumbnail Cover Support */}
                      {project.image ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: 0.95,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-6px",
                            right: "14px",
                            fontSize: "7rem",
                            fontWeight: 900,
                            color: "rgba(255,255,255,0.08)",
                          }}
                        >
                          {project.title[0]}
                        </div>
                      )}

                      <div style={{ position: "absolute", top: 14, left: 14 }}>
                        <span
                          style={{
                            padding: "0.3rem 0.75rem",
                            borderRadius: "100px",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            color: "white",
                            background: "rgba(0,0,0,0.35)",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div style={{ position: "absolute", bottom: 14, left: 14 }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.3rem 0.75rem",
                            borderRadius: "100px",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: "white",
                            background: "rgba(0,0,0,0.4)",
                          }}
                        >
                          <TrendingUp size={10} /> ↑{project.stats.increase}{" "}
                          {project.stats.metric}
                        </span>
                      </div>
                    </div>

                    {/* BODY */}
                    <div
                      style={{
                        padding: "1.4rem 1.6rem 1.6rem",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <h3
                        style={{
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#111", // dark text
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.83rem",
                          color: "#555", // readable gray
                          flex: 1,
                          marginBottom: "1rem",
                        }}
                      >
                        {project.description}
                      </p>

                      <div style={{ paddingBottom: "1.25rem" }} />

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "#7c3aed",
                        }}
                      >
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
            <a href="/#contact" className="btn btn-primary">
              Start Your Project <ArrowRight size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}