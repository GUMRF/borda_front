module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // purge: {
  //   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // },
  theme: {
    // width: {
    //   px: '1px',
    //   custom: '378px',
    // },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
}