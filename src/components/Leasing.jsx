import React, { useState } from "react";
import { motion } from "framer-motion";

const leasingTypes = [
  {
    num: "01",
    type: "Flagship",
    size: "5,000 – 20,000 sq ft",
    location: "Main corridors & anchor positions",
    ideal: "Global retail brands, department stores",
    traffic: "32M+ annual visitors",
    cta: "Apply for Flagship Space",
  },
  {
    num: "02",
    type: "Standard Retail",
    size: "500 – 5,000 sq ft",
    location: "All retail zones across WEM",
    ideal: "Fashion, electronics, specialty retail",
    traffic: "High foot traffic corridors",
    cta: "Enquire About Retail Space",
  },
  {
    num: "03",
    type: "F&B",
    size: "200 – 3,000 sq ft",
    location: "Dining districts & food court",
    ideal: "Restaurants, cafés, fast casual",
    traffic: "100+ dining neighbours",
    cta: "Enquire About F&B Space",
  },
  {
    num: "04",
    type: "Pop-Up",
    size: "100 – 500 sq ft",
    location: "High-traffic corridors & atriums",
    ideal: "Brand activations, seasonal concepts",
    traffic: "Flexible 1-week to 6-month terms",
    cta: "Book a Pop-Up Space",
  },
];

const Leasing = () => {
  const [active, setActive] = useState(0);
  const selected = leasingTypes[active];

  return (
    <section
      id="leasing"
      className="h-screen bg-[#f5f0eb] flex flex-col justify-center px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Label */}
        <p className="text-[11px] tracking-[4px] text-stone-400 uppercase mb-3">
          Leasing Opportunities
        </p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-light text-stone-900 font-serif leading-tight mb-3"
        >
          Find Your Space{" "}
          <span className="italic text-stone-400">at WEM.</span>
        </motion.h2>

        <p className="text-stone-500 text-sm max-w-xl leading-relaxed mb-6">
          From global flagship positions to flexible pop-up spaces —
          WEM offers leasing options for every brand at every stage.
        </p>

        {/* Tab Selector */}
        <div className="flex gap-px bg-stone-200 border border-stone-200 w-fit mb-6">
          {leasingTypes.map((t, i) => (
            <button
              key={t.type}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 text-[11px] tracking-[2px] uppercase transition duration-300 ${
                active === i
                  ? "bg-stone-900 text-white"
                  : "bg-[#f5f0eb] text-stone-500 hover:text-stone-900"
              }`}
            >
              {t.type}
            </button>
          ))}
        </div>

        {/* Selected Detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-6"
        >
          {/* Left — details */}
          <div className="bg-[#f5f0eb] p-8">
            <p className="text-[11px] tracking-[3px] text-stone-300 uppercase mb-3">
              {selected.num}
            </p>
            <h3 className="text-stone-900 font-light text-2xl font-serif mb-6">
              {selected.type} Space
            </h3>

            <div className="space-y-4">
              {[
                { label: "Size Range",   value: selected.size },
                { label: "Location",     value: selected.location },
                { label: "Ideal For",    value: selected.ideal },
                { label: "Advantage",    value: selected.traffic },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-px bg-stone-200 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[2px] text-stone-400 uppercase mb-0.5">{item.label}</p>
                    <p className="text-stone-700 text-sm font-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA panel */}
          <div className="bg-stone-100 p-8 flex flex-col justify-between">
            <div>
              <p className="text-[11px] tracking-[3px] text-stone-400 uppercase mb-3">
                Next Step
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Our leasing team will respond within 2 business days with
                available spaces, floor plans, and pricing tailored to your brand.
              </p>
            </div>
            <div className="space-y-3">
              <button className="w-full py-3 bg-stone-900 text-white text-[11px] tracking-[3px] uppercase hover:bg-stone-700 transition duration-300">
                {selected.cta}
              </button>
              <button className="w-full py-3 border border-stone-300 text-stone-900 text-[11px] tracking-[3px] uppercase hover:bg-stone-900 hover:text-white transition duration-300">
                Download Leasing Guide
              </button>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Leasing;