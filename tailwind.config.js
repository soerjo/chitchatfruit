/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      candal: ["Candal", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
