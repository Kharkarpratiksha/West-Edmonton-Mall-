import React from 'react';
import { motion } from 'framer-motion';

const Dining = () => {
  const stats = [
    { title: 'Satisfied Customers', value: '30+' },
    { title: 'Award Winning', value: '5k+' },
    { title: 'Years of Experience', value: '07+' },
    { title: 'Projects Delivered', value: '33+' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Dining & Lifestyle Experience
          </motion.h2>

          <p className="text-gray-600 mb-8">
            Discover a curated mix of dining options and lifestyle experiences designed to attract millions of visitors.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 rounded-xl cursor-pointer border border-gray-200 bg-gray-100 text-gray-900 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm mt-1 opacity-80">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-4">

          {/* BIG IMAGE */}
          <div className="col-span-2 overflow-hidden rounded-xl group">
            <img
              src="/dining/mall-img3.jpg"
              alt="dining"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
            />
          </div>

          {/* SMALL IMAGE 1 */}
          <div className="overflow-hidden rounded-xl group">
            <img
              src="/dining/mall-img2.jpg"
              alt="dining"
              className="w-full h-44 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
            />
          </div>

          {/* SMALL IMAGE 2 */}
          <div className="overflow-hidden rounded-xl group">
            <img
              src="/dining/mall-img1.jpg"
              alt="dining"
              className="w-full h-44 object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-75"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dining;