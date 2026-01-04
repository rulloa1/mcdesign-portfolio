module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["Inter", "sans-serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        luxury: {
          gold: "#D4AF37",
          charcoal: "#333333",
          cream: "#F5F5DC",
          slate: "#708090",
        },
      },
    },
  },
  plugins: [],
};
