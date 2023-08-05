/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      main: "#121728",
      secondary: "#FAFAFC",
      hover: "#354153",
      title: "#303133",
      text: "#C7C9CF",
      error: "#F01A1A",
      success: "#00F30A",
      current: "#F7F7F7",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
    },
  },
  plugins: [],
};
