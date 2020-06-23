module.exports = {
  purge: [],
  theme: {
    extend: {
      height: (theme) => ({
        "screen-1/2": "50vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
      }),

      ripple: (theme) => ({
        colors: theme("colors"),
      }),

      colors: (theme) => ({
        "ph-text": "#a0aec0",
      }),
      width: (theme) => ({
        "80": "20rem",
        "96": "24rem",
      }),
    },
  },
  variants: {
    display: ["responsive", "hover", "focus"],
  },
  plugins: [require("tailwindcss-ripple")()],
};
