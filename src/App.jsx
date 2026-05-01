import React, { useEffect, useState } from "react";
import NavDots from "./components/NavDots";
import Hero from "./sections/Hero";
import Scale from "./sections/Scale";
import Retail from "./sections/Retail";
import Luxury from "./sections/Luxury";
import Attractions from "./sections/Attractions";
import Audience from "./sections/Audience";
import Opportunity from "./sections/Opportunity";
import Contact from "./sections/Contact";

const SECTION_IDS = ["hero", "scale", "retail", "luxury", "attractions", "audience", "opportunity", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grain">
      <NavDots active={activeSection} />
      <Hero />
      <Scale />
      <Retail />
      <Luxury />
      <Attractions />
      <Audience />
      <Opportunity />
      <Contact />
    </div>
  );
}
