/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "green-pastel": "#D4EBD9",
        "purple-soft": "#E8E0F5",
        "purple-deep": "#7B5EB5",
        "green-strong": "#5AA65C",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "Montserrat", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
