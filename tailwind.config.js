/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#603809",
        secondary: "#F9C06A",
        darkSecondary: "#FFEED8",
        pColors: "#707070",
      },
      fontFamily: {
        clicker: ["Clicker Script", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      }
    },
  },
  plugins: [],
}

