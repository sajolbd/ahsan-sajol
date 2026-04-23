const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ---------- COLORS ---------- */
      colors: {
        primary: "#0f1226",
        accent: "#ff7a18",
      },

      /* ---------- CONTAINER ---------- */
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },

      /* ---------- ANIMATIONS ---------- */
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },

        rotateCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        marquee: "marquee 20s linear infinite",
        rotateCircle: "rotateCircle 20s linear infinite",
      },
    },
  },

  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#ff7a18",
            background: "#0f1226",
          },
        },
        dark: {
          colors: {
            primary: "#ff7a18",
            background: "#0f1226",
          },
        },
      },
    }),
  ],
};