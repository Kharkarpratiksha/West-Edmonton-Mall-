import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">

        {/* LOGO + NAME */}
        <div className="mb-12 flex items-center gap-3">

          <img
            src="/WEM_Cocoa_Logo.svg"
            alt="West Edmonton Mall"
            className="h-10"
          />

          <span className="text-white text-sm md:text-base font-medium tracking-wide">
            West Edmonton Mall
          </span>

        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-400 mb-12">

          <div>
            <h4 className="mb-4 text-white text-xs tracking-widest uppercase">
              Visitor Information
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Mall Map</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">Gift Cards</li>
              <li className="hover:text-white cursor-pointer">Customer Lounge</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white text-xs tracking-widest uppercase">
              Explore
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Shopping</li>
              <li className="hover:text-white cursor-pointer">Dining</li>
              <li className="hover:text-white cursor-pointer">Entertainment</li>
              <li className="hover:text-white cursor-pointer">Events</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white text-xs tracking-widest uppercase">
              About
            </h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Media</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white text-xs tracking-widest uppercase">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li>8882 170 St NW</li>
              <li>Edmonton, AB</li>
              <li>(780) 444-5321</li>
              <li className="hover:text-white cursor-pointer">info@wem.ca</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

          <p>
            © 2026 Pratiksha Kharkar. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;