/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      merah: "#EB5757",
      "merah-200": "#FB5857",
      putih: "#FFFFFF",
      abu: "#4F4F4F",
      "hijau-army": "#05505C",
      neutral: "#EBF0F4",
      kuning: "#F2C94C",
      coklat: "#260000",
      "coklat-dark": "#1F2A37",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      candal: ["Candal", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      lexend: ["Lexend", "sans - serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});
