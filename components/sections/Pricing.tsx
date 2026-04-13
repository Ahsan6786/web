"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, X, ArrowRight, Sparkles, Zap } from "lucide-react";
import { pricingTiers } from "@/lib/data";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Pricing() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="pricing" data-theme="dark" className="section" style={{ background: "var(--bg-surface)", position: "relative", overflow: "hidden" }}>
      {/* Galaxy ambient */}
      <div aria-hidden style={{ position: "absolute", top: "-80px", right: "10%", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div aria-hidden style={{ position: "absolute", bottom: "-60px", left: "12%", width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        <ScrollReveal>
          <SectionHeading
            label="Pricing"
            title="Transparent Pricing."
            titleHighlight="No Surprises."
            subtitle="Every plan delivers premium value. Starting at ₹2,999 — because great web design shouldn't be a luxury."
            align="center"
            className="mb-16"
          />
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 0.1} direction="up">
              <motion.div
                onHoverStart={() => setHovered(tier.id)}
                onHoverEnd={() => setHovered(null)}
                animate={{
                  y: hovered === tier.id ? -8 : 0,
                  boxShadow: hovered === tier.id
                    ? tier.popular
                      ? "0 24px 64px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.3)"
                      : "0 24px 56px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.12)"
                    : tier.popular
                      ? "0 8px 40px rgba(124,58,237,0.2), 0 0 0 1px rgba(124,58,237,0.35)"
                      : "none",
                }}
                transition={{ duration: 0.28, ease: "easeOut" as const }}
                style={{
                  height: "100%", display: "flex", flexDirection: "column",
                  borderRadius: "24px", overflow: "hidden",
                  background: "var(--bg-card)",
                  border: tier.popular ? "1px solid rgba(124,58,237,0.4)" : "1px solid var(--border-subtle)",
                  willChange: "transform",
                }}
              >
                {/* Popular ribbon */}
                {tier.popular && (
                  <div style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb 60%, #f97316)", padding: "0.6rem 1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", fontSize: "0.72rem", fontWeight: 700, color: "white", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    <Sparkles size={11} /> Most Popular <Sparkles size={11} />
                  </div>
                )}

                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  {/* Name */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1.15rem", color: "var(--text-primary)", margin: "0 0 0.4rem" }}>{tier.name}</h3>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{tier.description}</p>
                  </div>

                  {/* Price */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <span
                      style={{
                        fontWeight: 900,
                        fontSize: tier.price === "Custom" ? "2.4rem" : "2.8rem",
                        background: tier.popular ? "var(--gradient-text)" : "none",
                        WebkitBackgroundClip: tier.popular ? "text" : "unset",
                        WebkitTextFillColor: tier.popular ? "transparent" : "var(--text-primary)",
                        backgroundClip: tier.popular ? "text" : "unset",
                        color: tier.popular ? "transparent" : "var(--text-primary)",
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      {tier.price}
                    </span>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.35rem", fontWeight: 500 }}>{tier.period}</p>
                  </div>

                  <div style={{ height: "1px", background: "var(--border-subtle)", marginBottom: "1.5rem" }} />

                  {/* Features */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1, listStyle: "none", padding: 0, margin: "0 0 1.75rem 0" }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.84rem" }}>
                        <span style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", background: "var(--brand-glow-p)" }}>
                          <Check size={10} color="var(--brand-purple)" />
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>{f}</span>
                      </li>
                    ))}
                    {tier.notIncluded.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.84rem", opacity: 0.4 }}>
                        <span style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px", background: "var(--border-subtle)" }}>
                          <X size={10} color="var(--text-muted)" />
                        </span>
                        <span style={{ color: "var(--text-muted)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="/#contact"
                    className={tier.popular ? "btn btn-primary" : "btn btn-secondary"}
                    style={{ justifyContent: "center", width: "100%", gap: "0.5rem" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {tier.id === "enterprise" && <Zap size={14} />}
                    {tier.cta} {tier.id !== "enterprise" && <ArrowRight size={14} />}
                  </motion.a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2rem" }}>
            All prices are one-time unless noted.{" "}
            <a href="/#contact" style={{ color: "var(--brand-purple)", textDecoration: "none" }}>Need something custom?</a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
