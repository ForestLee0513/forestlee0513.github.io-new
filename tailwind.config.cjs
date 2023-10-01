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
            "p, span, h1, h2, h3, h4, h5, h6": {
              marginBottom: "10px",
              marginTop: 0,
            },
            h1: {
              fontSize: "3rem",
            },
            h2: {
              fontSize: "2.5rem",
            },
            h3: {
              fontSize: "2.062rem",
            },
            h4: {
              fontSize: "1.75rem",
            },
            h5: {
              fontSize: "1.438rem",
            },
            h6: {
              fontSize: "1.188rem",
            },
            a: {},
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
