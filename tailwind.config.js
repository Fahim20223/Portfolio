/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#8a2be2",
        "background-light": "#f5f3ff",
        "background-dark": "#0a001a",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        glow: "0 0 20px 5px rgba(138, 43, 226, 0.4)",
      },
    },
  },
  plugins: [],
}
