import React from "react";

const footerLinks = [
  {
    heading: "For Tenants",
    links: ["Retail Leasing", "F&B Leasing", "Pop-Up Spaces", "Flagship Locations"],
  },
  {
    heading: "For Partners",
    links: ["Sponsorship", "Brand Activations", "Event Bookings", "Media & Advertising"],
  },
  {
    heading: "The Property",
    links: ["Scale & Demographics", "Attractions", "Dining", "Luxury Wing"],
  },
  {
    heading: "Contact",
    links: ["8882 170 St NW", "Edmonton, AB T5T 4J2", "(780) 444-5321", "leasing@wem.ca"],
  },
];

const Footer = () => (
  <footer id="contact" className="bg-[#080808] text-white border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Top — CTA block */}
      <div className="grid md:grid-cols-2 gap-12 items-end mb-20 pb-20 border-b border-white/10">
        <div>
          <p className="text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
            Ready to Partner?
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white font-serif leading-tight">
            Let's Build Something<br />
            <span className="italic text-gray-400">Extraordinary.</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-white text-black text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition duration-300">
            Retail Leasing Enquiry
          </button>
          <button className="px-8 py-4 border border-white/20 text-white text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition duration-300">
            Book a Venue
          </button>
        </div>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[11px] tracking-[3px] uppercase text-white mb-5">
              {col.heading}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li
                  key={link}
                  className="text-gray-600 hover:text-white text-sm font-light cursor-pointer transition duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <img
          src="/WEM_Cocoa_Logo.svg"
          alt="West Edmonton Mall"
          className="h-8 w-auto brightness-0 invert opacity-40"
        />
        <span className="text-white/30 text-sm font-light tracking-[2px] uppercase">
          West Edmonton Mall
        </span>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-700">
        <p>© 2026 West Edmonton Mall. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition duration-300">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition duration-300">Terms & Conditions</span>
          <span className="hover:text-white cursor-pointer transition duration-300">Cookie Policy</span>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;