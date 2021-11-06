module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				light: '#4E9FA9',
				DEFAULT: 'rgba(56,139,253,0.4)',
				dark: 'rgba(56,139,253,0.15)'
			},
			black: {
				light: '#010409',
				DEFAULT: '#010409',
				dark: '#010409'
			},
			white: {
				DEFAULT: '#fff',
				dark: '#57606a'
			},
			red: {
				light: '#f85149',
				DEFAULT: '#c93c37',
				dark: '#da3633'
			},
			grey: {
				dark: '#6e7681',
				DEFAULT: 'rgba(110,118,129,0.4)',
				light: 'rgba(110,118,129,0.1)'
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
