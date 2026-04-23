/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    extend: {
      /* 🎨 FONTS */
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },

      /* 🎨 COLORS (Luxury Theme) */
      colors: {
        primary: "#0B1C2C",     // dark navy
        gold: "#D4AF37",        // luxury gold
        lightGold: "#F5E6C8",
      },

      /* 🔠 FONT SIZES */
      fontSize: {
        hero: ["3rem", { lineHeight: "1.2" }],
        heading: ["2.5rem", { lineHeight: "1.3" }],
      },

      /* ✨ SHADOW (premium feel) */
      boxShadow: {
        luxury: "0 10px 40px rgba(0,0,0,0.2)",
      },

      /* 🎯 BORDER RADIUS */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};