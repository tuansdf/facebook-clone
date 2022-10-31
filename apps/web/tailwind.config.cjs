/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1877f2",
        secondary: "#42b72a",
        "primary-focus": "#0d70ef",
        "primary-content": "white",
        "secondary-focus": "#3fae28",
        "secondary-content": "white",
        background: "#f0f2f5",
      },
      borderRadius: {
        base: "0.375rem",
      },
      borderWidth: {
        base: "1px",
      },
    },
  },
  plugins: [],
};
