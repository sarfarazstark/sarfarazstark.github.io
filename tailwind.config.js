/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'border-to': '#EE2A7B',
				'border-from': '#6228D7',
				yellow: '#F9CE34',
				'figma-1': '#F24E1E',
				'figma-2': '#A259FF',
				'figma-3': '#0ACF83',
			},
			fontFamily: {
				title: ['Khand', 'sans-serif'],
				paragraph: ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
