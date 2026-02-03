/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        "surface-hover": "#F1F5F9",
        border: "#E2E8F0",
        "text-primary": "#0F172A",
        "text-secondary": "#334155",
        "text-muted": "#64748B",
        brand: {
          DEFAULT: "#0EA5E9", // Bright cyan-blue for modern tech feel
          hover: "#0284C7",
          light: "#E0F2FE",
          accent: "#06B6D4", // Teal accent
          "accent-hover": "#0891B2",
          dark: "#0C4A6E",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '-0.025em',
      },
    },
  },
  plugins: [],
}
