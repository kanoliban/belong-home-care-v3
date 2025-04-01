/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      base: '17px', // Increase base font size for better readability
      '2xs': '0.625rem',
    },
    extend: {
      colors: {
        primary: '#2563EB', // Confidential Blue
        accent: '#FF5C39', // Warm Orange accent
        secondary: '#FFB238', // Kept for now, may remove later
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
              color: '#2563EB',
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