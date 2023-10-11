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
      textOpposite: "#FBFFFA",
      textSecondary: "#4C5349",
      primary: "#3A4C2F",
      secondary: "#DCE5D7",
      hover: "#5D784D",
      active: "#28351F",
      dark: {
        background: "#131910",
        text: "#FBFFFA",
        textOpposite: "#131910",
        textSecondary: "#CFDCCB",
        primary: "#BED0B3",
        secondary: "#1F281A",
        hover: "#DAEDCE",
        active: "#95AD87",
      },
    },
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: "Pretendard, sans-serif",
            "*:not(.no-prose) a:not(.no-prose)": {
              fontWeight: 400,
            },
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
            hr: {
              borderColor: "text",
              marginTop: "10px",
              marginBottom: "10px",
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
