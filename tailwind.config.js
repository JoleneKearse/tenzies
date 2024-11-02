/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-100": "#f5f5f5",
        "brand-200": "#ffffff",  // dice
        "brand-400": "#6eebb4",  // selected dice
        "brand-500": "#009ff6",  // button
        "brand-700": "#005fb6",  // button hover/focus
        "brand-900": "#0a2433",
        accent: "#00c6b1"
      }
    },
  },
  plugins: [],
}

