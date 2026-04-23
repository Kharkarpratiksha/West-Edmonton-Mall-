import React from "react";
import { motion } from "framer-motion";

const luxuryBrands = [
  { name: "Hugo Boss",     category: "Fashion & Apparel" },
  { name: "Tiffany & Co.", category: "Fine Jewellery" },
  { name: "Michael Kors",  category: "Luxury Accessories" },
  { name: "Coach",         category: "Leather Goods" },
  { name: "Swarovski",     category: "Crystal & Jewellery" },
  { name: "Pandora",       category: "Designer Jewellery" },
  { name: "Guess",         category: "Premium Fashion" },
  { name: "Fossil",        category: "Watches & Accessories" },
];

const offerings = [
  {
    title: "Private Shopping Sessions",
    desc: "By-appointment exclusive access for VIP clients — curated, unhurried, and fully staffed.",
  },
  {
    title: "Flagship Leasing",
    desc: "Prime ground-floor flagship positions in WEM's dedicated luxury corridor — unmatched foot traffic of 32M+ annually.",
  },
  {
    title: "Pop-Up & Activation Spaces",
    desc: "Short-term high-visibility spaces for product launches, brand activations, and seasonal campaigns.",
  },
  {
    title: "VIP Concierge Program",
    desc: "Dedicated concierge services connecting luxury shoppers directly to your brand — driving conversion and loyalty.",
  },
];

const Luxury = () => (
  <section
    id="luxury"
    className="min-h-screen bg-[#f5f0eb] flex flex-col justify-center py-24 px-6 overflow-hidden"
  >
    <div className="max-w-6xl mx-auto w-full">

      {/* Label */}
      <p className="text-[11px] tracking-[4px] text-stone-400 uppercase mb-6">
        Luxury & Premium
      </p>

      {/* Heading + Intro */}
      <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-light text-stone-900 font-serif leading-tight"
        >
          Where Premium<br />
          Brands{" "}
          <span className="italic text-stone-400">Belong.</span>
        </motion.h2>

        <div>
          <p className="text-stone-500 text-base leading-relaxed mb-6">
            West Edmonton Mall's luxury corridor attracts Canada's most
            affluent shoppers. With 32M+ annual visitors and a dedicated
            premium wing, WEM offers luxury brands unrivalled reach
            without compromising exclusivity.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-stone-900 text-white text-[11px] tracking-[3px] uppercase hover:bg-stone-700 transition duration-300">
              Inquire About Flagship Leasing
            </button>
            <button className="px-8 py-3 border border-stone-300 text-stone-900 text-[11px] tracking-[3px] uppercase hover:bg-stone-900 hover:text-white transition duration-300">
              Download Luxury Deck
            </button>
          </div>
        </div>
      </div>

      {/* Ticker strip */}
      <div className="border-t border-b border-stone-200 py-6 mb-20 overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...luxuryBrands, ...luxuryBrands].map((b, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <span className="text-stone-800 font-light tracking-widest text-sm">
                {b.name}
              </span>
              <span className="text-stone-400 text-[10px] tracking-[2px] uppercase">
                {b.category}
              </span>
              <span className="text-stone-300 mx-4">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-16">
        {offerings.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#f5f0eb] p-10 group hover:bg-stone-100 transition duration-300"
          >
            <p className="text-[11px] tracking-[3px] text-stone-300 uppercase mb-4">
              0{i + 1}
            </p>
            <h3 className="text-stone-900 font-light text-xl mb-3 font-serif">
              {item.title}
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom stat bar */}
      <div className="grid grid-cols-3 gap-px bg-stone-200 border border-stone-200">
        {[
          { value: "32M+",  label: "Annual Visitors" },
          { value: "Top 3", label: "Retail Destination in Canada" },
          { value: "40+",   label: "Years of Luxury Retail Heritage" },
        ].map((s) => (
          <div key={s.label} className="bg-[#f5f0eb] px-8 py-6 text-center">
            <div className="text-2xl font-light text-stone-900 mb-1">{s.value}</div>
            <div className="text-[11px] tracking-[2px] text-stone-400 uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Luxury;