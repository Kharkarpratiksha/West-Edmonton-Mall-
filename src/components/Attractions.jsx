import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Attractions = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const attractions = [
    {
      title: 'World Waterpark',
      description: "Canada's largest indoor waterpark with thrilling slides and wave pools",
      video: 'https://res.cloudinary.com/du5io3wiz/video/upload/v1776934603/World-Waterpark1_qfxxkk.mp4',
      features: ['50+ Water Slides', 'Wave Pools', 'Lazy River', 'Year-Round Fun']
    },
    {
      title: 'Galaxyland',
      description: "Edmonton's premier amusement park with rides for all ages",
      video: 'https://res.cloudinary.com/du5io3wiz/video/upload/q_auto/f_auto/v1776934747/Amusement1_bmgutg.mp4',
      features: ['30+ Rides', 'Family Attractions', 'Live Entertainment', 'Seasonal Events']
    }
  ];

  return (
    <section className="relative h-screen flex items-center justify-center bg-slate-200 overflow-hidden">

      {/* VIDEO */}
      <video
        key={activeVideo}
        className="absolute right-0 top-0 w-full lg:w-2/3 h-full object-cover"
        src={attractions[activeVideo].video}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0B1C2C] text-white p-10 md:p-12 rounded-xl shadow-2xl max-w-lg"
          >
            <p className="text-sm text-gray-400 mb-3">Amazing Experience</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              {attractions[activeVideo].title}
            </h2>

            <p className="text-gray-300 mb-6">
              {attractions[activeVideo].description}
            </p>

            {/* FEATURES */}
            <ul className="space-y-2 mb-6">
              {attractions[activeVideo].features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* BUTTON + DOTS */}
            <div className="flex items-center gap-4">
              
              <button className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300">
                Play Video
              </button>

              <div className="flex gap-2 ml-4">
                {attractions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVideo(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      activeVideo === index ? 'bg-white' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

          <div></div>

        </div>
      </div>
    </section>
  );
};

export default Attractions;