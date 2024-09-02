// tailwind.config.js
module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        secondary: "#14171A",
      },
    },
  },
  plugins: [],
};
