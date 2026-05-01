import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LiveCounter() {
  const [count, setCount] = useState(84320);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => Math.max(80000, Math.min(91000, c + Math.floor(Math.random() * 40) - 15)));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse block flex-shrink-0" />
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <motion.span
          key={count}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="text-xl sm:text-2xl font-display font-light text-white"
        >
          {count.toLocaleString()}
        </motion.span>
        <span className="text-[9px] sm:text-[10px] tracking-[2px] uppercase text-gray-400 font-mono">
          people inside WEM right now
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden bg-[#080808] flex flex-col"
      style={{ height: "100dvh" }}
    >
      {/* VIDEO BACKGROUND — drop hero.mp4 into /public/video/hero.mp4 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-50"

        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
      </div>

      {/* TOP BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 flex justify-between items-center px-5 sm:px-10 lg:px-16 pt-5 sm:pt-8"
      >
        <span className="text-[10px] sm:text-[11px] tracking-[4px] uppercase text-[#C9A84C] font-mono">
          West Edmonton Mall
        </span>
        <span className="text-[10px] sm:text-[11px] tracking-[4px] uppercase text-gray-500 font-mono hidden sm:block">
                  Partner Deck 2025
        </span>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 sm:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] mb-3 sm:mb-5 font-mono"
        >
          Canada's #1 Retail Destination
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.92] font-light text-white mb-4 sm:mb-6 max-w-3xl"
        >
          Where 32 Million
          <br />
          <em className="text-[#C9A84C]">Shoppers</em> Choose
          <br />
          to Be.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-gray-400 text-sm font-body max-w-xs sm:max-w-md leading-relaxed mb-6 sm:mb-9"
        >
          5.3M sq ft · 800+ brands · Canada's most powerful retail platform
          with the highest dwell time in North America.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() => document.getElementById("retail")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 sm:px-6 py-3 bg-[#C9A84C] text-black text-[10px] sm:text-[11px] tracking-[3px] uppercase font-body hover:bg-[#E8D5A3] transition-colors duration-300"
          >
            Explore Retail
          </button>
          <button
            onClick={() => document.getElementById("opportunity")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 sm:px-6 py-3 border border-white/30 text-white text-[10px] sm:text-[11px] tracking-[3px] uppercase font-body hover:border-white transition-colors duration-300"
          >
            Partner With Us
          </button>
        </motion.div>
      </div>

      {/* BOTTOM BAR — live counter only, no extra stats (those are in Scale slide) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 px-5 sm:px-10 lg:px-16 pb-5 sm:pb-8 flex items-center justify-between"
      >
        <LiveCounter />
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
