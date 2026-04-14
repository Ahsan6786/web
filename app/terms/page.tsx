"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 , ease: [0.16, 1, 0.3, 1] }
};

export default function TermsPage() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      
      <div style={{ flex: 1, paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 1.5rem" }}>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
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
                transition: "color 0.2s"
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>

          <motion.div {...fadeUp}>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "var(--text-primary)" }}>
              Terms of <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Service</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "3rem" }}>
              Last Updated: April 14, 2026
            </p>
          </motion.div>

          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="glass-panel"
            style={{ 
              padding: "2.5rem", 
              borderRadius: "24px", 
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              fontSize: "1rem"
            }}
          >
            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services provided by Webis ("we," "us," or "our"), 
                including our website and custom development services, you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>2. Scope of Services</h2>
              <p>
                Webis provides digital design, web development, and branding services. 
                Specific project scopes, timelines, and deliverables will be outlined in individual 
                service agreements or proposals provided to each client.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>3. Intellectual Property</h2>
              <p>
                Unless otherwise specified in a project agreement, all final deliverables 
                including code, designs, and content created specifically for the client 
                remain the property of the client upon full payment. Webis retains the right 
                to showcase the work in its portfolio and marketing materials.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>4. Payment Terms</h2>
              <p>
                Project fees, deposit requirements, and payment milestones will be explicitly stated 
                in each client's proposal. Late payments may result in project suspension or 
                additional service charges as outlined in individual agreements.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>5. Limitation of Liability</h2>
              <p>
                Webis shall not be liable for any indirect, incidental, special, or consequential 
                damages resulting from the use or inability to use our services, including but 
                not limited to loss of business profits or data.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of 
                India. Any disputes arising under these terms shall be subject to the 
                exclusive jurisdiction of the courts located in Pune, Maharashtra.
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
