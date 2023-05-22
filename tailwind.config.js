/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				'roboto-slab': ['Roboto Slab', 'serif'],
				'wix-madefor-display': ['Wix Madefor Display', 'serif']
			},
			backgroundImage: {
				'landing-hero': "url('./src/assets/images/landing-hero-2.png')",
				'not-found': "url('./src/assets/images/not-found.png')"
			},
			colors: {
				'blue-primary': '#1256A1',
				'blue-secondary': '#93BFFE',
				'blue-tertiary': '#393744',
				'green-primary': '#9ED270'
			}
		}
	},
	plugins: [],
	safelist: [
		{
			pattern:
				/(bg|text|border)-(green|yellow|red|blue|orange|whitish|gray|black|white|purple|pink|indigo|teal|cyan|lime|emerald|fuchsia|violet|rose)-(primary|secondary|tertiary|quaternary)/
		}
	]
};
