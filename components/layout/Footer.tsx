"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Share2, ExternalLink, Link2, GitBranch, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Business Websites", href: "/#services" },
    { label: "Portfolio Websites", href: "/#services" },
    { label: "Restaurant Websites", href: "/#services" },
    { label: "Custom Web Apps",  href: "/#services" },
  ],
  Company: [
    { label: "Portfolio",    href: "/#portfolio" },
    { label: "Pricing",     href: "/#pricing" },
    { label: "Why Webis",   href: "/#why" },
    { label: "Testimonials",href: "/#testimonials" },
  ],
  Contact: [
    { label: "Get a Quote",    href: "/#contact" },
    { label: "WhatsApp us",   href: "https://wa.me/919999999999", external: true },
    { label: "hello@webis.in",href: "mailto:hello@webis.in", external: true },
  ],
};

const socials = [
  { icon: Share2,       href: "https://instagram.com", label: "Instagram" },
  { icon: ExternalLink, href: "https://twitter.com",   label: "Twitter / X" },
  { icon: Link2,        href: "https://linkedin.com",  label: "LinkedIn"  },
  { icon: GitBranch,    href: "https://github.com",    label: "GitHub"    },
];

export default function Footer() {
  return (
    <footer data-theme="dark" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-subtle)", position: "relative" }}>
      {/* Galaxy top line */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #7c3aed 35%, #2563eb 50%, #f97316 70%, transparent)", opacity: 0.6 }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "4.5rem 1.5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
            gap: "2.5rem 2rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(124,58,237,0.1)",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", width: "fit-content" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "linear-gradient(135deg, #7c3aed, #2563eb)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: "1rem", color: "white", boxShadow: "0 4px 14px rgba(124,58,237,0.35)" }}>W</div>
              <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>Webis</span>
            </Link>

            <p style={{ fontSize: "0.83rem", lineHeight: 1.65, color: "var(--text-secondary)", maxWidth: "280px", margin: 0 }}>
              We don&apos;t build websites. We build experiences. Premium digital agency for the age of the internet.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.92 }}
                  style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.18)",
                    color: "var(--text-muted)", transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(124,58,237,0.18)"; el.style.color = "#a78bfa"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(124,58,237,0.08)"; el.style.color = "var(--text-muted)"; }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>{group}</h3>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem", listStyle: "none", padding: 0, margin: 0 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.83rem", color: "var(--text-secondary)", textDecoration: "none" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                        {link.label}<ArrowUpRight size={11} style={{ opacity: 0.5 }} />
                      </a>
                    ) : (
                      <Link href={link.href} style={{ fontSize: "0.83rem", color: "var(--text-secondary)", textDecoration: "none" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem", paddingTop: "1.75rem" }}>
          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem", margin: 0 }}>
            © {new Date().getFullYear()} Webis. Made with <Heart size={12} color="#f97316" fill="#f97316" /> in India.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <Link key={t} href="#" style={{ fontSize: "0.78rem", color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#a78bfa"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
