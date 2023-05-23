import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        sans: ["var(--font-merriweather-sans)"]
      },
      colors: {
        "primary": {
          "black": "#1D1D1D",
          "pink": "#ED1C94"
        },
        "text": {
          "black": "#484147",
          "light": "#A5A5A5"
        },
        "gradient": {
          "purple": "#6D0EB1",
          "black": "#242332",

        },

      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(102.78deg, #6D0EB1 39.74%, #242332 100%)"
      }
    },
  },
  plugins: [],
} satisfies Config;
