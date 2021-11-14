module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				light: '#809271',
				DEFAULT: '#638263',
				dark: '#546E55'
			},
			black: {
				light: '#443c44',
				DEFAULT: '#222222'
			},
			red: {
				DEFAULT: '#e43c24'
			},
			grey: {
				light: '#fff',
				dark: '#F5F3F2',
				DEFAULT: '#f7f7f7'
			},
			selected: '#E2F0FF',
			bg: '#C1C7B9'
		},
		extend: {
			gridTemplateColumns: {
				todo: '2rem 1fr 2rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
