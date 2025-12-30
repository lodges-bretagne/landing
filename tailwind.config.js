/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-lodge': {
          50: '#f5f6f7',
          100: '#e8eaed',
          200: '#d1d5db',
          300: '#a8b0b9',
          400: '#7d8a97',
          500: '#64707d',
          600: '#576572',
          700: '#4a5560',
          800: '#3d4550',
          900: '#2f353d',
        },
        'green-lodge': {
          50: '#f6f7f6',
          100: '#eaebe9',
          200: '#d4d6d2',
          300: '#b3b6af',
          400: '#8f938a',
          500: '#7a7d73',
          600: '#6F7267',
          700: '#5a5d54',
          800: '#484a42',
          900: '#363730',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

