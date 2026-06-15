"use client";

import { motion } from "framer-motion";

export default function BackgroundMesh() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* Top Left soft glow */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -80, 50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[80px] md:blur-[160px]"
      />

      {/* Center right soft glow */}
      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -50, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-emerald-600/10 dark:bg-emerald-600/4 blur-[70px] md:blur-[140px]"
      />

      {/* Bottom left soft glow */}
      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[20%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-emerald-400/5 dark:bg-emerald-400/3 blur-[60px] md:blur-[120px]"
      />

      {/* Subtle overlay shading for dark modern look */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
    </div>
  );
}
