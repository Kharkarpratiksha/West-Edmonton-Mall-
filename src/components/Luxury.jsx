import React from "react";
import { motion } from "framer-motion";

const luxuryBrands = [
  { name: "Hugo Boss", category: "Fashion & Apparel" },
  { name: "Tiffany & Co.", category: "Fine Jewellery" },
  { name: "Michael Kors", category: "Luxury Accessories" },
  { name: "Coach", category: "Leather Goods" },
  { name: "Swarovski", category: "Crystal & Jewellery" },
  { name: "Pandora", category: "Designer Jewellery" },
  { name: "Guess", category: "Premium Fashion" },
  { name: "Fossil", category: "Watches & Accessories" },
];

const offerings = [
  {
    title: "Private Shopping Sessions",
    desc: "By-appointment exclusive access for VIP clients.",
  },
  {
    title: "Flagship Leasing",
    desc: "Prime positions in WEM's luxury corridor.",
  },
  {
    title: "Pop-Up & Activation Spaces",
    desc: "Short-term spaces for launches & campaigns.",
  },
  {
    title: "VIP Concierge Program",
    desc: "Direct connection between shoppers & brands.",
  },
];

const Luxury = () => (
  <section className="h-screen bg-[#f5f0eb] flex items-center px-4 sm:px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto w-full flex flex-col justify-center h-full py-6 sm:py-10">

      {/* Label */}
      <p className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] text-stone-400 uppercase mb-2 sm:mb-3">
        Luxury & Premium
      </p>

      {/* Heading */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6 items-end">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-stone-900 font-serif leading-tight">
          Where Premium<br />
          <span className="italic text-stone-400">Brands Belong.</span>
        </h2>

        {/* hide on small screens */}
        <p className="hidden sm:block text-stone-500 text-sm leading-relaxed">
          WEM's luxury corridor attracts high-value shoppers with unmatched reach.
        </p>
      </div>

      {/* Ticker */}
      <div className="border-t border-b border-stone-200 py-2 sm:py-3 mb-4 sm:mb-6 overflow-hidden">
        <motion.div
          className="flex gap-6 sm:gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...luxuryBrands, ...luxuryBrands].map((b, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <span className="text-stone-800 font-light tracking-widest text-[10px] sm:text-xs">
                {b.name}
              </span>
              <span className="hidden sm:block text-stone-400 text-[10px] tracking-[2px] uppercase">
                {b.category}
              </span>
              <span className="text-stone-300 mx-2 sm:mx-3">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Offerings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
        {offerings.map((item, i) => (
          <div
            key={item.title}
            className="bg-[#f5f0eb] p-3 sm:p-5 hover:bg-stone-100 transition"
          >
            <p className="text-[9px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] text-stone-300 uppercase mb-1 sm:mb-2">
              0{i + 1}
            </p>

            <h3 className="text-stone-900 font-light text-xs sm:text-sm font-serif mb-1 sm:mb-2">
              {item.title}
            </h3>

            {/* hide description on very small screens */}
            <p className="hidden sm:block text-stone-500 text-[11px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Luxury;