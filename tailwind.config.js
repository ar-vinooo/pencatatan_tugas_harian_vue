module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-to-left': 'slide linear infinite'
      },
      keyframes: {
        silde: {
          'from': { transform: 'translate(100%, 0)' },
          'to': { transform: 'translate(0, 0)' },
        }
      }
    },
  },
  plugins: [],
}
