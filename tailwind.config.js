/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
     
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },

        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1.3)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
};
