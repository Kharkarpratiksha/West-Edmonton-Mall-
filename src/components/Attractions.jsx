import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const attractions = [
  {
    title: 'World Waterpark',
    label: 'Aquatic Entertainment',
    description:
      "Canada's largest indoor waterpark — 5 acres of year-round thrills drawing families from across the continent.",
    video:
      'https://res.cloudinary.com/du5io3wiz/video/upload/v1776934603/World-Waterpark1_qfxxkk.mp4',
    features: [
      '50+ Water Slides',
      'Wave Pools',
      'Lazy River',
      'Year-Round Operation',
    ],
    stat: '1M+ riders/year',
    slug: 'world-waterpark',
  },
  {
    title: 'Galaxyland',
    label: 'Amusement Park',
    description:
      "One of Canada's largest indoor amusement parks — 30+ rides, live entertainment, and family programming 365 days a year.",
    video:
      'https://res.cloudinary.com/du5io3wiz/video/upload/q_auto/f_auto/v1776934747/Amusement1_bmgutg.mp4',
    features: [
      '30+ Rides & Attractions',
      'Family Zones',
      'Live Entertainment',
      'Seasonal Events',
    ],
    stat: '800K+ visitors/year',
    slug: 'galaxyland',
  },
];

const Attractions = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section
      id="attractions"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden py-16 md:py-0"
    >
      {/* Video */}
      <video
        key={active}
        className="absolute inset-0 w-full h-full object-cover"
        src={attractions[active].video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">

          <motion.div
            key={active}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Label */}
            <p className="text-[10px] md:text-[11px] tracking-[3px] md:tracking-[4px] text-gray-500 uppercase mb-3 md:mb-4">
              {attractions[active].label}
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white font-serif leading-tight mb-3 md:mb-4">
              {attractions[active].title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md">
              {attractions[active].description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8">
              {attractions[active].features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <div className="w-px h-3 bg-white/40" />
                  <span className="text-gray-400 text-[10px] md:text-[11px] tracking-[1px] uppercase">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="border-l border-white/20 pl-4 mb-6 md:mb-8">
              <p className="text-white text-lg md:text-xl font-light">
                {attractions[active].stat}
              </p>
              <p className="text-gray-600 text-[10px] md:text-[11px] tracking-[2px] uppercase mt-1">
                Attraction Scale
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

              <button
                onClick={() =>
                  navigate(`/attractions/${attractions[active].slug}`)
                }
                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-white text-black text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300"
              >
                Book a Group Visit
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {attractions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full ${
                      active === i
                        ? 'w-6 h-1 bg-white'
                        : 'w-2 h-2 bg-gray-600'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

          <div />
        </div>
      </div>
    </section>
  );
};

export default Attractions;