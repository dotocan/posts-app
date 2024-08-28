/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        martian: {
          100: "#fe6f5",
          200: "",
          300: "",
          400: "#ecaa9e",
          500: "#e88977",
          600: "#e25033",
          700: "",
          800: "",
          900: "",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
