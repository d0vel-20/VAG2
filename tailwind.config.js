/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}",
     './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0A1F44',
        primaryBlack: '#0C0C0C',
        primaryGold: '#FFD700',
        secondaryBlack: '#1F1F1F',
        backgroundBlack: '#181818',
        accentColor: '#007BFF',
        accentGold: '#C5A300',
        secondaryColor: '#F4F5F7',
        highlightColor: '#F4C542  ',
        fontColor: '#333333',
        textColor: 'white',
        textGold: '#F4D03F',
        dividerColor: '#E5E5E5',},
    },
  },
  plugins: [],
}

