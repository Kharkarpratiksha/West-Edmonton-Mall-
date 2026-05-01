import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const brands = [
  {
    name: "Tiffany & Co.",
    revenue: "₹2.9Cr",
    label: "est. revenue / month",
    tagline: "Some addresses are legendary.",
    sub: "Your boutique shares a corridor with the world's most desired name.",
    accent: "#81C7C7",
    detail: "Avg ticket size: ₹4.2L",
    since: "Est. 1837",
    image: "/luxury/tiffany.jpg",
  },
  {
    name: "Hugo Boss",
    revenue: "₹1.75Cr",
    label: "est. revenue / month",
    tagline: "Ambition has a uniform.",
    sub: "Executive shoppers who return quarterly and spend with intent.",
    accent: "#C8B89A",
    detail: "64% repeat customers",
    since: "Est. 1924",
    image: "/luxury/hugo.jpg",
  },
  {
    name: "Michael Kors",
    revenue: "₹1.5Cr",
    label: "est. revenue / month",
    tagline: "Luxury, made accessible.",
    sub: "Aspirational shoppers choosing quality when it’s visible.",
    accent: "#D4AF7A",
    detail: "78% first-time buyers",
    since: "Est. 1981",
    image: "/luxury/kors.jpg",
  },
  {
    name: "Coach",
    revenue: "₹1.32Cr",
    label: "est. revenue / month",
    tagline: "American craft. Global desire.",
    sub: "Gift-givers and milestone spenders.",
    accent: "#B8956A",
    detail: "₹28K avg basket",
    since: "Est. 1941",
    image: "/luxury/coach.jpg",
  },
];

export default function Luxury() {
  const [active, setActive] = useState(brands[0]);
  const [hovered, setHovered] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  const current = hovered ?? active;

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#08070A",
        color: "#E8E0D0",
        position: "relative",
        overflow: "hidden",
        padding: "0 6vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.25, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${current.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(60%) contrast(110%)",
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,7,10,0.85), rgba(8,7,10,0.95))",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* MAIN CONTENT */}
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <p style={{ letterSpacing: "6px", fontSize: "10px", color: "#555" }}>
          — Luxury Corridor
        </p>

        <h1 style={{ fontSize: "120px", margin: "10px 0" }}>
          {current.revenue}
        </h1>

        <p style={{ color: "#888", marginBottom: "40px" }}>
          {current.label}
        </p>

        {/* BRAND LIST */}
        <div style={{ marginBottom: "40px" }}>
          {brands.map((b) => (
            <div key={b.name}>
              <button
                onClick={() => setActive(b)}
                onMouseEnter={() => setHovered(b)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: "none",
                  border: "none",
                  color:
                    current.name === b.name ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: "14px",
                  letterSpacing: "3px",
                  cursor: "pointer",
                  padding: "10px 0",
                }}
              >
                {b.name}
              </button>
            </div>
          ))}
        </div>

        {/* TEXT */}
        <div style={{ maxWidth: "500px" }}>
          <h2 style={{ fontStyle: "italic", color: "#C8B89A" }}>
            {current.tagline}
          </h2>
          <p style={{ color: "#aaa", marginTop: "10px" }}>
            {current.sub}
          </p>

          <p style={{ marginTop: "20px", color: current.accent }}>
            {current.detail}
          </p>
        </div>

        {/* BACK BUTTON (UPDATED ONLY HERE) */}
        <button
          onClick={() => navigate("/retail")}
          style={{
            marginTop: "40px",
            padding: "10px 20px",
            border: "1px solid #555",
            background: "none",
            color: "#aaa",
            cursor: "pointer",
          }}
        >
          ← Retail Ecosystem
        </button>
      </div>

      {/* HOVER IMAGE PREVIEW */}
      <AnimatePresence>
        {hovered && (
          <motion.img
            src={hovered.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              right: "6vw",
              top: "25%",
              width: "260px",
              height: "340px",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              border: `1px solid ${current.accent}40`,
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}