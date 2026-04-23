import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/du5io3wiz/video/upload/f_auto,q_auto/video1_lrzgul.mp4"
          type="video/mp4"
        />
              </video>

    {/* Bottom Luxury Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
      {/* Content */}
      <div className="absolute bottom-20 left-16 max-w-2xl text-white">

        <p className="text-xs tracking-[4px] text-gray-300 mb-3 uppercase">
          Global Destination
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-5 font-serif">
          NEXORA EXPERIENCE
        </h1>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
          A world-class retail, entertainment & lifestyle ecosystem designed
          for global brands, immersive experiences, and unforgettable moments.
        </p>

        <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300">
          Explore Platform
        </button>

      </div>

    </section>
  );
}