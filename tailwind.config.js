/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A", // Dark slate background
        surface: "#1E293B", // Darker surface for cards
        "surface-hover": "#334155", // Hover state for surfaces
        border: "#475569", // Subtle border color
        "text-primary": "#F1F5F9", // Light text for primary content
        "text-secondary": "#E2E8F0", // Secondary text
        "text-muted": "#94A3B8", // Muted text
        brand: {
          DEFAULT: "#8B5CF6", // Vibrant purple for modern tech feel
          hover: "#7C3AED",
          light: "#DDD6FE", // Light purple for backgrounds
          accent: "#A78BFA", // Accent purple
          "accent-hover": "#8B5CF6",
          dark: "#5B21B6",
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
