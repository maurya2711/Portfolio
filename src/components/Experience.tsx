"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  CalendarRange, 
  Sparkles, 
  ArrowUpRight,
  TrendingUp,
  Globe2,
  Cpu,
  Layers2
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Sequifi",
      role: "Frontend Engineer",
      period: "2025 – 2026",
      details: [
        "Architected and deployed a modular Workforce Management Platform and automated Payroll System.",
        "Built employee management registries, multi-stage hiring workflows, and automated document generation pipelines.",
        "Implemented high-performance canvas-based Digital Signatures and secure cryptographic signing integrations.",
        "Designed and implemented client-side role-based access control (RBAC) structures for complex dashboard navigation."
      ]
    },
    {
      company: "Ongraph Technologies",
      role: "Software Engineer",
      period: "2021 – 2025",
      details: [
        "Developed and maintained next-gen SaaS Platforms, Web3 portals, and high-traffic enterprise applications.",
        "Established direct client collaboration guidelines to map technical architectures to business requirements.",
        "Spearheaded Performance Optimization efforts, reducing initial bundle sizes by 40% using code splitting and dynamic routing.",
        "Mentored junior engineers and hosted frontend workshops on TypeScript and React profiling practices."
      ]
    }
  ];

  const achievements = [
    {
      title: "5+ Years Experience",
      desc: "Delivering senior-level production frontend applications.",
      icon: CalendarRange
    },
    {
      title: "Enterprise Delivered",
      desc: "Architected secure payroll and SaaS workflows.",
      icon: Cpu
    },
    {
      title: "Global Collaboration",
      desc: "Collaborating with offshore and international product teams.",
      icon: Globe2
    },
    {
      title: "Performance Expert",
      desc: "Drastic bundle size reduction and core web vitals optimization.",
      icon: TrendingUp
    },
    {
      title: "Architecture Design",
      desc: "Designing clean, scalable TypeScript structures.",
      icon: Layers2
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      {/* Background radial glow */}
      <div className="absolute right-[15%] bottom-[10%] w-80 h-80 bg-emerald-500/5 blur-[95px] rounded-full pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">History & Growth</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Experience & Achievements
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Interactive vertical timeline */}
        <div className="lg:col-span-7 space-y-10 relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-3 bottom-3 w-[1.5px] bg-card-border" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-14"
            >
              {/* Timeline bubble */}
              <div className="absolute left-[15px] top-1.5 -translate-x-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-background border-2 border-emerald-accent shadow-[0_0_10px_var(--emerald-glow)] z-10">
                <Building2 size={12} className="text-emerald-accent" />
              </div>

              {/* Info Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                      {exp.company}
                      <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-emerald-accent/10 text-emerald-accent border border-emerald-accent/10">
                        {exp.role}
                      </span>
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-foreground/45 flex items-center gap-1.5">
                    <CalendarRange size={12} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs md:text-sm text-foreground/65">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-accent shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Key Achievements Grid */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
            {/* Gradient badge header */}
            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-emerald-accent" />
              <h3 className="text-xs font-mono tracking-widest text-emerald-accent uppercase font-bold">
                Professional Milestones
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="flex gap-4 p-3 rounded-xl border border-transparent hover:border-card-border hover:bg-white/3 transition-all duration-300 group"
                  >
                    <div className="p-2 h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-emerald-accent/5 border border-emerald-accent/10 text-emerald-accent group-hover:border-emerald-accent/30 group-hover:bg-emerald-accent/10 transition-colors">
                      <Icon size={16} />
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5 group-hover:text-emerald-accent transition-colors">
                        {ach.title}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h4>
                      <p className="text-xs text-foreground/50 leading-normal">{ach.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
