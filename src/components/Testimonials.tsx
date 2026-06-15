"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Alex Reed",
      role: "Director of Engineering",
      company: "Sequifi",
      quote: "Sharad joined our team and immediately took ownership of the payroll engine overhaul. His mastery of React state management and attention to detailed edge cases saved us weeks of development time. An exceptional Frontend Engineer.",
      rating: 5,
    },
    {
      name: "Meera Nair",
      role: "Lead Product Designer",
      company: "Ongraph Technologies",
      quote: "Working with Sharad was a pleasure. He has that rare combination of developer logic and a deep eye for design aesthetics. Every micro-animation and pixel layout was executed exactly as mocked, often even better than designed.",
      rating: 5,
    },
    {
      name: "Johnathan K.",
      role: "Client Product Manager",
      company: "Web3 Initiatives",
      quote: "We hired Sharad to optimize a high-traffic Web3 dashboard and integrate wallet authentications. He not only delivered the integrations on time but optimized our initial page load times by 40%. Highly recommend his services.",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 max-w-4xl mx-auto relative select-none">
      {/* Background radial glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono tracking-[0.25em] text-emerald-accent uppercase mb-2">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Client & Peer Reviews
        </h2>
        <div className="h-[2px] w-16 bg-emerald-accent mt-3 rounded-full" />
      </div>

      {/* Testimonial slider card */}
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative shadow-xl min-h-[280px] flex flex-col justify-between">
        {/* Quote watermark icon */}
        <Quote className="absolute right-8 top-8 text-foreground/5 h-20 w-20 pointer-events-none select-none" />

        <div className="space-y-6">
          {/* Star rating */}
          <div className="flex gap-1">
            {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-emerald-accent text-emerald-accent" />
            ))}
          </div>

          {/* Testimonial review text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed font-medium italic"
            >
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Info panel + navigation controls */}
        <div className="mt-8 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.25 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-sm md:text-base font-bold text-foreground">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-xs text-foreground/45 mt-0.5">
                {testimonials[activeIndex].role} @ <strong className="text-emerald-accent font-semibold">{testimonials[activeIndex].company}</strong>
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Button sliders */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-card-border bg-card-bg/20 text-foreground/60 hover:text-foreground hover:border-white/20 transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-card-border bg-card-bg/20 text-foreground/60 hover:text-foreground hover:border-white/20 transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
