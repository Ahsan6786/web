"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function BlogComingSoon() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Navbar />
      
      {/* Background Ambient Glows */}
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "35vw", height: "35vw", background: "radial-gradient(circle, rgba(232, 121, 249, 0.08) 0%, transparent 70%)", filter: "blur(80px)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, padding: "8rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ marginBottom: "2rem" }}
          >
            <Link 
              href="/" 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "0.5rem", 
                color: "var(--text-secondary)", 
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "0.6rem 1.2rem",
                borderRadius: "100px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.06)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.03)"; }}
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div {...fadeUp} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "inline-flex", padding: "1rem", borderRadius: "24px", background: "var(--gradient-brand)", marginBottom: "2rem", boxShadow: "0 0 40px rgba(124, 58, 237, 0.3)" }}>
              <BookOpen size={32} color="white" />
            </div>
            <h1 style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "1.5rem", color: "var(--text-primary)" }}>
              Insights <br /> <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Coming Soon</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.25rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
              We&apos;re crafting deep-dives into design, code, and digital strategy. Stay tuned for the future of Webis.
            </p>
          </motion.div>

          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "1.5rem",
              marginTop: "4rem"
            }}
          >
            {[
              { icon: Clock, title: "Next Month", desc: "First release" },
              { icon: Sparkles, title: "Premium Content", desc: "No fluff, just value" }
            ].map((item, i) => (
              <div 
                key={i}
                className="glass-panel"
                style={{ 
                  padding: "2rem", 
                  borderRadius: "24px", 
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  textAlign: "center"
                }}
              >
                <div style={{ color: "var(--brand-primary)", marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                   <item.icon size={24} />
                </div>
                <h3 style={{ color: "var(--text-primary)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
