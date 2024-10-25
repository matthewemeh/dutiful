/** @type {import('tailwindcss').Config} */

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

const config = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/*.html'],
  theme: {
    extend: {
      colors: {
        onyx: '#3F3F3F',
        haiti: '#230B34',
        affair: '#63428E',
        primary: '#532F82',
        heather: '#B1BDCA',
        tuatara: '#383838',
        wistful: '#B6B6E5',
        alabaster: '#F8FAFD',
        'gull-gray': '#A3B1BF',
        'wild-sand': '#F3F3F3',
        'port-gore': '#1E1E4B',
        'storm-dust': '#656565',
        'titan-white': '#EEEEFF',
        'white-lilac': '#FCFAFF',
        'athens-gray': '#E7EAF1',
        'cyber-grape': '#603F8B',
        'granite-gray': '#686868',
        'pastel-purple': '#A16AE8',
      },
      gap: { 15: '60px' },
      width: { 15: '60px', 30: '120px' },
      height: { 15: '60px', unset: 'unset' },
      padding: {
        5.5: '22px',
        6.5: '26px',
        7.5: '30px',
        13: '52px',
        18: '72px',
        22: '88px',
      },
      inset: { 30: '120px' },
      fontWeight: { 450: '450' },
      borderRadius: { '1/2': '50%' },
      margin: { 13: '52px', 15: '60px', 18: '72px' },
      fontFamily: {
        'recoleta-alt': ['Recoleta Alt', ...serifFonts],
        'circular-std': ['Circular Std', ...sanSerifFonts],
      },
      transitionDuration: { 250: '250ms' },
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
