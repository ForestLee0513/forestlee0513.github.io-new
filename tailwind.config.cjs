/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: { max: "1280px" },
      pc: "1280px",
    },
    colors: {
      background: "#EAEFE6",
      text: "#131910",
      textSecondary: "#4C5349",
      primary: "#3A4C2F",
      secondary: "#DCE5D7",
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: "Pretendard, sans-serif",
            h1: {
              fontSize: "3rem",
              margin: 0,
            },
            h2: {
              fontSize: "2.5rem",
              margin: 0,
            },
            h3: {
              fontSize: "2.062rem",
              margin: 0,
            },
            h4: {
              fontSize: "1.75rem",
              margin: 0,
            },
            h5: {
              fontSize: "1.438rem",
              margin: 0,
            },
            h6: {
              fontSize: "1.188rem",
              margin: 0,
            },
            a: {
              margin: 0,
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
