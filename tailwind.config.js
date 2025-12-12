/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        accent: {
          DEFAULT: "#45B7BA",
          dark: "#2c989c",
          light: "#00FFC2",
        },
        "dark-teal": {
          DEFAULT: "#0b253b",
          light: "#0d3547",
          lighter: "#052636",
          border: "#1a2a35",
        },
        "dark-bg": {
          DEFAULT: "#000000",
          light: "#050505",
          lighter: "#0b0b0b",
          border: "#1a1a1a",
        },
        page: {
          bg: "#032131",
          text: "#ffffff",
        },
        card: {
          bg: "#03141f",
          border: "#45B7BA",
        },
        cyan: {
          900: "#0b253b",
          800: "#053447",
          700: "#003349",
          600: "#00445C",
          500: "#45B7BA",
        },
      },
      fontFamily: {
        clash: ["ClashDisplay", "system-ui", "sans-serif"],
        roboto: ["var(--font-roboto-flex)", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.05em",
      },
      boxShadow: {
        teal: "0 24px 70px rgba(0, 0, 0, 0.85)",
        "teal-lg": "0 24px 80px rgba(0, 0, 0, 0.9)",
        cyan: "0 18px 60px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
