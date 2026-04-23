import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const [index, setIndex] = useState(0);

  const events = [
    {
      type: 'Concerts & Live Music',
      img: '/events/concert.jpg',
      desc: 'Full-scale concert productions for 10,000+ audiences inside WEM\'s dedicated entertainment venues'
    },
    {
      type: 'Fashion Shows',
      img: '/events/fashion-shows.jpg',
      desc: 'Runway events and luxury brand launches with direct access to WEM\'s premium retail audience'
    },
    {
      type: 'Brand Activations',
      img: '/events/brand-activations.jpg',
      desc: 'High-traffic activation zones reaching 32M+ annual visitors across WEM\'s retail corridors'
    },
    {
      type: 'Corporate Events',
      img: '/events/corporate-events.jpg',
      desc: 'Conferences, product launches and networking events in premium spaces'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="events" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center px-4 py-16 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
          Events & Platform
        </p>

        <h2 className="text-3xl md:text-6xl font-light font-serif text-white">
          The Stage is <span className="italic text-gray-400">Already Set.</span>
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto">
          WEM hosts 500+ events annually — concerts, activations, corporate productions, and global launches.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-[360px] md:h-[420px] flex items-center justify-center">

        {events.map((item, i) => {
          const position = (i - index + events.length) % events.length;

          let x = 0;
          let scale = 0.85;
          let opacity = 0.4;
          let zIndex = 1;

          if (position === 0) {
            x = 0;
            scale = 1.1;
            opacity = 1;
            zIndex = 10;
          } else if (position === 1) {
            x = 180;
          } else if (position === events.length - 1) {
            x = -180;
          } else {
            x = 300;
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className="absolute cursor-pointer text-center w-[240px] md:w-[320px] flex flex-col items-center"
              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.5 }}
            >

              <img
                src={item.img}
                alt={item.type}
                className={`object-cover mb-4 rounded-sm transition-all duration-500 ${
                  position === 0
                    ? 'w-40 h-40 md:w-52 md:h-52'
                    : 'w-28 h-28 md:w-36 md:h-36'
                }`}
              />

              <h3 className="text-base md:text-lg font-light text-white">
                {item.type}
              </h3>

              <p className="text-xs md:text-sm text-gray-500 mt-2 px-2 md:px-3 leading-relaxed">
                {item.desc}
              </p>

              {position === 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 border border-white/30 text-white px-5 py-2 text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition"
                >
                  Book This Event
                </motion.button>
              )}

            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <button className="px-8 md:px-10 py-3 bg-white text-black text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition">
          Enquire About Event Booking
        </button>
      </div>

    </section>
  );
};

export default Events;