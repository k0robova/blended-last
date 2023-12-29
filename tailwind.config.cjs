/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { md: "1200px" },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
