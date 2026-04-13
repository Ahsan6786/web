"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send, MessageCircle, Mail, Phone,
  User, ChevronDown, CheckCircle,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

/* ── Constants ─────────────────────────────────────── */
const WA_NUMBER = "919162248786"; // +91 9162248786
const WA_BASE   = `https://wa.me/${WA_NUMBER}`;

const serviceOptions = [
  "Business Website",
  "Portfolio Website",
  "Restaurant Website",
  "Custom Web App",
  "E-Commerce Store",
  "Other / Not Sure",
];

/* ── Types ──────────────────────────────────────────── */
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2) e.name = "Please enter your name";
  if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email";
  if (!data.phone.trim()) {
    e.phone = "Phone / WhatsApp number is required";
  } else if (!data.phone.match(/^[\d\s\-\+\(\)]{7,15}$/)) {
    e.phone = "Enter a valid phone number";
  }
  if (!data.service) e.service = "Please select a service";
  if (!data.message.trim() || data.message.trim().length < 10)
    e.message = "Please describe your project (min 10 chars)";
  return e;
}

/* ── Build WhatsApp message ─────────────────────────── */
function buildWAMessage(f: FormData) {
  return encodeURIComponent(
    `👋 Hi Webis!\n\n` +
    `*Name:* ${f.name}\n` +
    `*Email:* ${f.email}\n` +
    `*Phone:* ${f.phone}\n` +
    `*Service:* ${f.service}\n\n` +
    `*Project Details:*\n${f.message}\n\n` +
    `_Sent via webis.in contact form_`
  );
}

/* ── Shared input style ─────────────────────────────── */
const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem 1rem 0.9rem 2.75rem",
  fontSize: "1rem",
  borderRadius: "12px",
  outline: "none",
  color: "var(--text-primary)",
  background: "var(--bg-input)",
  border: "1px solid var(--border-input)",
  transition: "all 0.2s",
};
const inputError: React.CSSProperties = {
  ...inputBase,
  border: "1px solid rgba(239,68,68,0.55)",
};

/* ── Component ──────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // brief UX pause
    setLoading(false);
    setSubmitted(true);

    // Open WhatsApp with pre-filled message
    const waUrl = `${WA_BASE}?text=${buildWAMessage(form)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const quickWAMessage = encodeURIComponent(
    `Hi Webis! I'm interested in a ${form.service || "website"}.${form.name ? ` My name is ${form.name}.` : ""} Can we talk?`
  );

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-primary)", position: "relative", overflow: "hidden" }}
    >
      {/* Galaxy ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px", height: "500px",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 1.25rem", position: "relative", zIndex: 10 }}>
        <ScrollReveal>
          <SectionHeading
            label="Get In Touch"
            title="Let's Build Something"
            titleHighlight="Amazing"
            subtitle="Ready to transform your digital presence? Fill in the form and we'll WhatsApp you within 2 hours."
            align="center"
            className="mb-14"
          />
        </ScrollReveal>

        {/* ── Two-column layout (stacks on mobile) ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
          }}
          className="lg:grid-cols-[5fr_8fr]"
        >
          {/* ── Left: contact info ── */}
          <ScrollReveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

              {/* Info cards */}
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+91 9162248786",
                  href: WA_BASE,
                  color: "#25D366",
                  bg: "rgba(37,211,102,0.1)",
                  border: "rgba(37,211,102,0.25)",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 9162248786",
                  href: "tel:+919162248786",
                  color: "#a78bfa",
                  bg: "rgba(124,58,237,0.1)",
                  border: "rgba(124,58,237,0.25)",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@webis.in",
                  href: "mailto:hello@webis.in",
                  color: "#60a5fa",
                  bg: "rgba(37,99,235,0.1)",
                  border: "rgba(37,99,235,0.25)",
                },
              ].map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.1rem 1.25rem",
                    borderRadius: "16px",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    textDecoration: "none",
                  }}
                  whileHover={{ scale: 1.02, borderColor: border }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                >
                  <div
                    style={{
                      width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: bg, border: `1px solid ${border}`, color,
                    }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Quick WhatsApp CTA */}
              <motion.a
                href={`${WA_BASE}?text=${quickWAMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "0.75rem", padding: "1rem 1.5rem", borderRadius: "16px",
                  fontSize: "0.95rem", fontWeight: 700, color: "white",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  textDecoration: "none", marginTop: "0.25rem",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(37,211,102,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp Now
              </motion.a>

              <p style={{ fontSize: "0.75rem", textAlign: "center", color: "var(--text-muted)" }}>
                ⚡ We respond within 2 hours on WhatsApp
              </p>
            </div>
          </ScrollReveal>

          {/* ── Right: form ── */}
          <ScrollReveal direction="right">
            <div
              className="card"
              style={{ padding: "clamp(1.25rem, 4vw, 2rem)", background: "var(--bg-card)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "3rem 1rem", textAlign: "center", gap: "1rem" }}
                >
                  <div style={{ width: "64px", height: "64px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}>
                    <CheckCircle size={28} color="#25D366" />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--text-primary)", margin: 0 }}>
                    Opening WhatsApp…
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                    WhatsApp has been opened with your details pre-filled.
                    <br />Thanks {form.name}! We&apos;ll reply within 2 hours. 🚀
                  </p>
                  <motion.a
                    href={`${WA_BASE}?text=${buildWAMessage(form)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: "0.5rem" }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <MessageCircle size={16} /> Open WhatsApp Again
                  </motion.a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }} noValidate>

                  {/* Row: Name + Email */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
                    {/* Name */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                        Your Name *
                      </label>
                      <div style={{ position: "relative" }}>
                        <User size={15} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                        <input
                          name="name" type="text" value={form.name} onChange={handleChange}
                          placeholder="Aarav Mehta"
                          style={errors.name ? inputError : inputBase}
                        />
                      </div>
                      {errors.name && <p style={{ fontSize: "0.75rem", color: "#f87171", margin: 0 }}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                        Email *
                      </label>
                      <div style={{ position: "relative" }}>
                        <Mail size={15} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="aarav@company.com"
                          style={errors.email ? inputError : inputBase}
                        />
                      </div>
                      {errors.email && <p style={{ fontSize: "0.75rem", color: "#f87171", margin: 0 }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row: Phone + Service */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="grid-cols-1 sm:grid-cols-2">
                    {/* Phone */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                        WhatsApp / Phone *
                      </label>
                      <div style={{ position: "relative" }}>
                        <Phone size={15} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                        <input
                          name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="+91 98765 43210"
                          style={errors.phone ? inputError : inputBase}
                        />
                      </div>
                      {errors.phone && <p style={{ fontSize: "0.75rem", color: "#f87171", margin: 0 }}>{errors.phone}</p>}
                    </div>

                    {/* Service */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                        Service Needed *
                      </label>
                      <div style={{ position: "relative" }}>
                        <ChevronDown size={15} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                        <select
                          name="service" value={form.service} onChange={handleChange}
                          style={{ ...(errors.service ? inputError : inputBase), paddingLeft: "1rem", paddingRight: "2.5rem", appearance: "none" }}
                        >
                          <option value="" disabled>Select a service…</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s} style={{ background: "var(--bg-card)", color: "var(--text-primary)" }}>{s}</option>
                          ))}
                        </select>
                      </div>
                      {errors.service && <p style={{ fontSize: "0.75rem", color: "#f87171", margin: 0 }}>{errors.service}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)" }}>
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your vision, goals, timeline, and budget…"
                      style={{ ...( errors.message ? inputError : inputBase), paddingLeft: "1rem", resize: "vertical", minHeight: "120px" }}
                    />
                    {errors.message && <p style={{ fontSize: "0.75rem", color: "#f87171", margin: 0 }}>{errors.message}</p>}
                  </div>

                  {/* Note */}
                  <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0 }}>
                    📲 Submitting this form will open WhatsApp with your details pre-filled for a faster response.
                  </p>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "0.5rem", padding: "1rem 1.5rem",
                      fontSize: "1rem", fontWeight: 700, borderRadius: "12px",
                      border: "none", cursor: loading ? "not-allowed" : "pointer",
                      background: "linear-gradient(135deg, #7c3aed, #2563eb 60%, #f97316)",
                      backgroundSize: "200% 200%",
                      color: "white", width: "100%",
                      boxShadow: "0 4px 24px rgba(124,58,237,0.4)",
                      opacity: loading ? 0.75 : 1,
                    }}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.97 }}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" as const }}
                          style={{ display: "inline-block", width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid white", borderRadius: "50%" }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        <MessageCircle size={18} />
                        Send via WhatsApp
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
