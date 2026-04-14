"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PrivacyPage() {
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
              Privacy <span style={{ background: "var(--gradient-brand)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Policy</span>
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
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>1. Data Collection</h2>
              <p>
                We collect information that you provide directly to us through our contact forms, 
                emails, and project discovery sessions. This may include your name, email address, 
                phone number, and business details necessary for project execution.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>2. Use of Information</h2>
              <p>
                Your information is used solely to respond to your inquiries, provide requested 
                services, process payments, and improve our service offerings. We do not sell or 
                distribute your personal data to third parties for marketing purposes.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>3. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information. 
                While no method of electronic transmission is 100% secure, we use robust encryption 
                and secure hosting environments to safeguard your data.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>4. Cookies and Tracking</h2>
              <p>
                Our website may use essential cookies to enhance user experience and analyze 
                traffic patterns through tools like Google Analytics. These tools collect 
                anonymized data that helps us understand how visitors interact with our site.
              </p>
            </section>

            <section style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>5. Your Rights</h2>
              <p>
                You have the right to request access to the personal data we hold about you, 
                to request corrections, or to ask for your data to be deleted from our systems. 
                Please contact us at mitraai0001@gmail.com for any privacy-related requests.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--text-primary)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>6. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy or our treatment of 
                your data, please contact our privacy officer at mitraai0001@gmail.com.
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
