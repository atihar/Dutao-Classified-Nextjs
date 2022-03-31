module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio',
   '@tailwindcss/forms')],
   variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
   },
}