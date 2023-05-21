/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(green|yellow|red|blue|orange|whitish|gray|black|white|purple|pink|indigo|teal|cyan|lime|emerald|fuchsia|violet|rose)-(primary|secondary|tertiary|quaternary)/,
    },
  ],
};
