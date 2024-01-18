/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#94a3b8",
        secondary: "#94a3b8",
        tertiary: "#64748b",
        white: "#cbd5e1",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
