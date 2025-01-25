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
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      // Adding animations
      animation: {
        moveFishToMiddle: 'moveFishToMiddle 2s linear forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
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
