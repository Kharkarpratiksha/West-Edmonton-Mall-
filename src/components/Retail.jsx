import React from 'react';
import { motion } from 'framer-motion';

const Retail = () => {
  const brands = [
    { name: 'Nike', img: '/brands/Nike-img.jpg' },
    { name: 'Zara', img: '/brands/Zara-img.jpg' },
    { name: 'H&M', img: '/brands/H&M.jpg' },
    { name: 'Apple', img: '/brands/Apple-img.jpg' },
    { name: 'Starbucks', img: '/brands/Starbucks-img.jpg' },
    { name: 'Sephora', img: '/brands/Sephora-img.jpg' },
    { name: 'Adidas', img: '/brands/Adidas-img.jpg' },
  ];

  return (
    <section id="retail" className="h-screen bg-black text-white flex flex-col justify-center overflow-hidden pt-10 md:pt-14">
      
      {/* Heading */}
      <div className="text-center mb-10 px-6">
        <h2 className="text-5xl md:text-7xl font-bold">
          A Global Retail Destination
        </h2>
        <p className="text-gray-400 mt-4">
          Home to world-class brands and premium experiences
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] h-[400px] rounded-2xl overflow-hidden relative"
            >
              {/* Image */}
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text on Image */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-semibold">
                  {brand.name}
                </h3>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom text */}
      <div className="text-center mt-8 text-gray-400">
        And 300+ more premium brands
      </div>

    </section>
  );
};

export default Retail;