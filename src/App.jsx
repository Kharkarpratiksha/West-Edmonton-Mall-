import { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Scale from "./components/Scale";
import Retail from "./components/Retail";
import Luxury from "./components/Luxury";
import Dinning from "./components/Dinning";
import Lifestyle from "./components/Lifestyle";
import Events from "./components/Events";
import Attractions from "./components/Attractions";
import Footer from "./components/Footer";
import AttractionDetail from "./components/AttractionDetail";

const slides = [
  { id: "Overview",    label: "Overview",     component: <Hero /> },
  { id: "scale",       label: "Scale",        component: <Scale /> },
  { id: "retail",      label: "Retail",       component: <Retail /> },
  { id: "luxury",      label: "Luxury",       component: <Luxury /> },
  { id: "dining",      label: "Dining",       component: <Dinning /> },
  { id: "lifestyle",   label: "Lifestyle",    component: <Lifestyle /> },
  { id: "events",      label: "Events",       component: <Events /> },
  { id: "attractions", label: "Attractions",  component: <Attractions /> },
  { id: "contact",     label: "Contact",      component: <Footer /> },
];

function Deck() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const isAnimating = useRef(false);

  const goTo = (index) => {
    if (isAnimating.current) return;
    if (index < 0 || index >= slides.length) return;
    isAnimating.current = true;
    setCurrent(index);
    setTimeout(() => { isAnimating.current = false; }, 750);
  };

  const goNext = () => goTo(current + 1);
  const goPrev = () => goTo(current - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current]);

  // Mouse wheel navigation
  useEffect(() => {
    let lastScroll = 0;
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScroll < 800) return;
      lastScroll = now;
      if (e.deltaY > 0) goNext();
      if (e.deltaY < 0) goPrev();
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [current]);

  // Touch/swipe navigation
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientY;
    if (diff > 50)  goNext();
    if (diff < -50) goPrev();
    touchStart.current = null;
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      {/* ── SLIDES ── */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${(i - current) * 100}%)`,
            transition: "transform 0.75s cubic-bezier(0.77, 0, 0.175, 1)",
            zIndex: i === current ? 2 : 1,
          }}
        >
          {/* Only render current + adjacent slides */}
          {Math.abs(i - current) <= 1 && slide.component}
        </div>
      ))}

      {/* ── SIDE DOT NAVIGATION ── */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className="group flex items-center justify-end gap-2"
            title={slide.label}
          >
            {/* Hover label */}
            <span className="opacity-0 group-hover:opacity-100 text-white text-[10px] tracking-[2px] uppercase transition-all duration-300 whitespace-nowrap">
              {slide.label}
            </span>
            {/* Dot */}
            <div
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-1.5 h-6 bg-white"
                  : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── TOP LEFT — LOGO ── */}
      <div className="fixed top-5 left-6 z-50 flex items-center gap-3">
        <img
          src="/WEM_Cocoa_Logo.svg"
          alt="West Edmonton Mall"
          className="h-7 w-auto brightness-0 invert opacity-80"
        />
        <span className="text-white/60 text-[11px] tracking-[2px] uppercase hidden md:block">
          West Edmonton Mall
        </span>
      </div>

      {/* ── BOTTOM — PREV ARROW ── */}
      {current > 0 && (
        <button
          onClick={goPrev}
          className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 text-white/30 hover:text-white transition duration-300 rotate-180"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* ── BOTTOM — NEXT ARROW ── */}
      {current < slides.length - 1 && (
        <button
          onClick={goNext}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 text-white/30 hover:text-white transition duration-300"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* ── SLIDE COUNTER — bottom right ── */}
      <div className="fixed bottom-6 right-6 z-50 text-white/20 text-[11px] tracking-[3px] font-light">
        {String(current + 1).padStart(2, "0")}
        <span className="mx-1">/</span>
        {String(slides.length).padStart(2, "0")}
      </div>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Deck />} />
      <Route path="/attractions/:slug" element={<AttractionDetail />} />
    </Routes>
  );
}