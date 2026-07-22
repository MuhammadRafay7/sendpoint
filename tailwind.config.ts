import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Brand palette — sampled directly from the SendPoint logo.
        // Primary blue #2563eb, ink navy #0f1b2d.
        brand: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#609afa",
          500: "#3b82f6",
          600: "#2563eb", // logo blue
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        ink: {
          DEFAULT: "#0f1b2d", // logo navy
          50: "#f4f6f9",
          100: "#e6eaf1",
          200: "#c9d3e0",
          300: "#9db0c7",
          400: "#6b83a5",
          500: "#4b6288",
          600: "#3a4d6f",
          700: "#2f3f5a",
          800: "#1c2942",
          900: "#0f1b2d",
          950: "#080f1a",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(15,27,45,0.04), 0 8px 24px rgba(15,27,45,0.06)",
        card: "0 2px 6px rgba(15,27,45,0.05), 0 18px 40px -12px rgba(15,27,45,0.12)",
        float: "0 30px 60px -20px rgba(15,27,45,0.25)",
        glow: "0 20px 50px -12px rgba(37,99,235,0.45)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
      backgroundImage: {
        "grid-ink":
          "linear-gradient(to right, rgba(15,27,45,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,27,45,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
