/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
        xl: '1.5rem',
        '2xl': '6rem',
      },
      center: true,
    },
    fontSize: {
      'sm-m': ['10px', '16px'],
      'md-m': ['12px', 'normal'],
      'base-m': ['14px', '20px'],
      'lg-m': ['20px', '17px'],
      'xl-m': ['30px', 'normal'],
      'title-m': ['40px', { lineHeight: '56px', letterSpacing: '-1.6px' }],
      'title-t': ['67px', { lineHeight: 'normal', letterSpacing: '-2.68px' }],
      'title-d': ['98px', { lineHeight: 'normal', letterSpacing: '-3.92px' }],
      'btn-m': ['18px', '48px'],
      'sm-t': ['14px'],
      'base-t': ['16px', 'normal'],
      '2xl-t': ['67px', 'normal'],
      'pos-m': ['12px', { lineHeight: 'normal', letterSpacing: '9.48px' }],
      'pos-t': ['14px', { lineHeight: 'normal', letterSpacing: '25.9px' }],
      'pos-d': ['16px', { lineHeight: 'normal', letterSpacing: '36.48px' }],
      label: ['12px', { lineHeight: '24px', letterSpacing: '2.4px' }],
    },
    // colors: {
    //   "write-o": "rgba(255, 255, 255, 0.05)",
    //   "write-o2": "rgba(255, 255, 255, 1)",
    //   red: "#FF5757",
    // },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};

// text-md-m   tracking-[9.48px] 
