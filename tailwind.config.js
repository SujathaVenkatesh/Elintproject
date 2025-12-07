/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'hd': '1520px',      // custom breakpoint for 1520px
        'fhd': '1920px',     // custom breakpoint for 1920px
      },
    },
  },
  plugins: [],
};
