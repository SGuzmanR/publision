/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        red: "#E41F2E",
      },
      fontFamily: {
        caveat: 'var(--font-caveat)',
        mulish: 'var(--font-mulish)',
      },
    },
  },
  plugins: [],
};