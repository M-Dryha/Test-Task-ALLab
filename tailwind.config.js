module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    letterSpacing: {
      tightest: '-0.625px',
      'span-text': '0.23619px',
      'title-text': '0.413333px',
      'title-nav': ' -0.5625px',
      'title-detail': '-0.75px',
      'list-title': '-0.457143px',
    },
    lineHeight: {
      'title-height': '25px',
    },

    screens: {
      xs: '396px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        blue: '#3A4562',
        white: '#FFFFFF',
        'background-color': '#F5F5F5',
        'button-blue': '#384564',
        'button-light-blue': ' rgba(161, 177, 219, 0.317343)',
        'button-yellow': 'rgba(255, 207, 0, 0.15)',
        'list-title': '#55699E',
        'list-title-yellow': '#988B49',
        'gray-button': '#D3D3D3',
        'contact-address': '#E7EAF0',
        maps: '#2A3047',
        'gray-light': '#878D9D',
      },
      fontFamily: {
        sans: ['Proxima Nova', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '3px': '3px',
        '8px': '8px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '25px': '25px',
        '30px': '30px',
        '55px': '55px',
        '60px': '60px',
        '65px': '65px',
        '85px': '85px',
        '1400px': '1400px',
        '260px': '260px',
        '3%': '3%',
      },
    },
  },
  plugins: [],
};
