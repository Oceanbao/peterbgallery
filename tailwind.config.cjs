/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				opensans: ['Open Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif']
			},
			colors: {
				'primary-light': 'rgb(var(--color-primary-light) / 1)',
				'primary-dark': 'rgb(var(--color-primary-dark) / 1)'
			}
		}
	},
	plugins: []
};
