import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Lifestyle = () => {
  const slides = [
    {
      title: 'Fitness & Wellness',
      desc: 'State-of-the-art gyms and spa facilities',
      img: '/lifestyle/Fitness-Wellness.jpg',
    },
    {
      title: 'Arts & Culture',
      desc: 'Galleries, theaters, and cultural events',
      img: '/lifestyle/Arts-Culture.jpg',
    },
    {
      title: 'Family Entertainment',
      desc: 'Kid-friendly zones and family activities',
      img: '/lifestyle/Family_Entertainment.jpg',
    },
    {
      title: 'Business Hub',
      desc: 'Meeting spaces and co-working areas',
      img: '/lifestyle/Business_Hub.jpg',
    },
    {
      title: 'Dining Experience',
      desc: 'Fine dining restaurants, cafes, and global cuisines',
      img: '/lifestyle/food-court.jpg',
    }
  ];

  const extendedSlides = [...slides, slides[0]];
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === slides.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500);
    }
  }, [index]);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center py-20 md:py-28">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-bold text-gray-900">
          Lifestyle Destination
        </h2>
        <p className="text-gray-600 mt-4">
          More than shopping – a complete lifestyle experience
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * 720}px` }}
          transition={isTransitioning ? { duration: 0.5 } : { duration: 0 }}
        >
          {extendedSlides.map((item, i) => (
            <div
              key={i}
              className="min-w-[450px] md:min-w-[700px] h-[460px] rounded-2xl overflow-hidden relative shadow-xl"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover brightness-75"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-end pb-12 px-6 text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm mt-2 mb-4">
                    {item.desc}
                  </p>

                  <button className="border border-white text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index % slides.length ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Lifestyle;