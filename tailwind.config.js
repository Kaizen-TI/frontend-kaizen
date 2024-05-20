/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f40202",
        secondary: "#7b0000",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        ligthWhite: "#ffffff",
        midDark: "#171717",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};

