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
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
          light: "#DBEAFE",
          accent: "#3B82F6",
          "accent-hover": "#2563EB",
          dark: "#0F172A",
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
