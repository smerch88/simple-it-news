import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1200px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1199.98px' },
      notXl: { max: '1199.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2.5rem',
          xl: '0',
        },
      },
      colors: {
        dark: '#070707',
        grey: '#666666',
        lightgrey: 'rgba(7, 7, 7, 0.5)',
        white: '#FEFEFE',
        blue: '#0C4588',
        blue_hover: '#105FBC',
        red: '#A42A03',
        blueDark: '#0357A4',
      },
      fontFamily: {
        lato: ['var(--font-lato)'],
        playfair: ['var(--font-playfairDisplay)'],
      },

      boxShadow: {
        ss: '1px 1px 5px 0px rgba(0, 0, 0, 0.25)',
      },

      fontSize: {
        buttonMobile: [
          '16px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.019px',
            fontWeight: '600',
          },
        ],
        buttonDesk: [
          '20px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.024px',
            fontWeight: '600',
          },
        ],
        quot: [
          '12px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.014px',
            fontWeight: '400',
          },
        ],
        menuTitleMob: [
          '18px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.022px',
            fontWeight: '600',
          },
        ],
        menuTitleTab: [
          '24px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.029px',
            fontWeight: '600',
          },
        ],
        menuItemsMob: [
          '16px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.019px',
            fontWeight: '400',
          },
        ],
        menuItemsTab14: [
          '14px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.017px',
            fontWeight: '400',
          },
        ],
        menuItemsMob13: [
          '13px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.016px',
            fontWeight: '400',
          },
        ],
        menuItemsMob10: [
          '10px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.012px',
            fontWeight: '400',
          },
        ],
        t10: [
          '10px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.017px',
            fontWeight: '400',
          },
        ],
        t14: [
          '14px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.017px',
            fontWeight: '400',
          },
        ],
        t16: [
          '16px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.019px',
            fontWeight: '400',
          },
        ],
        t18: [
          '18px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.022px',
            fontWeight: '400',
          },
        ],
        t20: [
          '20px',
          {
            lineHeight: '1.3',
            letterSpacing: '0.024px',
            fontWeight: '600',
          },
        ],
        t24: [
          '24px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.029px',
            fontWeight: '600',
          },
        ],
        t32: [
          '32px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.038px',
            fontWeight: '600',
          },
        ],
        t40: [
          '40px',
          {
            lineHeight: '1.5',
            letterSpacing: '0.048px',
            fontWeight: '600',
          },
        ],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },

          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
