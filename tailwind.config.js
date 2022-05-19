module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ui: ["IBM Plex Sans Thai"],
      roboto: ["Roboto"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
