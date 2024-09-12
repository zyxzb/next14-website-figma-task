import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grayLight: '#F7F7F7',
        white: '#FFFFFF',
        grayDark: '#282828',
        grayDarker: '#1D1D1B',
        grayDot: '#F1F1F1',
        black: '#000000',
        blue: '#0147FF',
      },
      borderRadius: {
        button: '8px',
      },
      padding: {
        'buttons-tb': '12px',
        'buttons-lr': '24px',
        'layout-padding': 'var(--padding)',
      },
      spacing: {
        'layout-padding': 'var(--padding)',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        // Roboto_Flex in layout as default
      },
      backgroundImage: {
        'hero-pattern': "url('/lines.svg')",
      },
      maxWidth: {
        container: 'var(--container-width)',
        'container-md': 'var(--container-md-width)',
      },
      screens: {
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
