import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retailBrands } from "../data/brands";

export default function Retail() {
  const [active, setActive] = useState(retailBrands[0]);

  const brandImages = {
    "Nike":      "/brands/nike.jpeg",
    "Apple":     "/brands/apple.jpeg",
    "Zara":      "/brands/zara.jpeg",
    "Sephora":   "/brands/sephora.jpeg",
    "Lululemon": "/brands/lululemon.jpeg",
  };

  return (
    <section
      id="retail"
      className="relative w-full overflow-hidden bg-[#080808] text-white"
      style={{ minHeight: "100dvh" }}
    >
      {/* Full bleed bg image — changes per brand */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={brandImages[active.name]}
            alt={active.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div
        className="relative z-10 flex flex-col justify-center h-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20"
        style={{ minHeight: "100dvh" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] mb-5 font-mono"
        >
          Retail Ecosystem
        </motion.p>

        {/* Animated stat */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name + "-stat"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8"
          >
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-white leading-none mb-1">
              {active.visitors}
            </div>
            <div className="text-[10px] sm:text-[11px] tracking-[3px] uppercase text-gray-500 font-mono">
              {active.unit}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="w-10 h-px bg-[#C9A84C] mb-5" />

        <AnimatePresence mode="wait">
          <motion.div
            key={active.name + "-text"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 sm:mb-10"
          >
            <p className="text-gray-300 text-sm font-body leading-relaxed max-w-xs sm:max-w-sm mb-3">
              {active.why}
            </p>
            <div className="inline-block px-3 py-1 border border-[#C9A84C]/40 text-[10px] tracking-[2px] uppercase text-[#C9A84C] font-mono">
              {active.tag}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Brand selector */}
        <div className="flex flex-col gap-0.5 max-w-xs sm:max-w-sm">
          {retailBrands.map((b, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(b)}
              onClick={() => setActive(b)}
              className={`text-left transition-all duration-200 py-2 border-l-2 pl-4 ${
                active.name === b.name
                  ? "border-[#C9A84C] text-white"
                  : "border-transparent text-gray-600 hover:text-gray-300 hover:border-gray-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm tracking-[2px] uppercase font-mono">{b.name}</span>
                <AnimatePresence>
                  {active.name === b.name && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[10px] text-[#C9A84C] font-mono ml-4"
                    >
                      {b.revenue}/mo
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => document.getElementById("luxury")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[10px] sm:text-[11px] tracking-[3px] uppercase text-gray-400 hover:text-[#C9A84C] transition-colors font-mono group inline-flex items-center gap-2"
          >
            <span>Explore Luxury Corridor</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
