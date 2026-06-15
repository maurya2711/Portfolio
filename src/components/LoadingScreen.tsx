"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 20) + 5;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 450);
          return 100;
        }
        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-foreground"
        >
          <div className="relative flex flex-col items-center max-w-[280px] w-full px-4">
            {/* Logo Box */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 border border-white/10 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
              <span className="text-2xl font-bold tracking-wider text-emerald-accent text-glow">SM</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg font-bold tracking-[0.2em] text-center uppercase mb-1 text-white"
            >
              Sharad Mourya
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs font-mono tracking-[0.15em] text-center uppercase mb-8 text-white/80"
            >
              Senior Frontend Engineer
            </motion.p>

            {/* Custom Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-emerald-accent shadow-[0_0_8px_#10b981]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Load Text */}
            <div className="mt-3 flex items-center justify-between w-full text-[10px] font-mono text-white/45 tracking-widest">
              <span>SYSTEM BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
