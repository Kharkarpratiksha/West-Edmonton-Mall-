import React from "react";
import { motion } from "framer-motion";

const Luxury = () => {
  const cards = [
    { title: "Private Shopping", desc: "Private shopping sessions", icon: "🛍️" },
    { title: "VIP Concierge", desc: "VIP concierge services", icon: "🎩" },
    { title: "Brand Partnerships", desc: "Luxury brand partnerships", icon: "🤝" },
    { title: "Membership", desc: "Premium membership programs", icon: "💎" },
    { title: "Flagship Stores", desc: "Flagship store locations", icon: "🏬" },
    { title: "Brand Showcases", desc: "Luxury brand showcases", icon: "✨" },
    { title: "Pop-up Spaces", desc: "High-end pop-up spaces", icon: "🏢" },
    { title: "Leasing", desc: "Exclusive leasing opportunities", icon: "📍" },
  ];

  return (
    <section className="section bg-black relative overflow-hidden py-24 md:py-32">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white mb-16"
        >
          Ultimate Luxury
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 hover:border-white/30 transition duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-white/10 text-white text-2xl mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-medium">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-400 mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Luxury;