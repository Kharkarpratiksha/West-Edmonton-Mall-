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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />

      {/* Content — bottom left */}
      <div className="absolute bottom-20 left-16 max-w-2xl text-white">

        <p className="text-[11px] tracking-[4px] text-gray-400 mb-4 uppercase">
          Edmonton, Alberta · Canada's Largest Mall
        </p>

        <h1 className="text-5xl md:text-7xl font-light leading-tight mb-5 font-serif">
          West Edmonton Mall
        </h1>

        <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-lg">
          5.3 million sq ft. 800+ stores. 32 million annual visitors.
          North America's most powerful retail & entertainment destination.
        </p>

        {/* Buttons — fixed hover */}
        <div className="flex flex-wrap gap-3">

          {/* Primary */}
          <button
            onClick={() => scrollTo("#retail")}
            className="
              px-7 py-3 bg-white text-black
              text-[11px] tracking-[3px] uppercase
              transition duration-300
              hover:bg-transparent hover:text-white hover:border hover:border-white
            "
          >
            Explore Leasing
          </button>

          {/* Secondary */}
          <button
            onClick={() => scrollTo("#events")}
            className="
              px-7 py-3 border border-white text-white
              text-[11px] tracking-[3px] uppercase
              transition duration-300
              hover:bg-white hover:text-black
            "
          >
            Book a Venue
          </button>

          {/* Tertiary */}
          <button
            onClick={() => scrollTo("#contact")}
            className="
              px-7 py-3 border border-white/30 text-white/60
              text-[11px] tracking-[3px] uppercase
              transition duration-300
              hover:border-white hover:text-white
            "
          >
            Partner With Us
          </button>

        </div>
      </div>

      {/* Stats — bottom right */}
      <div className="absolute bottom-20 right-16 flex flex-col gap-5 text-right text-white">
        {[
          { value: "32M+", label: "Annual Visitors" },
          { value: "800+", label: "Stores & Services" },
          { value: "5.3M", label: "Sq Ft" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl font-light">{stat.value}</div>
            <div className="text-[10px] tracking-[3px] uppercase text-gray-500 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>

    </section>
  );
}