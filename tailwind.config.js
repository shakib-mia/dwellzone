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
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0",
        xl: "0",
      },
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
          dark: "#007A7A",
        },
        black: {
          DEFAULT: "#000000",
          heading: "#000929",
          text: "#212529",
        },
        gray: "#F8F8F8",
        white: "#FFFFFF",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
