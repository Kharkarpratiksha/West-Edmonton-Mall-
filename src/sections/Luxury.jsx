import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { luxuryBrands } from "../data/brands";

export default function Luxury() {
  const [active, setActive] = useState(luxuryBrands[0]);

  const brandImages = {
    "Tiffany & Co.": "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&q=80",
    "Hugo Boss":      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=1600&q=80",
    "Michael Kors":   "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&q=80",
    "Coach":          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1600&q=80",
  };

  return (
    <section
      id="luxury"
      className="relative w-full overflow-hidden bg-[#080808] text-white"
      style={{ minHeight: "100dvh" }}
    >
      {/* Full bleed background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/*
            AI IMAGE PLACEHOLDER — Luxury Background
            Replace src with AI-generated luxury atmosphere images
            Prompt: "[brand] luxury boutique interior editorial cinematic moody"
          */}
          <img
            src={brandImages[active.name]}
            alt={active.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="relative z-10 flex flex-col md:flex-row h-full"
        style={{ minHeight: "100dvh" }}
      >
        {/* LEFT: Brand list */}
        <div className="flex flex-col justify-center px-5 sm:px-10 lg:px-16 pt-16 pb-6 md:pb-16 md:w-[300px] lg:w-[340px] flex-shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] mb-6 sm:mb-10 font-mono"
          >
            Luxury Corridor
          </motion.p>

          <div className="flex flex-row md:flex-col flex-wrap gap-x-6 gap-y-0">
            {luxuryBrands.map((b, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onMouseEnter={() => setActive(b)}
                onClick={() => setActive(b)}
                className="text-left py-3 md:py-4 border-b border-white/5 group w-full"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <div className={`w-1 h-3 transition-all duration-300 flex-shrink-0 ${active.name === b.name ? "bg-[#C9A84C]" : "bg-transparent"}`} />
                  <span className={`font-display text-lg sm:text-xl transition-all duration-300 ${active.name === b.name ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
                    {b.name}
                  </span>
                </div>
                <div className="pl-3 text-[9px] tracking-[2px] uppercase text-gray-600 font-mono">{b.category}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT: Active brand data */}
        <div className="flex flex-col justify-center flex-1 px-5 sm:px-10 lg:px-16 pb-16 md:pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[54px] sm:text-[58px] md:text-[100px] lg:text-[120px] font-display font-medium text-white leading-none tracking-tight mb-1">
                    {active.revenue}
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[4px] uppercase text-gray-400 mb-6 font-mono">
                {active.unit} — Estimated Flagship Revenue
              </div>

              <div className="flex flex-wrap items-start gap-6 mb-8">
                <div>
                  <div className="text-xl sm:text-2xl font-display text-[#C9A84C]">{active.aov}</div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500 font-mono">{active.aovLabel}</div>
                </div>
                <div className="w-px h-10 bg-white/10 hidden sm:block" />
                <p className="text-sm text-gray-400 font-body max-w-xs leading-relaxed">
                  {active.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/30 bg-[#C9A84C]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="text-[10px] tracking-[3px] uppercase text-[#C9A84C] font-mono">{active.tag}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10">
            <button
              onClick={() => document.getElementById("attractions")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[10px] sm:text-[11px] tracking-[3px] uppercase text-gray-400 hover:text-[#C9A84C] transition-colors font-mono group inline-flex items-center gap-2"
            >
              <span>Discover Attractions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Vertical label — desktop only */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div
          className="text-[9px] tracking-[6px] uppercase text-gray-700 font-mono"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          West Edmonton Mall — Luxury
        </div>
      </div>
    </section>
  );
}
