/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['media', '[data-mode="dark"]'],
  content: ["./templates/**/*.html"],
  theme: {
    extend: {},
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
    dropShadow: {
      'dark': '0 0 10px rgba(255,255,255,0.5)',
      'light': '0 0 10px rgba(0,0,0,0.2)',
      'blue': '0 0 10px rgba(0,0,255,0.5)',
      'sky-blue': '0 0 10px rgba(135,206,235,0.5)', // Added sky blue drop shadow
    },
  },
  plugins: [],
}

