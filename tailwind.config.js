/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette
        brand: {
          primary: '#6C5CE7',
          gradient: {
            start: '#6C5CE7',
            end: '#A29BFE',
          },
        },
        text: {
          primary: '#F8F9FA',
          secondary: '#D1D8E0',
        },
        bg: {
          dark: '#1A1A1A',
          light: '#F2F2F2',
        },
      },
    },
  },
  plugins: [],
};