/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      'babypowder': '#f1f1f1',
      'brightwhite': '#F4F5F0',
      'springbreak': '#00aaee',
      'milkwhite': '#fefcff',
      'azure': '#18a3da',
      'ocean':'#26c1ff',
      'midnightsky': '#111827',
      'darkwhite':'#9ca3af',
      'babyblue':'#3b82f6',
      'grayblack': '#6b7280',
      'black': '#1b2b41',
      
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

