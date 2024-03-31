/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010851",
        secondary: "#9A7AF1",
        tartiary: "#707070",
        pink: "#EE9AE5",
        indigo: "#5961F9",
      },
      boxShadow: {
        "3xl": "0 10px 50px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
