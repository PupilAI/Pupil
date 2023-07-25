/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontfamily: {
      'roboto': ["Roboto"]
    },
    extend: {
      colors: {
        textPurple: "#5841D8",
        bgPurple: "#EDE3FB",
        descPurple: "#32257D",
        themePurple: "#4846CB"
      },
    },
  },
  plugins: [],
};
