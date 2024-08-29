/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Netflix Sans"',
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
          "sans-serif",
        ],
      },
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        normal: "normal",
      },
      letterSpacing: {
        normal: "normal",
      },
    },
  },
  plugins: [],
};
