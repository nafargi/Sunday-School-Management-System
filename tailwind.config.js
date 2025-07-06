/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // or adapt for Next.js or others
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#9333ea',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
jgbc