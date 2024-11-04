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
			},
			backgroundImage: {
				pyramids: "url('/pyramids.jpg')",
				die1black: "url('/die-1-black.png')",
				die2black: "url('/die-2-black.png')",
				die3black: "url('/die-3-black.png')",
				die4black: "url('/die-4-black.png')",
				die5black: "url('/die-5-black.png')",
				die6black: "url('/die-6-black.png')",
				die1white: "url('/die-1-white.png')",
				die2white: "url('/die-2-white.png')",
				die3white: "url('/die-3-white.png')",
				die4white: "url('/die-4-white.png')",
				die5white: "url('/die-5-white.png')",
				die6white: "url('/die-6-white.png')",
			},
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scale: "scale 1s ease-in-out",
      },
		},
	},
	plugins: [],
};
