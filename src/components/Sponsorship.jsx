import React from "react";
import { motion } from "framer-motion";

const tiers = [
  {
    num: "01",
    name: "Title Sponsor",
    reach: "32M+ annual impressions",
    price: "Custom Package",
    includes: [
      "Naming rights on key venue",
      "Digital & physical branding throughout",
      "Dedicated activation space year-round",
      "VIP hospitality & event access",
    ],
  },
  {
    num: "02",
    name: "Premier Partner",
    reach: "15M+ targeted impressions",
    price: "From $500K",
    includes: [
      "Prime corridor branding",
      "Event co-branding rights",
      "Social media integration",
      "Quarterly brand activations",
    ],
  },
  {
    num: "03",
    name: "Brand Activator",
    reach: "5M+ footfall exposure",
    price: "From $150K",
    includes: [
      "Pop-up activation space",
      "Campaign signage rights",
      "One signature event per year",
      "Digital placement package",
    ],
  },
];

const Sponsorship = () => (
  <section className="h-screen bg-[#0a0a0a] flex items-center px-4 sm:px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto w-full">

      {/* HEADER */}
      <div className="mb-4 sm:mb-6">
        <p className="text-[10px] tracking-[3px] text-gray-600 uppercase mb-2">
          Sponsorship & Partnerships
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl font-light text-white font-serif leading-tight"
        >
          Partner With{" "}
          <span className="italic text-gray-400">32 Million People.</span>
        </motion.h2>

        {/* hide on small screens */}
        <p className="hidden sm:block text-gray-500 text-sm max-w-xl mt-2">
          WEM offers brands unmatched access to a high-value audience.
        </p>
      </div>

      {/* TIERS */}
      <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-px overflow-x-auto md:overflow-visible no-scrollbar">

        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="min-w-[260px] md:min-w-0 bg-[#0a0a0a] border border-[#1a1a1a] md:border-0 p-4 sm:p-6 hover:bg-[#111] transition"
          >
            <p className="text-[10px] tracking-[2px] text-gray-700 uppercase mb-1">
              {tier.num}
            </p>

            <h3 className="text-white font-light text-base sm:text-lg font-serif mb-1">
              {tier.name}
            </h3>

            <p className="text-gray-500 text-[10px] uppercase mb-1">
              {tier.reach}
            </p>

            <p className="text-white/40 text-[10px] mb-3">
              {tier.price}
            </p>

            <ul className="space-y-1">
              {tier.includes.map((item, idx) => (
                <li
                  key={idx}
                  className={`flex gap-2 ${
                    idx > 1 ? "hidden sm:flex" : "" // hide extra items on mobile
                  }`}
                >
                  <div className="w-px h-3 bg-white/20 mt-1" />
                  <span className="text-gray-600 text-[10px] leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button className="w-full sm:w-auto px-6 py-2 bg-white text-black text-[10px] uppercase">
          Start Partnership
        </button>

        {/* hide secondary CTA on mobile */}
        <button className="hidden sm:block px-6 py-2 border border-white/20 text-white text-[10px] uppercase">
          Download Deck
        </button>
      </div>

    </div>
  </section>
);

export default Sponsorship;