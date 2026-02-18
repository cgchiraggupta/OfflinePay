/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e6eaf0",
          100: "#ccd5e1",
          200: "#99abc3",
          300: "#6681a5",
          400: "#335787",
          500: "#002d69",
          600: "#002454",
          700: "#001b3f",
          800: "#00122a",
          900: "#0a1628",
          950: "#050b14",
        },
        flowpay: {
          green: "#22c55e",
          "green-dark": "#16a34a",
          "green-light": "#4ade80",
        },
      },
    },
  },
  plugins: [],
};
