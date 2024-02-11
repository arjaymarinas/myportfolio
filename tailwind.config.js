/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
   
  ],
  variants: {
    extend: {
      gridTemplateColumns: ['responsive', 'hover', 'focus'],
    },
  },
}

