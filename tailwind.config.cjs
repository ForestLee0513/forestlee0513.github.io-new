/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    colors: {
      background: "#EAEFE6",
      text: "#131910",
      textSecondary: "#4C5349",
      primary: "#3A4C2F",
      secondary: "#DCE5D7",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
