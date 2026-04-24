import React from "react";
import { motion } from "framer-motion";

const restaurants = [
  { name: "Earls Kitchen",   tag: "Fine Casual",      img: "/dining/earls.jpg" },
  { name: "The Keg",         tag: "Steakhouse",        img: "/dining/keg.jpg" },
  { name: "Joey Restaurant", tag: "Modern Canadian",   img: "/dining/joey.jpg" },
];

const stats = [
  { value: "100+", label: "Restaurants & Cafés" },
  { value: "32M+", label: "Annual Visitors" },
  { value: "20+",  label: "Global Cuisines" },
  { value: "500K", label: "Sq Ft Dining Space" },
];

const Dining = () => (
  <section
    id="dining"
    className="h-screen bg-[#0a0a0a] flex flex-col justify-center px-6 overflow-hidden"
  >
    <div className="max-w-6xl mx-auto w-full">

      {/* Header */}
      <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-3">
        Dining & Food
      </p>

      <h2 className="text-4xl md:text-5xl font-light text-white font-serif leading-tight mb-3 max-w-2xl">
        100+ Ways to{" "}
        <span className="italic text-gray-400">Savour the Moment.</span>
      </h2>

      <p className="text-gray-500 text-sm max-w-xl leading-relaxed mb-6">
        From quick bites to white-tablecloth dining — WEM's food scene drives
        dwell time and repeat visits for every retail partner.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0a0a0a] p-4 text-center">
            <div className="text-2xl md:text-3xl font-light text-white">{s.value}</div>
            <div className="text-[10px] tracking-[2px] text-gray-600 uppercase mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Restaurant Images */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {restaurants.map((r) => (
          <div
            key={r.name}
            className="relative h-44 overflow-hidden rounded-sm group"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => { e.target.style.opacity = "0.2"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white text-sm tracking-wide">{r.name}</p>
              <p className="text-gray-500 text-[10px] tracking-[1px] uppercase mt-1">{r.tag}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3">
        <button className="px-8 py-2.5 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300">
          Explore Dining Partners
        </button>
        <button className="px-8 py-2.5 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
          Leasing Enquiry — F&B
        </button>
      </div>

    </div>
  </section>
);

export default Dining;