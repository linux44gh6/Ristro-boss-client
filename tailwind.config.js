/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cinzel:"'Cinzel'"
      },
    backgroundImage: ({
        img1:"url('https://i.ibb.co/dWRtFcp/chef-service.jpg')",
        img2:"url('https://i.postimg.cc/15JLh11k/featured.jpg')"
      })
      
    },
  },
  plugins: [require('daisyui')],
}