/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5C39',
        secondary: '#FFB238',
        background: '#F5F7FA',
        text: '#444444',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        '84': '21rem',
        '96': '24rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      gridTemplateColumns: {
        'masonry': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#444444',
            h1: {
              fontFamily: 'Georgia, serif',
              fontWeight: '400',
            },
            h2: {
              fontFamily: 'Georgia, serif',
              fontWeight: '400',
            },
            h3: {
              fontFamily: 'Georgia, serif',
              fontWeight: '400',
            },
            a: {
              color: '#FF5C39',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};