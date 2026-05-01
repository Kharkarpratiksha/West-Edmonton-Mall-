import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opportunities } from "../data/sections";

export default function Opportunity() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="opportunity"
      className="relative w-full overflow-hidden bg-[#F5F0E8] text-[#1a1a1a] flex flex-col justify-center"
      style={{ minHeight: "100dvh" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8A7F72 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#8A7F72] mb-4 font-mono"
        >
          The Opportunity
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#1a1a1a] mb-10 sm:mb-14 leading-tight"
        >
          Choose your partnership.
          <br />
          <em className="text-[#C9A84C]">We'll make it work.</em>
        </motion.h2>

        {/* Mobile: stacked, Desktop: 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`relative p-6 sm:p-8 border cursor-pointer transition-all duration-500 ${
                active === i
                  ? "border-[#C9A84C] bg-[#080808] text-white"
                  : "border-[#8A7F72]/30 bg-transparent text-[#1a1a1a] hover:border-[#8A7F72]"
              }`}
            >
              <div className={`text-[10px] tracking-[3px] uppercase font-mono mb-3 ${active === i ? "text-[#C9A84C]" : "text-[#8A7F72]"}`}>
                {opp.type}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-light mb-3 leading-tight">
                {opp.headline}
              </h3>
              <p className={`text-xs sm:text-sm font-body leading-relaxed mb-6 ${active === i ? "text-gray-400" : "text-[#8A7F72]"}`}>
                {opp.description}
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`text-[10px] tracking-[3px] uppercase font-mono group inline-flex items-center gap-2 transition-colors ${
                  active === i ? "text-[#C9A84C] hover:text-white" : "text-[#8A7F72] hover:text-[#1a1a1a]"
                }`}
              >
                {opp.cta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>

              {active === i && (
                <motion.div layoutId="activeOpp" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A84C]" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-[#8A7F72] text-[10px] font-mono mt-6 tracking-[2px] uppercase"
        >
          Hover to explore → tap to select
        </motion.p>
      </div>
    </section>
  );
}
