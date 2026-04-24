import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const events = [
  { type: 'Concerts & Live Music', img: '/events/concert.jpg',          desc: "Full-scale concert productions for 10,000+ audiences inside WEM's dedicated entertainment venues" },
  { type: 'Fashion Shows',         img: '/events/fashion-shows.jpg',     desc: "Runway events and luxury brand launches with direct access to WEM's premium retail audience" },
  { type: 'Brand Activations',     img: '/events/brand-activations.jpg', desc: "High-traffic activation zones reaching 32M+ annual visitors across WEM's retail corridors" },
  { type: 'Corporate Events',      img: '/events/corporate-events.jpg',  desc: "Conferences, product launches and networking events in premium spaces" },
];

const Events = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % events.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="events" className="h-screen bg-[#0a0a0a] flex flex-col justify-center items-center px-4 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-3">
          Events & Platform
        </p>
        <h2 className="text-4xl md:text-5xl font-light font-serif text-white">
          The Stage is{' '}
          <span className="italic text-gray-400">Already Set.</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
          WEM hosts 500+ events annually — concerts, activations, corporate productions, and global launches.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl h-[320px] flex items-center justify-center">
        {events.map((item, i) => {
          const position = (i - index + events.length) % events.length;

          let x = 0, scale = 0.85, opacity = 0.4, zIndex = 1;
          if (position === 0)                    { x = 0;    scale = 1.1; opacity = 1; zIndex = 10; }
          else if (position === 1)               { x = 200; }
          else if (position === events.length-1) { x = -200; }
          else                                   { x = 400;  opacity = 0; }

          return (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className="absolute cursor-pointer text-center w-[240px] md:w-[280px] flex flex-col items-center"
              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt={item.type}
                className={`object-cover mb-3 rounded-sm transition-all duration-500 ${
                  position === 0 ? 'w-40 h-40' : 'w-28 h-28'
                }`}
                onError={(e) => { e.target.style.opacity = '0.2'; }}
              />
              <h3 className="text-sm font-light text-white tracking-wide">{item.type}</h3>
              <p className="text-xs text-gray-500 mt-1 px-3 leading-relaxed">{item.desc}</p>

              {position === 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 border border-white/30 text-white px-5 py-1.5 text-[10px] tracking-[3px] uppercase hover:bg-white hover:text-black transition"
                >
                  Book This Event
                </motion.button>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <button className="px-10 py-2.5 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition">
          Enquire About Event Booking
        </button>
      </div>

    </section>
  );
};

export default Events;