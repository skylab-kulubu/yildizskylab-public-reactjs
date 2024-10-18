/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/src/Assets/Images/landing-page.png')",
      },
      colors: {
        customDarkPurple: "#06032C",
        customDarkerPurple: "#050221",
        customLightPink: "#EADAFF",
        customLightPurple: "#7C77B3",
        customAccent: "#27A68E",
      },
      fontFamily: {
        bebasNeue: ["Bebas Neue"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
