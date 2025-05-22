/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Yellow
        primary: "#FF0066", // Red

        dark: {
          100: "#121212",
        },
        light: {
          100: "#F5F5F5",
        },
      },
    },
  },
  plugins: [],
};
