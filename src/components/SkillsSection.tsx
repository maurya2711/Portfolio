"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Database, Palette, Shield } from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillsData {
  [key: string]: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    skills: SkillItem[];
  };
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const skillsData: SkillsData = {
    frontend: {
      title: "Frontend Core",
      description: "Building responsive, robust user interfaces with modern frameworks and type-safety.",
      icon: Cpu,
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Vue.js", level: 80 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
      ],
    },
    state: {
      title: "State Management",
      description: "Managing complex client states and data persistence cleanly across application scopes.",
      icon: Database,
      skills: [
        { name: "Redux", level: 90 },
        { name: "Redux Toolkit", level: 92 },
        { name: "Vuex", level: 82 },
      ],
    },
    ui: {
      title: "UI Frameworks",
      description: "Designing sleek, custom layouts and high-fidelity fluid components.",
      icon: Palette,
      skills: [
        { name: "Tailwind CSS", level: 96 },
        { name: "Material UI", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      description: "Organizing version controls, layout mockups, and agile communication pipelines.",
      icon: Shield,
      skills: [
        { name: "Git", level: 92 },
        { name: "GitHub", level: 94 },
        { name: "Figma", level: 84 },
        { name: "Jira", level: 86 },
      ],
    },
  };

  // Radar chart details
  const radarCategories = [
    { key: "frontend", label: "Frontend Core", val: 93 },
    { key: "state", label: "State Mgmt", val: 88 },
    { key: "ui", label: "UI Frameworks", val: 87 },
    { key: "tools", label: "Tools", val: 89 },
  ];

  const radarWidth = 320;
  const radarHeight = 320;
  const center = 160;
  const maxRadius = 110;

  // Compute radar polygon coordinates
  const getRadarCoordinates = () => {
    return radarCategories.map((cat, index) => {
      const angle = (index * 2 * Math.PI) / radarCategories.length - Math.PI / 2;
      const radius = (cat.val / 100) * maxRadius;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return { x, y, label: cat.label, key: cat.key };
    });
  };

  const points = getRadarCoordinates();
  const polygonPath = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Grid concentric polygons
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const gridPoints = gridLevels.map((lvl) => {
    return radarCategories.map((_, index) => {
      const angle = (index * 2 * Math.PI) / radarCategories.length - Math.PI / 2;
      const radius = lvl * maxRadius;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      return `${x},${y}`;
    }).join(" ");
  });

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Title */}
      <div className="flex flex-col mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">Capabilities</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Expertise & Skills Graph
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Tab Categories Selection */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {Object.keys(skillsData).map((catKey) => {
            const cat = skillsData[catKey];
            const Icon = cat.icon;
            const isActive = activeCategory === catKey;

            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`glass-panel p-5 rounded-2xl text-left flex items-start gap-4 transition-all duration-300 relative overflow-hidden ${
                  isActive 
                    ? "border-emerald-accent/40 bg-emerald-accent/5 shadow-[0_0_20px_rgba(16,185,129,0.08)]" 
                    : "hover:border-white/15 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  isActive 
                    ? "bg-emerald-accent/10 border-emerald-accent/30 text-emerald-accent" 
                    : "bg-white/5 border-white/5 text-foreground/50"
                }`}>
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className={`text-base font-bold transition-colors ${
                    isActive ? "text-emerald-accent text-glow" : "text-foreground"
                  }`}>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-foreground/45 mt-1 leading-relaxed">{cat.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Center: Dynamic Skills Graph (SVG Radar) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center">
          <div className="glass-panel p-6 rounded-3xl relative flex items-center justify-center shadow-lg w-full max-w-[340px]">
            {/* Visual Header */}
            <span className="absolute top-4 left-6 text-[10px] font-mono tracking-widest text-foreground/35 uppercase">
              Core Competence Radar
            </span>

            <svg width={radarWidth} height={radarHeight} className="overflow-visible select-none">
              {/* Concentric Grid lines */}
              {gridPoints.map((gp, idx) => (
                <polygon
                  key={idx}
                  points={gp}
                  fill="none"
                  stroke="currentColor"
                  className="text-foreground/5"
                  strokeWidth="1"
                />
              ))}

              {/* Angle axis lines */}
              {radarCategories.map((_, idx) => {
                const angle = (idx * 2 * Math.PI) / radarCategories.length - Math.PI / 2;
                const x2 = center + maxRadius * Math.cos(angle);
                const y2 = center + maxRadius * Math.sin(angle);
                return (
                  <line
                    key={idx}
                    x1={center}
                    y1={center}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    className="text-foreground/5"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Data web polygon */}
              <motion.polygon
                initial={{ scale: 0.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                points={polygonPath}
                fill="rgba(16, 185, 129, 0.12)"
                stroke="#10b981"
                strokeWidth="2"
                className="filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              />

              {/* Interactive nodes */}
              {points.map((p, idx) => {
                const isSelected = activeCategory === p.key;
                return (
                  <g key={idx} className="cursor-pointer" onClick={() => setActiveCategory(p.key)}>
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? "#10b981" : "var(--background)"}
                      stroke="#10b981"
                      strokeWidth="2.5"
                      animate={isSelected ? { r: [6, 9, 6] } : {}}
                      transition={isSelected ? { duration: 1.5, repeat: Infinity } : {}}
                    />
                    <text
                      x={p.x}
                      y={p.y + (p.y > center ? 15 : -12)}
                      textAnchor="middle"
                      className={`text-[10px] font-mono tracking-wider transition-colors ${
                        isSelected 
                          ? "fill-emerald-accent font-bold font-glow" 
                          : "fill-foreground/45"
                      }`}
                    >
                      {p.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Detailed list bars */}
        <div className="lg:col-span-4 min-h-[300px] flex flex-col justify-center">
          <div className="glass-panel p-6 rounded-3xl flex flex-col gap-5">
            <h3 className="text-sm font-mono tracking-widest text-emerald-accent uppercase">
              {skillsData[activeCategory].title} Breakdowns
            </h3>

            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {skillsData[activeCategory].skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="font-semibold text-foreground/80">{skill.name}</span>
                        <span className="font-mono text-foreground/50">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                          className="h-full bg-emerald-accent rounded-full shadow-[0_0_8px_#10b981]"
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
