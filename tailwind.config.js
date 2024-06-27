/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backColor : '#1d242b',
        primaryColor: "#0067FF",
        yellowColor: "#FF8000",
        purpleColor:"#6A0DAD",
        irisBlueColor:"#5A4FCF",
        headingColor:"",
        textColor:"",
      },
      boxShadow: {
        'custom': '0 0 8px 6px rgba(0, 255, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

