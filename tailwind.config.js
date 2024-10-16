/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        seagreen: {
          DEFAULT: "#199A8E",
          100: "#F5F8FF",  
          200: "#E8F3F1",  
          300: "#B8DFDD",  
          400: "#52D1C6",  
        },
        black: {
          DEFAULT: "#000",
          100: "#16161c",
          200: "#0f0f12",
        },
        gray: {
          100: "#F9FAFB",
          200: "#E5E7EB",
          300: "#A1A8B0",
          400: "#717784",
        },
        red: {
          100: "#FC6969",
          200: "#FF5C5C"
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

