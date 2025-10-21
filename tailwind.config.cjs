/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      './index.html',              // plain HTML
      './src/**/*.{js,jsx,ts,tsx}' // all React/JS/TS files
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0A2342',
          accent: '#00A896',
          'accent-secondary': '#F0C808',
          'background-light': '#F9FAFB',
          'background-dark': '#030712',
          'section-light': '#FFFFFF',
          'section-dark': '#0D1117',
          'text-light': '#1F2937',
          'text-dark': '#E5E7EB',
          'text-dark-muted': '#9CA3AF'
        },
        fontFamily: {
          display: ['Montserrat', 'sans-serif'],
          body: ['Roboto', 'serif']
        }
      },
    },
    plugins: [],
  }
  