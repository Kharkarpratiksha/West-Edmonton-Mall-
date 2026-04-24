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
  <section
    id="sponsorship"
    className="h-screen bg-[#0a0a0a] flex flex-col justify-center px-6 overflow-hidden"
  >
    <div className="max-w-6xl mx-auto w-full">

      {/* Label */}
      <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-3">
        Sponsorship & Partnerships
      </p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-light text-white font-serif leading-tight mb-3"
      >
        Partner With{" "}
        <span className="italic text-gray-400">32 Million People.</span>
      </motion.h2>

      {/* Description */}
      <p className="text-gray-500 text-sm max-w-xl leading-relaxed mb-8">
        WEM offers brands unmatched access to Canada's most diverse and
        high-value retail audience — at scale, with impact.
      </p>

      {/* Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0a0a0a] p-6 hover:bg-[#111] transition duration-300"
          >
            <p className="text-[11px] tracking-[3px] text-gray-700 uppercase mb-2">
              {tier.num}
            </p>
            <h3 className="text-white font-light text-lg font-serif mb-1">
              {tier.name}
            </h3>
            <p className="text-gray-500 text-[11px] tracking-[1px] uppercase mb-1">
              {tier.reach}
            </p>
            <p className="text-white/40 text-[11px] tracking-[1px] mb-4">
              {tier.price}
            </p>

            <ul className="space-y-1.5">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-px h-3 bg-white/20 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-[11px] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-3">
        <button className="px-8 py-2.5 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300">
          Start a Partnership Conversation
        </button>

        <button className="px-8 py-2.5 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
          Download Sponsorship Deck
        </button>
      </div>

    </div>
  </section>
);

export default Sponsorship;