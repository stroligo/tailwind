/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: '#858585',
        blue: '#06AEEF',
        'blue-dark': '#2A1E50',
        orange: '#F58556',
        'orange-light': '#E7A519',
        purple: '#827BC6',
        'purple-dark': '#701C7F',
        pink: '#ED018B',
        yellow: '#E9D758',
        teal: '#44A8B8',
      },
      fontFamily: {
        geo: ['Geologica', 'sans-serif'],
      },
      fontSize: {
        label: '0.8125rem',
        hero: '1rem',
      },
    },
  },
  plugins: [],
};
