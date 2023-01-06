/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "zeniark-bg": "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
