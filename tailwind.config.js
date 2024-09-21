/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "playfair-display": ["Playfair Display", "serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
      },
    },
    extend: {
      fontSize: {
        64: "4rem",
        32: "2rem",
      },
      colors: {
        primary: {
          DEFAULT: "#008B8B",
        },
        black: {
          DEFAULT: "#000000",
          heading: "#008B8B",
          text: "#212529",
        },
        gray: "#F8F8F8",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
