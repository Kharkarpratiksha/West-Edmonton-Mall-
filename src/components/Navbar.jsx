import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Overview',    href: '#hero' },
    { name: 'Scale',       href: '#scale' },
    { name: 'Retail',      href: '#retail' },
    { name: 'Luxury',      href: '#luxury' },
    { name: 'Dining',      href: '#dining' },
    { name: 'Attractions', href: '#attractions' },
    { name: 'Events',      href: '#events' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent border-b border-white/0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* LOGO */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ opacity: 0.8 }}
            >
              <img
                src="/WEM_Cocoa_Logo.svg"
                alt="West Edmonton Mall"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-white text-sm font-light tracking-[2px] uppercase hidden md:block">
                West Edmonton Mall
              </span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-white/60 hover:text-white text-[11px] tracking-[2px] uppercase transition duration-300"
                >
                  {link.name}
                </a>
              ))}
              {/* Primary CTA */}
              <button
                onClick={() => scrollTo('#contact')}
                className="px-5 py-2 border border-white/30 text-white text-[11px] tracking-[2px] uppercase hover:bg-white hover:text-black transition duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10 z-40 lg:hidden"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setMobileMenuOpen(false);
                }}
                className="block text-white/60 hover:text-white text-[11px] tracking-[3px] uppercase py-2 transition duration-300"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { scrollTo('#contact'); setMobileMenuOpen(false); }}
              className="w-full mt-2 px-5 py-3 border border-white/30 text-white text-[11px] tracking-[2px] uppercase hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;