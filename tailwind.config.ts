import type { Config } from 'tailwindcss';

const sanSerifFonts = [
  'system-ui',
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Open Sans',
  'Helvetica Neue',
  'sans-serif',
];

const serifFonts = ['Cambria', 'Cochin', 'Georgia', 'Times New Roman', 'serif'];

const config: Config = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        onyx: '#3F3F3F',
        haiti: '#230B34',
        affair: '#63428E',
        primary: '#532F82',
        heather: '#B1BDCA',
        wistful: '#B6B6E5',
        alabaster: '#F8FAFD',
        'gull-gray': '#A3B1BF',
        'wild-sand': '#F3F3F3',
        'port-gore': '#1E1E4B',
        'storm-dust': '#656565',
        'titan-white': '#EEEEFF',
        'athens-gray': '#E7EAF1',
        'cyber-grape': '#603F8B',
        'granite-gray': '#686868',
        'pastel-purple': '#A16AE8',
      },
      width: { '15': '60px' },
      height: { '15': '60px' },
      fontFamily: {
        'recoleta-alt': ['Recoleta Alt', ...serifFonts],
        'circular-std': ['Circular Std', ...sanSerifFonts],
      },
      keyframes: {
        'rotate-right': {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
        'rotate-left': {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
