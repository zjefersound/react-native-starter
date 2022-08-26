const colors = {
  white: '#FDFDFF',
  blue: '#3772ff',
  green: '#2EDC9D',
};

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
