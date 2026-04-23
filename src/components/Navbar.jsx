import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Retail', href: '#retail' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        
        {/* ✅ SAME CONTAINER WIDTH AS SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          <div className="flex justify-between items-center h-16">

            {/* LOGO + NAME */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/WEM_Cocoa_Logo.svg"
                alt="West Edmonton Mall"
                className="h-9 sm:h-10 w-auto"
              />

              <span className="text-gray-900 text-sm md:text-base font-medium tracking-wide">
                West Edmonton Mall
              </span>
            </motion.a>

            {/* DESKTOP MENU */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-700 hover:text-black text-sm font-medium transition duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700"
              >
                ☰
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white border-b z-40 lg:hidden">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  setMobileMenuOpen(false);
                }}
                className="block text-gray-700 text-sm py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;