import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fdf8f0",
          100: "#faefd9",
          200: "#f4dbb0",
          300: "#ecc17e",
          400: "#e3a04d",
          500: "#d98328",
          600: "#c4691e",
          700: "#a4511a",
          800: "#84401c",
          900: "#6c361a",
        },
        olive: {
          50:  "#f5f7f0",
          100: "#e8ecdc",
          200: "#d2dabc",
          300: "#b3c191",
          400: "#94a86b",
          500: "#778f4e",
          600: "#5d733c",
          700: "#495a30",
          800: "#3c4929",
          900: "#333e24",
        },
        stone: {
          950: "#0c0a09",
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.4s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "marquee":    "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideLeft: { from: { opacity: "0", transform: "translateX(24px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        marquee:   { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
export default config;
