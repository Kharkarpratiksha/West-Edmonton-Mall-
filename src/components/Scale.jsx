import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5.3M", label: "Square Feet", sub: "Largest mall in North America" },
  { value: "800+", label: "Stores & Services", sub: "Retail, dining & entertainment" },
  { value: "32M+", label: "Annual Visitors", sub: "More than NYC Times Square" },
  { value: "24K+", label: "Parking Stalls", sub: "Unmatched accessibility" },
];

const Scale = () => {
  return (
    <section className="h-screen bg-[#f5f0eb] flex items-center px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">

        {/* Label */}
        <p className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] text-stone-400 uppercase mb-3 sm:mb-5">
          The Scale
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-6xl font-light text-stone-900 font-serif leading-tight mb-6 sm:mb-10 max-w-2xl"
        >
          Nothing Else<br />
          <span className="italic text-stone-400">Comes Close.</span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f5f0eb] p-4 sm:p-6 md:p-8 hover:bg-stone-100 transition"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 mb-1 sm:mb-2">
                {s.value}
              </div>

              <div className="text-[9px] sm:text-[10px] tracking-[2px] text-stone-500 uppercase mb-1">
                {s.label}
              </div>

              {/* hide subtext on very small screens */}
              <div className="hidden sm:block text-[10px] text-stone-400 leading-snug">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Scale;