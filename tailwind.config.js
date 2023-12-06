/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      colors: {
        mainBg: '#000812',
        textMain: '#EBEBEB',
        textDim: '#D0D0D0',
        textDim2: '#3E3E3E',
        accentBlue: '#2889a3',
        accentTeal: '#0FC5AF',
        accentPink: '#DB0E4B',
        accentYellow: '#E7AA0D',
      },
    },
  },
  plugins: [],
}

