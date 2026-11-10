/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0b1f3f', 800: '#12294d', 700: '#1b3a6b' },
        royal: { DEFAULT: '#1d5fd6', dark: '#164bad' },
        sky: { accent: '#7cc4f5' },
        mist: '#f3f7fd',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
