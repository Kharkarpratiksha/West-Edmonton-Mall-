import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '5.3M', label: 'Square Feet', sub: 'Largest mall in North America' },
  { value: '800+', label: 'Stores & Services', sub: 'Retail, dining & entertainment' },
  { value: '32M+', label: 'Annual Visitors', sub: 'More than NYC Times Square' },
  { value: '24K+', label: 'Parking Stalls', sub: 'Unmatched accessibility' },
];

const Scale = () => (
  <section className="min-h-screen bg-[#f5f0eb] flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-20">
    <div className="max-w-6xl mx-auto w-full">

      {/* Label */}
      <p className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] text-stone-400 uppercase mb-4 sm:mb-6">
        The Scale
      </p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-3xl sm:text-5xl md:text-7xl font-light text-stone-900 font-serif leading-tight mb-4 sm:mb-6 max-w-3xl"
      >
        Nothing Else<br />
        <span className="italic text-stone-400">Comes Close.</span>
      </motion.h2>

      <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-10 sm:mb-16 max-w-xl">
        West Edmonton Mall isn't just the largest mall in North America —
        it's a city unto itself. The numbers speak for themselves.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-10 sm:mb-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#f5f0eb] p-6 sm:p-8 group hover:bg-stone-100 transition duration-300"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-900 mb-2">
              {s.value}
            </div>
            <div className="text-[10px] sm:text-[11px] tracking-[2px] text-stone-500 uppercase mb-2">
              {s.label}
            </div>
            <div className="text-[10px] sm:text-[11px] text-stone-400 leading-relaxed">
              {s.sub}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
        {[
          { label: 'Location', value: 'Edmonton, Alberta, Canada' },
          { label: 'Opened', value: '1981 — Over 40 Years of Dominance' },
          { label: 'Catchment Area', value: '2M+ residents within 3-hour drive' },
        ].map((item) => (
          <div key={item.label} className="bg-[#f5f0eb] px-6 sm:px-8 py-5 sm:py-6">
            <div className="text-[10px] sm:text-[11px] tracking-[2px] text-stone-400 uppercase mb-2">
              {item.label}
            </div>
            <div className="text-stone-800 font-light text-sm sm:text-base">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 sm:mt-12">
        <button className="w-full sm:w-auto px-8 sm:px-10 py-3 border border-stone-300 text-stone-900 text-[10px] sm:text-[11px] tracking-[3px] uppercase hover:bg-stone-900 hover:text-white transition duration-300">
          Download Property Overview
        </button>
      </div>

    </div>
  </section>
);

export default Scale;