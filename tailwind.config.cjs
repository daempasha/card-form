/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ], theme: {
    extend: {
      backgroundImage: {
        mainBgDesktop: "url('bg-main-desktop.png')",
        mainBgMobile: "url('bg-main-mobile.png')"

      }
    },
  },
  plugins: [],
}
