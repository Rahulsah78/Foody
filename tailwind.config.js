/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "text-color-change": {
          "0%": { color: "#ff0000" }, // Starting color (red)
          "20%": { color: "#000" }, // Starting color (black)
          "50%": { color: "#00FF7F" }, // Middle color (green)
          "80%": { color: "#FFF8EE" }, // Middle color (Seashell)
          "100%": { color: "#0000ff" }, // Ending color (blue)
        },
        "from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0.25" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "text-color-change": "text-color-change 5s linear infinite", // Infinite text color change animation
        "flicker-glow": "flicker 4s linear both",
        "pop-up-top":
          "text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "from-left": "from-left 1s ease-in-out",
        "from-top": "from-top 1s ease-in-out",
        "from-right": "from-right 1s ease-in-out",
        "from-bottom": "from-bottom 1s ease-in-out",
        "fade-in": "fade-in 1s ease-in-out",
      },
      
    },
  },
  plugins: [require("daisyui")],
};
