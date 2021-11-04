module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				light: '#4E9FA9',
				DEFAULT: '#2D323B',
				dark: '#232323'
			},
			white: {
				DEFAULT: '#FFF'
			},
			red: {
				DEFAULT: 'red'
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
