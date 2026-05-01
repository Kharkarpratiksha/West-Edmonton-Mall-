import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { audienceStats } from "../data/stats";
import AnimatedNumber from "../components/AnimatedNumber";

const segments = [
  {
    label: "Retailers",
    headline: "Your best customer is already here.",
    body: "32 million annual visitors. Median household income of $95K. Dwell time of 2.4 hours. This is not an audience you build — it's one you step into.",
    color: "#C9A84C",
  },
  {
    label: "Sponsors",
    headline: "Reach without wasted impressions.",
    body: "58% female, 25–54, $95K+ HHI. High-intent, high-dwell, and physically present. No digital ad campaign delivers this quality of attention at this scale.",
    color: "#7BA7BC",
  },
  {
    label: "Events",
    headline: "87,000 people. One venue.",
    body: "On peak days, WEM outdraws the largest arenas in Canada. Events here don't need marketing — the mall itself is the audience.",
    color: "#9C8B75",
  },
];

export default function Audience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="audience"
      className="relative w-full overflow-hidden bg-[#0D0D0D] text-white flex flex-col justify-center"
      style={{ minHeight: "100dvh" }}
    >
      <div className="absolute inset-0">
        <img
          src="/bg/audience.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-15 ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
      </div>

      <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] mb-5 font-mono"
        >
          The Audience
        </motion.p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 sm:mb-12 flex-wrap">
          {segments.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] tracking-[2px] uppercase font-mono transition-all duration-300 ${
                active === i ? "bg-white text-black" : "border border-white/20 text-gray-500 hover:text-white hover:border-white/50"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-5 text-white">
                {segments[active].headline}
              </h2>
              <p className="text-gray-400 font-body leading-relaxed text-sm sm:text-base mb-8">
                {segments[active].body}
              </p>
              <button
                onClick={() => document.getElementById("opportunity")?.scrollIntoView({ behavior: "smooth" })}
                className="text-[10px] sm:text-[11px] tracking-[3px] uppercase font-mono group inline-flex items-center gap-2 transition-colors"
                style={{ color: segments[active].color }}
              >
                See Opportunities
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {audienceStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-4 sm:p-6 hover:border-[#C9A84C]/40 transition-colors duration-500 group"
              >
                <div className="text-3xl sm:text-4xl font-display font-light text-white mb-1 group-hover:text-[#C9A84C] transition-colors duration-500">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[3px] uppercase text-gray-500 font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
