/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    screens: {
      'ip4': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage:{
        'lumba' : "url('/src/IMG/fotolumba.jpg')",
        'coral' : "url('/src/IMG/coral.jpeg')",
        'coral2' : "url('/src/IMG/coral2.jpg')",
        'shark' : "url('/src/IMG/sharkdoo.jpeg')",
      },
      boxShadow: {
        '3xl': '10px 10px 15px 10px rgba(0, 0, 0, 0.3)',
        '4xl': '5px 5px 5px 5px rgba(0, 0, 0, 0.9)',
        '5xl': '5px 5px 5px 5px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
