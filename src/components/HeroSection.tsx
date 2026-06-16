"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase, FileDown, MessageSquare } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  } as const;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-8 py-20 pt-28 overflow-hidden select-none"
    >
      {/* Decorative Blur Bubble */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[70px] sm:blur-[110px] pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Available Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-accent/20 bg-emerald-accent/5 backdrop-blur-sm text-xs font-mono text-emerald-accent shadow-[0_0_15px_rgba(16,185,129,0.05)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Contracts & Opportunities</span>
        </motion.div>

        {/* Engineer Title */}
        <motion.h2
          variants={itemVariants}
          className="text-sm sm:text-base font-mono font-medium tracking-[0.25em] text-emerald-accent uppercase mb-3 text-glow"
        >
          Sharad Mourya
        </motion.h2>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1] max-w-3xl"
        >
          Building Scalable Web Applications with{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent text-glow">
            React & Next.js
          </span>
        </motion.h1>

        {/* Short introduction */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-foreground/70 dark:text-foreground/60 max-w-2xl mb-10 leading-relaxed font-normal"
        >
          Frontend Engineer with 5+ years of experience designing and developing high-performance SaaS, HRTech, Web3, and enterprise applications.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-accent text-neutral-dark font-semibold text-sm hover:opacity-95 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 group cursor-pointer"
          >
            <Briefcase size={16} className="group-hover:rotate-6 transition-transform" />
            <span>View Projects</span>
          </button>

          <a
            href="/Sharad_Mourya_Latest.pdf"
            download="Sharad_Mourya_Latest.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-card-bg border border-card-border hover:border-emerald-accent/50 hover:bg-emerald-accent/5 text-foreground hover:text-emerald-accent font-semibold text-sm transition-all duration-300 cursor-pointer"
          >
            <FileDown size={16} />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent border border-card-border hover:border-foreground/30 text-foreground hover:bg-card-bg/20 font-semibold text-sm transition-all duration-300 cursor-pointer"
          >
            <MessageSquare size={16} />
            <span>Contact Me</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Bounce scroll trigger */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-foreground/45 hover:text-emerald-accent cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span>DISCOVER MORE</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
