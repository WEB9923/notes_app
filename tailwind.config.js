/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bg: {
        lighter: "#353434",
        darker: "#2b2a2a"
      },
      txt: {
        lighter: "#725dda",
        darker: "#5241a4",
        inputText: "#776ab0",
        redText: "#b25b5b",
        greenText: "#759047"
      },
      active: {
        lighter: "rgba(32,31,31,0.32)"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

