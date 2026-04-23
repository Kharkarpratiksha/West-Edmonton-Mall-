import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    title: 'Fitness & Wellness',
    desc: 'World-class gyms, spas, and wellness studios drawing health-conscious visitors daily.',
    img: '/lifestyle/Fitness-Wellness.jpg',
  },
  {
    title: 'Arts & Culture',
    desc: 'Galleries, live performances, and cultural programming that elevate the visitor experience.',
    img: '/lifestyle/Arts-Culture.jpg',
  },
  {
    title: 'Family Entertainment',
    desc: "Canada's largest indoor waterpark, ice rink, and attraction zone — all under one roof.",
    img: '/lifestyle/Family_Entertainment.jpg',
  },
  {
    title: 'Business & Meetings',
    desc: 'Premium meeting suites and co-working spaces for corporate tenants and event partners.',
    img: '/lifestyle/Business_Hub.jpg',
  },
  {
    title: 'Dining & Social',
    desc: '100+ restaurants and cafés creating the social heart of Edmonton.',
    img: '/lifestyle/food-court.jpg',
  },
];

const extended = [...slides, slides[0]];

const Lifestyle = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const slideWidth = typeof window !== "undefined"
    ? window.innerWidth < 768 ? 320 : 700
    : 700;

  useEffect(() => {
    const t = setInterval(() => {
      setAnimate(true);
      setIndex((p) => p + 1);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 500);
    }
  }, [index]);

  return (
    <section id="lifestyle" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center py-20 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-14 px-6">
        <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
          Beyond Retail
        </p>

        <h2 className="text-4xl md:text-7xl font-light text-white font-serif">
          A Complete <span className="italic text-gray-400">Lifestyle.</span>
        </h2>

        <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
          WEM is not a mall with extras — it's a lifestyle destination where retail is one of many reasons people come back.
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden px-4 md:px-6">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: `-${index * slideWidth}px` }}
          transition={animate ? { duration: 0.6, ease: 'easeInOut' } : { duration: 0 }}
        >
          {extended.map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[700px] h-[320px] md:h-[460px] rounded-sm overflow-hidden relative flex-shrink-0"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 right-4 md:right-8 text-white">
                <h3 className="text-xl md:text-3xl font-light font-serif mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {item.desc}
                </p>

                <button className="border border-white/30 text-white px-4 md:px-6 py-2 text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimate(true); setIndex(i); }}
            className={`transition-all duration-300 rounded-full ${
              i === index % slides.length
                ? 'bg-white w-6 h-1'
                : 'bg-gray-700 w-2 h-2'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Lifestyle;