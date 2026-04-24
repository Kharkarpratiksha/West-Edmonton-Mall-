import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Nike',      tag: 'Flagship · Sportswear', img: '/brands/Nike-img.jpg' },
  { name: 'Zara',      tag: 'Global Fashion',         img: '/brands/Zara-img.jpg' },
  { name: 'H&M',       tag: 'Fast Fashion',           img: '/brands/H&M.jpg' },
  { name: 'Apple',     tag: 'Premium Tech',           img: '/brands/Apple-img.jpg' },
  { name: 'Starbucks', tag: 'Lifestyle & Café',       img: '/brands/Starbucks-img.jpg' },
  { name: 'Sephora',   tag: 'Beauty & Wellness',      img: '/brands/Sephora-img.jpg' },
  { name: 'Adidas',    tag: 'Sport Lifestyle',        img: '/brands/Adidas-img.jpg' },
];

const BrandCard = ({ brand }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative w-[220px] h-[300px] rounded-sm overflow-hidden bg-[#111] border border-[#1a1a1a] flex-shrink-0"
  >
    <img
      src={brand.img}
      alt={brand.name}
      className="w-full h-full object-cover"
      onError={(e) => (e.target.style.opacity = '0')}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-4 left-4">
      <p className="text-white text-xs tracking-[2px] uppercase">{brand.name}</p>
      <p className="text-gray-500 text-[10px] tracking-[1px] mt-1">{brand.tag}</p>
    </div>
  </motion.div>
);

const Retail = () => (
  <section
    id="retail"
    className="h-screen bg-black flex flex-col justify-center overflow-hidden"
  >

    {/* Heading */}
    <div className="text-center mb-8 px-6">
      <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-3">
        Retail Ecosystem
      </p>
      <h2 className="text-4xl md:text-6xl font-light text-white font-serif">
        800+ Stores. One{' '}
        <span className="italic text-gray-400">Destination.</span>
      </h2>
      <p className="text-gray-600 mt-3 text-sm max-w-lg mx-auto">
        North America's most powerful retail concentration — from global flagships to exclusive local concepts.
      </p>
    </div>

    {/* Marquee */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4 px-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {[...brands, ...brands].map((brand, i) => (
          <BrandCard key={i} brand={brand} />
        ))}
      </motion.div>
    </div>

    {/* Bottom */}
    <div className="text-center mt-8 px-6">
      <p className="text-white font-light text-base mb-1">
        <span className="font-normal">800+ stores</span> — the largest retail roster in North America.
      </p>
      <p className="text-[11px] tracking-[3px] text-gray-600 uppercase mb-5">
        Luxury · Fashion · Tech · F&B · Entertainment
      </p>
    </div>

  </section>
);

export default Retail;