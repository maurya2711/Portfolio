"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validations
    if (!name || !email || !subject || !message) {
      setFormStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setFormStatus("submitting");

    // Mock form submission response
    setTimeout(() => {
      // Simulate successful dispatch
      setFormStatus("success");

      // Auto-open mailto fallback
      const mailtoUrl = `mailto:dev.frontend1997@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=From: ${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )})%0A%0A${encodeURIComponent(message)}`;

      window.location.href = mailtoUrl;

      // Clear fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }, 1200);
  };

  const contactCards = [
    {
      label: "Email",
      val: "dev.frontend1997@gmail.com",
      link: "mailto:dev.frontend1997@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      val: "+91-9810590475",
      link: "tel:+9810590475",
      icon: Phone,
    },
    {
      label: "Location",
      val: "New Delhi, India",
      link: "https://maps.google.com/?q=New+Delhi",
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      {/* Background radial glow */}
      <div className="absolute right-[-10%] bottom-0 w-80 h-80 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Let&apos;s Work Together
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Have a project in mind, or looking to add to your engineering roster?
          </h3>
          <p className="text-foreground/60 leading-relaxed text-sm md:text-base">
            I am always interested in discussing new front-end design systems, scalable Next.js architecture builds, or Web3 optimization layouts. Drop me a note and let&apos;s coordinate!
          </p>

          <div className="space-y-4 pt-6">
            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <a
                  key={idx}
                  href={card.link}
                  className="glass-panel p-4.5 rounded-2xl flex items-center gap-4 hover:border-emerald-accent/30 hover:bg-emerald-accent/5 group transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-emerald-accent/5 border border-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent/10 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-foreground/45 uppercase tracking-wider">
                      {card.label}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-foreground group-hover:text-emerald-accent transition-colors mt-0.5">
                      {card.val}
                    </h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Validation Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 md:p-8 rounded-3xl relative shadow-lg">
            <h3 className="text-sm font-mono tracking-widest text-emerald-accent uppercase mb-6">
              Send a Secure Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="formName" className="text-xs font-semibold text-foreground/75">
                    Your Name *
                  </label>
                  <input
                    id="formName"
                    type="text"
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-card-border bg-card-bg/20 focus:outline-none focus:border-emerald-accent/40 text-foreground transition-all placeholder:text-foreground/35"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="formEmail" className="text-xs font-semibold text-foreground/75">
                    Your Email *
                  </label>
                  <input
                    id="formEmail"
                    type="email"
                    required
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-card-border bg-card-bg/20 focus:outline-none focus:border-emerald-accent/40 text-foreground transition-all placeholder:text-foreground/35"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="formSubject" className="text-xs font-semibold text-foreground/75">
                  Subject *
                </label>
                <input
                  id="formSubject"
                  type="text"
                  required
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Inquiry / Project Scopes"
                  className="w-full px-4 py-2.5 text-xs md:text-sm rounded-xl border border-card-border bg-card-bg/20 focus:outline-none focus:border-emerald-accent/40 text-foreground transition-all placeholder:text-foreground/35"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="formMsg" className="text-xs font-semibold text-foreground/75">
                  Message Body *
                </label>
                <textarea
                  id="formMsg"
                  rows={5}
                  required
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline details or timeline scopes..."
                  className="w-full px-4 py-3 text-xs md:text-sm rounded-xl border border-card-border bg-card-bg/20 focus:outline-none focus:border-emerald-accent/40 text-foreground transition-all placeholder:text-foreground/35 resize-none"
                />
              </div>

              {/* Status Display Messages */}
              <AnimatePresence mode="wait">
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-2 text-red-500 text-xs mt-2"
                  >
                    <AlertCircle size={14} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-2 text-emerald-accent text-xs mt-2"
                  >
                    <CheckCircle2 size={14} className="animate-pulse" />
                    <span>Email client loading! Message drafted successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-accent text-neutral-dark font-semibold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] cursor-pointer hover:opacity-95 ${formStatus === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                  }`}
              >
                <Send size={14} />
                <span>{formStatus === "submitting" ? "Sending Details..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
