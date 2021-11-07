module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				light: '#B6BEB2',
				DEFAULT: '#719979'
			},
			black: {
				light: '#443c44',
				DEFAULT: '#222222'
			},
			red: {
				light: '#e43c24',
				DEFAULT: '#842414'
			},
			grey: {
				light: '#fff',
				dark: '#F5F3F2',
				DEFAULT: '#f7f7f7'
			}
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
