/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #E75300 0%, #060200 100%)',
        'dark-gradient': 'linear-gradient(180deg, #060200 0%, #101010 100%)',
      },
      colors: {
        // Paleta de cores light
        light: {
          'bg-gradient': 'linear-gradient(180deg, #E75300 0%, #060200 100%)',
          'card-bg': '#FFFFFF',
          'text-primary': '#101010',
          'text-secondary': '#101010',
          'text-tertiary': '#FFFFFF',
          primary: '#E75300',
        },
        // Paleta de cores dark
        dark: {
          'bg-gradient': 'linear-gradient(180deg, #000000 0%, #0F0601 100%)',
          'card-bg': '#0E0E0E',
          'text-primary': '#FFFFFF',
          'text-secondary': '#CCCCCC',
          'text-tertiary': '#FFFFFF',
          primary: '#E75300',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

