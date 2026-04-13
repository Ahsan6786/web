"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

const navLinks = [
  { label: "Services",  href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Stats",     href: "/#stats" },
  { label: "Pricing",   href: "/#pricing" },
  { label: "Contact",   href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" as const }}
        style={{
          position: "fixed", 
          top: scrolled ? "1rem" : "0", 
          left: 0, 
          right: 0, 
          zIndex: 50,
          margin: "0 auto",
          maxWidth: "1100px",
          width: scrolled ? "calc(100% - 2rem)" : "100%",
          padding: scrolled ? "0.2rem 0" : "0.5rem 0",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          border: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
          borderRadius: scrolled ? "24px" : "0",
          boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" : "none",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} style={{ display: "flex", alignItems: "center", gap: "0.625rem", willChange: "transform" }}>
              <div
                style={{
                  width: "34px", height: "34px", borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: "1rem", color: "white",
                  background: "linear-gradient(135deg, #e879f9, #a78bfa)",
                  boxShadow: "0 4px 16px rgba(232,121,249,0.35)",
                  overflow: "hidden", position: "relative",
                }}
              >
                <span style={{ position: "relative", zIndex: 1, color: "#fff" }}>W</span>
                <motion.div
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.4) 50%, transparent 65%)", transform: "translateX(-100%)" }}
                  animate={{ transform: ["translateX(-100%)", "translateX(200%)"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" as const }}
                />
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.1rem", color: scrolled ? "var(--text-primary)" : "#fff", letterSpacing: "-0.02em" }}>Webis</span>
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1.5" style={{ background: scrolled ? "transparent" : "rgba(255,255,255,0.03)", padding: scrolled ? "0.25rem" : "0", borderRadius: "14px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ 
                   position: "relative", padding: "0.5rem 1rem", fontSize: "0.85rem", fontWeight: 500, 
                   color: scrolled ? "var(--text-secondary)" : "rgba(255, 255, 255, 0.85)", textDecoration: "none", borderRadius: "10px",
                   letterSpacing: "0.01em", transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = scrolled ? "var(--bg-input)" : "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.color = scrolled ? "var(--text-primary)" : "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = scrolled ? "var(--text-secondary)" : "rgba(255, 255, 255, 0.85)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: "36px", height: "36px", borderRadius: "10px", 
                border: scrolled ? "1px solid var(--border-subtle)" : "1px solid rgba(255, 255, 255, 0.15)",
                background: scrolled ? "var(--bg-card)" : "rgba(255,255,255,0.05)", 
                color: scrolled ? "var(--text-primary)" : "rgba(255, 255, 255, 0.9)",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ display: "flex" }}>
                    <Sun size={15} />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} style={{ display: "flex" }}>
                    <Moon size={15} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* CTA */}
            <motion.a
              href="/#contact"
              className="btn btn-primary hidden md:inline-flex"
              style={{ 
                padding: "0.55rem 1.25rem", fontSize: "0.85rem", 
                background: "linear-gradient(135deg, #e879f9, #a78bfa)",
                boxShadow: "0 4px 14px rgba(232, 121, 249, 0.35)",
                color: "#fff",
                border: "none",
                borderRadius: "10px"
              }}
              whileHover={{ scale: 1.04, y: -1, boxShadow: "0 6px 20px rgba(232, 121, 249, 0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Get Yours
            </motion.a>

            {/* Hamburger */}
            <motion.button
              className="md:hidden"
              style={{
                width: "36px", height: "36px", borderRadius: "10px", 
                border: scrolled ? "1px solid var(--border-subtle)" : "1px solid rgba(255, 255, 255, 0.15)",
                background: scrolled ? "var(--bg-card)" : "rgba(255,255,255,0.05)", 
                color: scrolled ? "var(--text-primary)" : "rgba(255, 255, 255, 0.9)",
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: "flex" }}><X size={17} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} style={{ display: "flex" }}><Menu size={17} /></motion.span>}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" as const }}
            style={{
              position: "fixed", top: "72px", left: "1rem", right: "1rem", zIndex: 40,
              background: "rgba(16, 6, 28, 0.96)",
              border: "1px solid rgba(220, 100, 255, 0.15)",
              borderRadius: "18px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 40px rgba(220, 100, 255, 0.1)",
              backdropFilter: "blur(24px)",
              overflow: "hidden", willChange: "transform, opacity",
            }}
          >
            <nav style={{ display: "flex", flexDirection: "column", padding: "0.625rem" }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, ease: "easeOut" as const }}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ 
                      display: "flex", alignItems: "center", padding: "0.75rem 1rem", borderRadius: "12px", 
                      fontSize: "0.95rem", fontWeight: 500, color: "rgba(200, 180, 255, 0.85)", textDecoration: "none", transition: "background 0.18s" 
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(232, 121, 249, 0.15)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div style={{ padding: "0.75rem 0.25rem 0.25rem", borderTop: "1px solid rgba(220, 100, 255, 0.1)", marginTop: "0.5rem" }}>
                <a 
                  href="/#contact" 
                  className="btn btn-primary" 
                  onClick={() => setMobileOpen(false)} 
                  style={{ 
                    width: "100%", justifyContent: "center", 
                    background: "linear-gradient(135deg, #e879f9, #a78bfa)" ,
                    border: "none",
                    boxShadow: "0 4px 14px rgba(232, 121, 249, 0.35)",
                  }}
                >
                  Get Yours
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
