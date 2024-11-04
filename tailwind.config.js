/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					50: "#ECE5FB",
					100: "#D8CBF6",
					200: "#AF92ED",
					300: "#885EE4",
					400: "#5E25DA",
					500: "#481CA6",
					600: "#391683",
					700: "#2B1164",
					800: "#1C0B41",
					900: "#0F0623",
					950: "#080311",
				},
        "accent": "#53297E",
        "accent-2": "#7B51A6",
			},
			backgroundImage: {
				pyramids: "url('/pyramids.webp')",
				die1black: "url('/die-1-black.webp')",
				die2black: "url('/die-2-black.webp')",
				die3black: "url('/die-3-black.webp')",
				die4black: "url('/die-4-black.webp')",
				die5black: "url('/die-5-black.webp')",
				die6black: "url('/die-6-black.webp')",
				die1white: "url('/die-1-white.webp')",
				die2white: "url('/die-2-white.webp')",
				die3white: "url('/die-3-white.webp')",
				die4white: "url('/die-4-white.webp')",
				die5white: "url('/die-5-white.webp')",
				die6white: "url('/die-6-white.webp')",
			},
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scale: "scalewebp0ms ease-in-out",
      },
		},
	},
	plugins: [],
};
