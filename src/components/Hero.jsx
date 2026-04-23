import React from "react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      {/* CONTENT */}
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 lg:left-16 right-4 sm:right-auto max-w-2xl text-white">

        <p className="text-[10px] sm:text-[11px] tracking-[3px] sm:tracking-[4px] text-gray-400 mb-3 sm:mb-4 uppercase">
          Edmonton, Alberta · Canada's Largest Mall
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4 sm:mb-5 font-serif">
          West Edmonton Mall
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
          5.3 million sq ft. 800+ stores. 32 million annual visitors.
          North America's most powerful retail & entertainment destination.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">

          <button
            onClick={() => scrollTo("#retail")}
            className="
              px-6 py-3 sm:px-7 sm:py-3 bg-white text-black
              text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase
              transition duration-300
              hover:bg-transparent hover:text-white hover:border hover:border-white
            "
          >
            Explore Leasing
          </button>

          <button
            onClick={() => scrollTo("#events")}
            className="
              px-6 py-3 sm:px-7 sm:py-3 border border-white text-white
              text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase
              transition duration-300
              hover:bg-white hover:text-black
            "
          >
            Book a Venue
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="
              px-6 py-3 sm:px-7 sm:py-3 border border-white/30 text-white/60
              text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase
              transition duration-300
              hover:border-white hover:text-white
            "
          >
            Partner With Us
          </button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-6 sm:h-8 bg-white/20 animate-pulse" />
      </div>

    </section>
  );
}