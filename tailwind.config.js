const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: "#030303",
      blue: colors.blue,
      white: "#F3F3F3",
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      rvverBlack: "#000",
      totalWhite: "#fff",
      totalBlack: "#000",
      totalGray: "#808080",
      teal: colors.teal,
      yellow: "#FFFF00",
      green: "#4BB543",
      warningRed: "#913831",
      transparent: "transparent",
      desertSand: '#f3cfb3',
      cashmere: '#e1bbb4',
      mintGreen: '#a3b2a4',
      peach :'#e1bbb4',
      beige: '#F5D283',
      pink: '#E68AA8',
      summerGreen: '#A7BF89',
      buttonColor: '#2264D1'
    },
    extend: {
      animation: {
        grow: "grow 0.5s ease-in-out",
        shrink: "shrink 0.5s ease-in-out",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        shrink: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
    screens: {
      mobile: "100px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('tailwindcss-aria-attributes'),
    require("tailwindcss-scoped-groups"),
    require('tailwindcss-rtl'),
    require('@tailwindcss/aspect-ratio'),
  ],
};