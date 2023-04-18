/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textColor': '#213547',
        'titleColor': '#000000',
        'borderColor': 'rgb(3, 3, 53)',
        'button':'rgb(233, 243, 247)',
        'hover': 'rgb(126, 134, 151)',
      },
    },
  },
  plugins: [],
}

