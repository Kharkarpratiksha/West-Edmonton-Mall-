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

    <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">

      {/* CTA Section */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start md:items-end mb-14 md:mb-20 pb-14 md:pb-20 border-b border-white/10">

        <div>
          <p className="text-[10px] md:text-[11px] tracking-[4px] text-gray-600 uppercase mb-4">
            Ready to Partner?
          </p>

          <h2 className="text-3xl md:text-5xl font-light text-white font-serif leading-tight">
            Let's Build Something <br />
            <span className="italic text-gray-400">Extraordinary.</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full">
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-gray-100 transition">
            Retail Leasing Enquiry
          </button>

          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white text-[10px] md:text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-black transition">
            Book a Venue
          </button>
        </div>

      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">

        {footerLinks.map((col) => (
          <div key={col.heading}>
            <h4 className="text-[10px] md:text-[11px] tracking-[3px] uppercase text-white mb-4 md:mb-5">
              {col.heading}
            </h4>

            <ul className="space-y-2 md:space-y-3">
              {col.links.map((link) => (
                <li
                  key={link}
                  className="text-gray-600 hover:text-white text-sm font-light cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <img
          src="/WEM_Cocoa_Logo.svg"
          alt="West Edmonton Mall"
          className="h-7 md:h-8 w-auto brightness-0 invert opacity-40"
        />

        <span className="text-white/30 text-xs md:text-sm font-light tracking-[2px] uppercase">
          West Edmonton Mall
        </span>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-[11px] text-gray-700 text-center md:text-left">

        <p>© 2026 West Edmonton Mall. All rights reserved.</p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
          <span className="hover:text-white cursor-pointer transition">Cookie Policy</span>
        </div>

      </div>

    </div>
  </footer>
);

export default Footer;