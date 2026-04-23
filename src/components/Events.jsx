import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const [index, setIndex] = useState(0);

  const events = [
    {
      type: 'Concerts',
      img: '/events/concert.jpg',
      desc: 'Major music festivals and artist performances'
    },
    {
      type: 'Fashion Shows',
      img: '/events/fashion-shows.jpg',
      desc: 'Luxury brand launches and runway events'
    },
    {
      type: 'Brand Activations',
      img: '/events/brand-activations.jpg',
      desc: 'Interactive marketing campaigns and experiences'
    },
    {
      type: 'Corporate Events',
      img: '/events/corporate-events.jpg',
      desc: 'Conferences, product launches, and networking'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-[#f8f6f2] flex flex-col justify-center items-center px-4 py-16 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl md:text-6xl font-serif text-gray-800">
          Unveil Infinite Luxury
        </h2>
        <p className="text-xl text-yellow-600 italic mt-2">
          Experiences
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-[420px] flex items-center justify-center -mt-4">

        {events.map((item, i) => {
          const position = (i - index + events.length) % events.length;

          let x = 0;
          let scale = 0.85;
          let opacity = 0.4;
          let zIndex = 1;

          if (position === 0) {
            x = 0;
            scale = 1.15;
            opacity = 1;
            zIndex = 10;
          } else if (position === 1) {
            x = 280;
          } else if (position === events.length - 1) {
            x = -280;
          } else {
            x = 600;
            opacity = 0;
          }

          return (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              className="absolute cursor-pointer text-center w-[260px] md:w-[320px] flex flex-col items-center"
              
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  setIndex((prev) => (prev + 1) % events.length);
                } else if (info.offset.x > 50) {
                  setIndex((prev) =>
                    prev === 0 ? events.length - 1 : prev - 1
                  );
                }
              }}

              animate={{ x, scale, opacity, zIndex }}
              transition={{ duration: 0.5 }}
            >

              {/* IMAGE (Dynamic Size) */}
              <img
                src={item.img}
                alt={item.type}
                className={`object-contain mb-4 transition-all duration-500 ${
                  position === 0
                    ? 'w-44 h-44 md:w-52 md:h-52'
                    : 'w-32 h-32 md:w-36 md:h-36'
                }`}
              />

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-800">
                {item.type}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-600 mt-2 px-3">
                {item.desc}
              </p>

              {/* BUTTON ONLY FOR ACTIVE */}
              {position === 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 border border-gray-800 text-gray-800 px-5 py-2 text-sm hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-full"
                >
                  Explore More
                </motion.button>
              )}

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default Events;