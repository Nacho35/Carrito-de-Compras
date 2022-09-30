/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "color-one": "#f25757",
      "color-two": "#61e8e1",
      "color-tree": "#eaf2e3",
      "color-four": "#f2e863",
      "color-five": "#f2cd60",
      "color-dark2": "#000000",
      "color-gray2": "#66666e",
      "color-light2": "#ffffff",
    },
    extend: {},
  },
  daisyui: {
    themes: ["luxury"],
  },
  plugins: [require("daisyui")],
};
