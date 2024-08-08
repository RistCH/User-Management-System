/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-10": "#3B7261",
        "green-20": "#1AB385",
        "green-30": "#c7e6d7",
        "red-10": "#CC3336",
        "blue-10": "#0095B7",
        "blue-20": "#239eba",
        "gray-10": "#363636",
        "gray-20": "#8D90A1",
        "gold-10": "#FFAE42",
        "white-10": "#FEFEFE",
        "violet-10": "#9065ca",
        "oxford-blue": "#0A1128",
        "penn-blue": "#001F54",
        "indigo-dye": "#034078",
        "cerulean": "#1282A2",
        "white-type": "#FEFCFB"
      },
      fontFamily: {
        montserrat: ["Montserrrat", "sans-serif"]
      },
      height: {
        "normal-screen": "48rem",
        "profile-border": "42rem",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}