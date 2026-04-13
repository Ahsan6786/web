"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Shield, Globe, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";
import { whyWebis } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = { Zap, Palette, Shield, Globe, MessageCircle, TrendingUp };

const palette = [
  { bg: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.25)",  color: "#a78bfa" },
  { bg: "rgba(37,99,235,0.1)",   border: "rgba(37,99,235,0.25)",   color: "#60a5fa" },
  { bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.25)",  color: "#fb923c" },
  { bg: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.25)",  color: "#a78bfa" },
  { bg: "rgba(37,99,235,0.1)",   border: "rgba(37,99,235,0.25)",   color: "#60a5fa" },
  { bg: "rgba(249,115,22,0.1)",  border: "rgba(249,115,22,0.25)",  color: "#fb923c" },
];

export default function WhyWebis() {
  return (
    <section id="why" className="section" style={{ background: "var(--bg-surface)", position: "relative" }}>
      {/* Decorative orbit rings */}
      <div aria-hidden style={{ position: "absolute", right: "-180px", top: "50%", transform: "translateY(-50%)", width: "560px", height: "560px", borderRadius: "50%", border: "1px solid rgba(124,58,237,0.08)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", right: "-80px", top: "50%", transform: "translateY(-50%)", width: "360px", height: "360px", borderRadius: "50%", border: "1px solid rgba(124,58,237,0.14)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gap: "4rem" }} className="lg:grid-cols-[1fr_1.1fr]">
          {/* Left */}
          <ScrollReveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", maxWidth: "440px" }}>
              <SectionHeading label="Why Webis" title="Your Success is" titleHighlight="Our Metric" subtitle="We're not just a vendor. We're your digital growth partner — obsessed with results, not just deliverables." align="left" />

              {[
                { label: "2-hour", sub: "average reply time" },
                { label: "95+", sub: "PageSpeed score on every site" },
                { label: "100%", sub: "satisfaction or we fix it free" },
              ].map((kpi) => (
                <div key={kpi.label} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", borderRadius: "14px", background: "var(--bg-card)", border: "1px solid var(--border-subtle)" }}>
                  <span style={{ fontWeight: 800, fontSize: "1.35rem", background: "linear-gradient(135deg, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", whiteSpace: "nowrap" }}>
                    {kpi.label}
                  </span>
                  <span style={{ fontSize: "0.83rem", color: "var(--text-secondary)" }}>{kpi.sub}</span>
                </div>
              ))}

              <motion.a href="/#contact" className="btn btn-primary" style={{ width: "fit-content" }} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                Let&apos;s Build Something <ArrowRight size={15} />
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Right Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1rem", alignContent: "start" }}>
            {whyWebis.map((item, i) => {
              const Icon = iconMap[item.icon];
              const c = palette[i % palette.length];
              return (
                <ScrollReveal key={item.title} delay={i * 0.07} direction="up">
                  <motion.div
                    className="card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", willChange: "transform", background: "var(--bg-card)" }}
                  >
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: c.bg, border: `1px solid ${c.border}`, color: c.color, flexShrink: 0 }}>
                      <Icon size={17} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)", margin: 0 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
