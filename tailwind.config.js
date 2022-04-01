module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: {
  //   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // },
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}