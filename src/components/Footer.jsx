import React from "react";
import { motion } from "framer-motion";

const contacts = [
  { label: "Address",  value: "8882 170 St NW, Edmonton, AB T5T 4J2" },
  { label: "Phone",    value: "(780) 444-5321" },
  { label: "Leasing",  value: "leasing@wem.ca" },
  { label: "Events",   value: "events@wem.ca" },
];

const Footer = () => (
  <footer
    id="contact"
    className="h-screen bg-[#080808] text-white flex flex-col justify-center px-6 overflow-hidden border-t border-white/5"
  >
    <div className="max-w-6xl mx-auto w-full">

      {/* Label */}
      <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
        Get In Touch
      </p>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-light text-white font-serif leading-tight mb-4"
      >
        Let's Build Something <br />
        <span className="italic text-gray-400">Extraordinary.</span>
      </motion.h2>

      <p className="text-gray-500 text-sm max-w-lg leading-relaxed mb-10">
        Whether you're exploring retail leasing, planning a brand activation,
        or booking a venue — our commercial team is ready to talk.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 mb-12">
        <button className="px-8 py-3 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300">
          Retail Leasing Enquiry
        </button>
        <button className="px-8 py-3 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
          Book a Venue
        </button>
        <button className="px-8 py-3 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
          Sponsorship Enquiry
        </button>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-12">
        {contacts.map((c) => (
          <div key={c.label} className="bg-[#080808] px-6 py-5">
            <p className="text-[11px] tracking-[2px] text-gray-600 uppercase mb-2">
              {c.label}
            </p>
            <p className="text-white font-light text-sm">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Bottom — logo + copyright */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        <div className="flex items-center gap-3">
          <img
            src="/WEM_Cocoa_Logo.svg"
            alt="West Edmonton Mall"
            className="h-6 w-auto brightness-0 invert opacity-30"
          />
          <span className="text-white/20 text-[11px] tracking-[2px] uppercase">
            West Edmonton Mall
          </span>
        </div>

        <div className="flex items-center gap-6 text-[11px] text-gray-700">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
          <span className="text-gray-800">© 2026 West Edmonton Mall</span>
        </div>

      </div>

    </div>
  </footer>
);

export default Footer;