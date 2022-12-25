/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}"
  ], theme: {
    extend: {
      backgroundImage: {
        mainBgDesktop: "url('images/bg-main-desktop.png')",
        mainBgMobile: "url('images/bg-main-mobile.png')"

      }
    },
  },
  plugins: [],
}
