/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'pitch-black':'#1E1E26',
        'orange': '#FF7446',
        'gray':'#E8E8ED',
        'graytext':'#A5A5A8',
        'grayheading':'#ccccd7',
        'background':'rgba(255, 255, 255, 0.2)',
        'flamingoorange':'#FFBBB3',
        'borderness':'#484856',
        'footer-background': '#27272E',
        'yes':'#F9F9FB',
      },
      screens: {
        'xsm':'320px',
      },
      margin: {
        '28':'5rem',
      },
      spacing: {
        '16' : '16px',
        '18': '18px',
        '24' : '24px',
        '32' : '32px',
        '35' : '5.28rem',
        '36' : '36px',
        '11' : '2.75rem',
        '0.2': '0.2rem',
        '0.1': '0.1rem',
      },
      lineHeight: {
        '11':'3.5rem',
        '12':'4rem',
      },
      height: {
        '680' : '680px',
        '0.1':'0.1rem',
        '763':'763px',
        '100':'548px',
        '105':'50rem',
        '107':'40rem',
        '106':'30rem',
        '50':'500px',
        '90' : '302px',
        '102':'29rem',
      },
      width: {
        '105':'55rem',
        '408':'394px',
        'ch' : '1ch',
        '15ch':'15ch',
        '960':'700px',
        '100':'30rem',
        'ch202':'5ch',
        'ch201': '14ch',
        'ch21' : '30ch',
        'ch24': '20ch',
        'ch22' : '42ch',
        'ch23' : '25ch',
        'ch27' : '27ch',
        'ch35' : '35ch',
        'ch45' : '45ch',
        'ch48' : '48ch',
        'ch40' : '31ch',
        'ch67': '67ch',
        'ch68': '75ch',
        'ch85':'85ch',
        'ch86':'95ch',
        'ch20' : '35ch',
        "490" : "535px",
        '200': '200px',
        "20":'5rem',
      },
    },
  },
  plugins: [],
}
