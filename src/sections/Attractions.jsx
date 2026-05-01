import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const attractions = [
  {
    id: "waterpark",
    name: "World Waterpark",
    tag: "One-of-a-Kind",
    headline: "The largest indoor waterpark in North America.",
    description:
      "5 acres of waves, slides, and tropical atmosphere — inside a mall. A permanent anchor that drives repeat visits from across Western Canada and beyond. No competitor can replicate it.",
    stats: [
      { value: "5 Acres", label: "Indoor Waterpark" },
      { value: "47+",     label: "Rides & Attractions" },
      { value: "30°C",    label: "Year-Round" },
      { value: "2M+",     label: "Annual Visits" },
    ],
    image: "/images/waterpark.jpeg",
    color: "#4A9EBF",
  },
  {
    id: "galaxyland",
    name: "Galaxyland",
    tag: "Largest Indoor Amusement Park",
    headline: "Canada's largest indoor amusement park.",
    description:
      "A fully enclosed amusement park with roller coasters, family rides, and live entertainment — operating 365 days a year. Galaxyland alone draws families from across Alberta and beyond.",
    stats: [
      { value: "5.2M sqft", label: "Amusement Area" },
      { value: "25+",       label: "Rides & Attractions" },
      { value: "365",       label: "Days/Year" },
      { value: "#1",        label: "Indoor Park Canada" },
    ],
    image: "/images/galaxyland.png",
    color: "#C9A84C",
  },
];

export default function Attractions() {
  const [active, setActive] = useState(0);
  const current = attractions[active];

  return (
    <section
      id="attractions"
      className="relative w-full overflow-hidden bg-[#080808] text-white"
      style={{ minHeight: "20dvh" }}
    >
      {/* Full bleed background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between px-5 sm:px-10 lg:px-16 py-14 sm:py-20"
        style={{ minHeight: "100dvh" }}
      >
        {/* Top label + switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] font-mono"
          >
            World-Class Attractions
          </motion.p>

          {/* Tab switcher */}
          <div className="flex gap-2">
            {attractions.map((a, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 text-[10px] tracking-[2px] uppercase font-mono transition-all duration-300 ${
                  active === i
                    ? "bg-white text-black"
                    : "border border-white/20 text-gray-400 hover:text-white hover:border-white/50"
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col justify-center py-8 sm:py-12"
          >
            <div
              className="text-[10px] tracking-[3px] uppercase font-mono mb-3 inline-block px-3 py-1 border"
              style={{ color: current.color, borderColor: current.color + "50" }}
            >
              {current.tag}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-2xl mb-5">
              {current.headline}
            </h2>

            <p className="text-gray-300 text-sm font-body leading-relaxed max-w-lg mb-10">
              {current.description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
              {current.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="text-2xl sm:text-3xl font-display font-light text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[2px] uppercase text-gray-500 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => document.getElementById("audience")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[10px] sm:text-[11px] tracking-[3px] uppercase text-gray-400 hover:text-[#C9A84C] transition-colors font-mono group inline-flex items-center gap-2"
          >
            <span>Meet the Audience</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Dot nav */}
          <div className="flex gap-2">
            {attractions.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${
                  active === i ? "w-6 h-1.5 bg-[#C9A84C]" : "w-1.5 h-1.5 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
