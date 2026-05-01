import React from "react";
import { motion } from "framer-motion";
import { scaleStats } from "../data/stats";
import AnimatedNumber from "../components/AnimatedNumber";

export default function Scale() {
  return (
    <section
      id="scale"
      className="relative w-full overflow-hidden bg-[#F5F0E8] flex flex-col justify-center"
      style={{ minHeight: "100dvh" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8A7F72 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#8A7F72] mb-4 font-mono"
        >
          The Scale
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1a1a1a] mb-3 leading-tight"
        >
          Numbers that make
          <br />
          <em>competitors irrelevant.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#8A7F72] mb-10 sm:mb-14 font-body max-w-md text-sm"
        >
          The largest mall in North America — and the numbers prove it.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 sm:gap-x-16 gap-y-8 sm:gap-y-10">
          {scaleStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2 }}
              className="group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-[#1a1a1a] mb-1">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-[10px] tracking-[3px] uppercase text-[#8A7F72] mb-2 font-mono">
                {stat.label}
              </div>
              <div className="w-8 h-px bg-[#C9A84C] mb-2 group-hover:w-16 transition-all duration-500" />
              <div className="text-xs text-[#8A7F72] font-body leading-relaxed">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
