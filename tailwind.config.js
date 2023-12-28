/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#E9786E",
        },
        black: "#050411",
        dark: "#17191F",
        darkGray: "#56616a",
        gray: "#333333",
        blueGray: "#637695",
      },
      backgroundImage: {
        mobile: "url('/back-mobile.png')",
        web: "url('/back.png')",
        general: "url(/back2.svg)",
      },
    },
  },
  plugins: [],
};
