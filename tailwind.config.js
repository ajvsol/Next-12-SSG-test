/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      Open: "Open Sans",
    },
      width: {
        120: "25rem",
        124: "30rem",
        128: "32rem",
      },
      height: {
        120: "25rem",
        124: "30rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
