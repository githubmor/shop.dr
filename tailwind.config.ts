import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "var(--base)",
          100: "var(--base-100)",
          200: "var(--base-200)",
          300: "var(--base-300)",
          400: "var(--base-400)",
        },
        neutral: {
          DEFAULT: "var(--neutral)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          600: "var(--neutral-600)",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans], // Default font
        anton: ["Anton", "sans-serif"], // Custom secondary font
      },
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [],
} satisfies Config;
