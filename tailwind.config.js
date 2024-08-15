/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'border-to': '#EE2A7B',
				'border-from': '#6228D7',
				yellow: '#F9CE34',
			},
		},
	},
	plugins: [],
};
