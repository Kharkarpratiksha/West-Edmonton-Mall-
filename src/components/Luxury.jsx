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
  { title: "Private Shopping Sessions", desc: "By-appointment exclusive access for VIP clients — curated, unhurried, and fully staffed." },
  { title: "Flagship Leasing",          desc: "Prime ground-floor flagship positions in WEM's dedicated luxury corridor — 32M+ annual visitors." },
  { title: "Pop-Up & Activation Spaces",desc: "Short-term high-visibility spaces for product launches, brand activations, and seasonal campaigns." },
  { title: "VIP Concierge Program",     desc: "Dedicated concierge services connecting luxury shoppers directly to your brand." },
];

const Luxury = () => (
  <section
    id="luxury"
    className="h-screen bg-[#f5f0eb] flex flex-col justify-center px-6 overflow-hidden"
  >
    <div className="max-w-6xl mx-auto w-full">

      {/* Label */}
      <p className="text-[11px] tracking-[4px] text-stone-400 uppercase mb-3">
        Luxury & Premium
      </p>

      {/* Heading + Intro */}
      <div className="grid md:grid-cols-2 gap-8 mb-6 items-end">
        <h2 className="text-4xl md:text-5xl font-light text-stone-900 font-serif leading-tight">
          Where Premium<br />
          <span className="italic text-stone-400">Brands Belong.</span>
        </h2>
        <div>
          <p className="text-stone-500 text-sm leading-relaxed mb-4">
            WEM's luxury corridor attracts Canada's most affluent shoppers.
            32M+ annual visitors, dedicated premium wing — unrivalled reach
            without compromising exclusivity.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2.5 bg-stone-900 text-white text-[11px] tracking-[3px] uppercase hover:bg-stone-700 transition duration-300">
              Inquire About Flagship Leasing
            </button>
            <button className="px-6 py-2.5 border border-stone-300 text-stone-900 text-[11px] tracking-[3px] uppercase hover:bg-stone-900 hover:text-white transition duration-300">
              Download Luxury Deck
            </button>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-b border-stone-200 py-3 mb-6 overflow-hidden">
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...luxuryBrands, ...luxuryBrands].map((b, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <span className="text-stone-800 font-light tracking-widest text-xs">{b.name}</span>
              <span className="text-stone-400 text-[10px] tracking-[2px] uppercase">{b.category}</span>
              <span className="text-stone-300 mx-3">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Offerings Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
        {offerings.map((item, i) => (
          <div key={item.title} className="bg-[#f5f0eb] p-5 hover:bg-stone-100 transition duration-300">
            <p className="text-[11px] tracking-[3px] text-stone-300 uppercase mb-2">0{i + 1}</p>
            <h3 className="text-stone-900 font-light text-sm font-serif mb-2">{item.title}</h3>
            <p className="text-stone-500 text-[11px] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Luxury;