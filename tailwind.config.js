/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Adding keyframes for fish animation
      keyframes: {
        moveFishToMiddle: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(50%)' },
        },
      },
      // Adding animations
      animation: {
        moveFishToMiddle: 'moveFishToMiddle 2s linear forwards',
      },
      // Adding custom background images
      backgroundImage: {
        'common-bg': "url('/src/assets/Background.png')",
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
