"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Layers, 
  Cpu, 
  Zap, 
  Activity, 
  ShieldCheck,
  MapPin,
  Calendar
} from "lucide-react";

export default function AboutSection() {
  const bulletHighlights = [
    { title: "5+ Years Experience", desc: "Developing production applications", icon: Award },
    { title: "Frontend Architecture", desc: "Scalable modular codebases", icon: Layers },
    { title: "React & Next.js Ecosystem", desc: "Expert rendering techniques", icon: Cpu },
    { title: "Performance Expert", desc: "Lighthouse audit optimizations", icon: Zap },
    { title: "API Integrations", desc: "Secure state and fetch patterns", icon: Activity },
    { title: "Agile Development", desc: "Scrum & collaborative pipelines", icon: ShieldCheck },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  } as const;

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      {/* Visual background element */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">Background</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          About Sharad Mourya
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Biography */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="lg:col-span-6 space-y-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            Crafting elegant web experiences that combine performance, usability, and architecture.
          </h3>
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            I am a Senior Frontend Engineer based in <strong>New Delhi, India</strong>. Over the last 5+ years, I have specialized in building robust, user-centric interfaces. My expertise spans constructing HRTech platforms, high-traffic Web3 portals, and enterprise-grade SaaS environments.
          </p>
          <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
            I focus on pixel-perfect details, responsive optimization, and structured development using TypeScript and modern framework pipelines. I believe clean code architectures and optimized data states are essential to generating reliable, satisfying user interactions.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-card-border">
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-foreground/60">
              <MapPin size={16} className="text-emerald-accent" />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-foreground/60">
              <Calendar size={16} className="text-emerald-accent" />
              <span>5+ Years Active</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Grid details */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bulletHighlights.map((hl, index) => {
            const Icon = hl.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col gap-3.5"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-accent/5 border border-emerald-accent/15 text-emerald-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-foreground">{hl.title}</h4>
                  <p className="text-xs text-foreground/50 mt-1">{hl.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
