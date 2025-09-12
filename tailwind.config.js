/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        catppucin: {
          light: "#e0f2fe",
          DEFAULT: "#064e3b",
          dark: "#ecfdf5",
        },
        zinc: {
          light: "#e0f2fe",
          DEFAULT: "#064e3b",
          dark: "#ecfdf5",
        },
        rose: {
          light: "#ffe4e6",
          DEFAULT: "#991b1b",
          dark: "#f43f5e",
        },
      },
    },
  },
  plugins: [],
};
