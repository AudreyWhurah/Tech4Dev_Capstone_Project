/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      main_light: "#FBF2FF",
      main_dark: "#3C005A",
      main_text: "#FBF2FF",
      main_text_2: "#D580FF",
      main_text_3: "#C073E6",
      main_text_4: "#F2D8FF",
      main_text_5: "#15001F",
      main_text_6: "#B12906",
      main_hero: "#15001F",
    },
    fontFamily: {
      cardo: "cardo",
      josefin_sans: "Josefin Sans",
      fugaz_one: "Fugaz One",
    },
    backgroundImage: {
      hero_bg: "url('hero_bg.png')",
      hero_bg_2: "url('bg_hero_2.png')",
    },
  },
  plugins: [],
};
