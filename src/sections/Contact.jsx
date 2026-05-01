import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#080808] text-white flex flex-col justify-center"
      style={{ minHeight: "100dvh" }}
    >
      <div className="absolute inset-0">
        <img
          src="/bg/mall.jpeg"
          alt="mall img background"
          className="w-full h-full object-cover opacity-20 ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]/40" />
      </div>

      <div className="relative z-10 px-5 sm:px-10 lg:px-16 py-16 sm:py-20 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[5px] uppercase text-[#C9A84C] mb-5 font-mono"
        >
          Let's Build Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.92] mb-7"
        >
          32 million reasons
          <br />
          to start the
          <br />
          <em className="text-[#C9A84C]">conversation.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 font-body max-w-md mb-10 leading-relaxed text-sm"
        >
          Whether you're a retailer, sponsor, or event organizer —
          WEM is the platform that performs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-7"
        >
          <div>
            <div className="text-[9px] sm:text-[10px] tracking-[3px] uppercase text-gray-500 font-mono mb-1">Address</div>
            <div className="text-xs sm:text-sm text-gray-300 font-body">8882 170 St NW</div>
            <div className="text-xs sm:text-sm text-gray-300 font-body">Edmonton, AB T5T 4J2</div>
          </div>
          <div>
            <div className="text-[9px] sm:text-[10px] tracking-[3px] uppercase text-gray-500 font-mono mb-1">Phone</div>
            <div className="text-xs sm:text-sm text-gray-300 font-body">(780) 444-5321</div>
          </div>
          <div>
            <div className="text-[9px] sm:text-[10px] tracking-[3px] uppercase text-gray-500 font-mono mb-1">Web</div>
            <div className="text-xs sm:text-sm text-gray-300 font-body">wem.ca</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-5 sm:right-16 text-right z-10">
        <div className="text-[#C9A84C] font-display text-base sm:text-lg">West Edmonton Mall</div>
        <div className="text-[9px] tracking-[3px] uppercase text-gray-600 font-mono">Canada's #1 Mall Since 1981</div>
      </div>
    </section>
  );
}
