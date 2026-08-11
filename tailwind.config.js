/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7f5',
          100: '#d4ecea',
          200: '#a9d9d4',
          300: '#74bfb9',
          400: '#4ba39d',
          500: '#2f827c',
          600: '#226763',
          700: '#1d5451',
          800: '#1a4543',
          900: '#173a38',
          950: '#0d2625',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdca8',
          300: '#ffc070',
          400: '#ff9b37',
          500: '#f97d13',
          600: '#ea6409',
          700: '#c24a0a',
          800: '#9a3a10',
          900: '#7c3211',
          950: '#431706',
        },
        ink: '#0a1f2c',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(10, 31, 44, 0.08), 0 4px 16px -4px rgba(10, 31, 44, 0.06)',
        card: '0 1px 3px rgba(10, 31, 44, 0.06), 0 8px 24px -8px rgba(10, 31, 44, 0.12)',
        lift: '0 12px 40px -12px rgba(10, 31, 44, 0.25)',
      },
      spacing: {
        '13': '3.25rem',
        '18': '4.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
