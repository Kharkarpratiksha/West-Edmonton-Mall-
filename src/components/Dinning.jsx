import React from 'react';
import { motion } from 'framer-motion';

const restaurants = [
  { name: 'Earls Kitchen',     tag: 'Fine Casual',      img: '/dining/earls.jpg' },
  { name: 'The Keg',           tag: 'Steakhouse',       img: '/dining/keg.jpg' },
  { name: 'Joey Restaurant',   tag: 'Modern Canadian',  img: '/dining/joey.jpg' },
  { name: 'Milestones',        tag: 'Contemporary',     img: '/dining/milestones.jpg' },
  { name: 'Booster Juice',     tag: 'Health & Fresh',   img: '/dining/booster.jpg' },
  { name: 'Elephant & Castle', tag: 'Pub & Grill',      img: '/dining/elephant.jpg' },
];

const stats = [
  { value: '100+', label: 'Restaurants & Cafés' },
  { value: '32M+', label: 'Annual Visitors' },
  { value: '20+',  label: 'Global Cuisines' },
  { value: '500K', label: 'Sq Ft Dining Space' },
];

const Dining = () => (
  <section id="dining" className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center py-20 px-6">
    <div className="max-w-6xl mx-auto w-full">

      {/* Header */}
      <div className="mb-16">
        <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
          Dining & Food
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-light text-white font-serif leading-tight mb-6 max-w-2xl"
        >
          100+ Ways to{' '}
          <span className="italic text-gray-400">Savour the Moment.</span>
        </motion.h2>
        <p className="text-gray-500 max-w-xl leading-relaxed">
          From quick bites to white-tablecloth dining — WEM's food scene
          is a destination in itself, driving dwell time and repeat visits
          for every retail partner.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0a0a0a] p-6">
            <div className="text-4xl font-light text-white">{s.value}</div>
            <div className="text-[11px] tracking-[2px] text-gray-600 uppercase mt-2">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
        {restaurants.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative h-56 overflow-hidden rounded-sm group"
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              onError={(e) => { e.target.style.opacity = '0'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-sm tracking-wide">{r.name}</p>
              <p className="text-gray-500 text-[10px] tracking-[1px] uppercase mt-1">{r.tag}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4">
        <button className="px-10 py-3 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300">
          Explore Dining Partners
        </button>
        <button className="px-10 py-3 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
          Leasing Enquiry — F&B
        </button>
      </div>

    </div>
  </section>
);

export default Dining;