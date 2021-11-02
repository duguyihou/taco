module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				DEFAULT: '#232323',
				dark: '#2D323B'
			},
			white: {
				DEFAULT: '#FFF'
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
