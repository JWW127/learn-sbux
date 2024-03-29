/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        san: ["Roboto", "ui-sans-serif", "-apple-system"],
      },
      backgroundImage: {
        "hero-pattern": "url('./public/sign1920blur.jpg')",
      },
    },
  },
  plugins: [],
};
