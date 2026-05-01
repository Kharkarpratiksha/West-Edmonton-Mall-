import React from "react";
import { sections } from "../data/sections";

export default function NavDots({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-2 sm:gap-3 hidden sm:flex">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          title={s.label}
          className="group flex items-center gap-2 justify-end"
        >
          <span className="text-[9px] tracking-[2px] uppercase text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 font-mono whitespace-nowrap">
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "w-2 h-2 bg-[#C9A84C]"
                : "w-1.5 h-1.5 bg-gray-600 group-hover:bg-gray-300"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
