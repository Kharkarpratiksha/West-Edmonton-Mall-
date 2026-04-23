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
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-2 ">

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
                className="h-10 w-auto"
              />

              {/* BRAND NAME (ADDED HERE) */}
              <span className="text-gray-900 text-sm md:text-base font-medium tracking-wide">
                West Edmonton Mall
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-100/40 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="glass inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 glass border-b border-gray-200/20 z-40 lg:hidden"
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setMobileMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-100/40 rounded-lg"
                whileHover={{ x: 8 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;