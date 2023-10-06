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
      // xl: '1200px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1199.98px' },
      // notXl: { max: '1199.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2.5rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
