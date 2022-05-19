module.exports = {
	content: ['_site/**/*.html'],
	safelist: [],
	theme: {
		fontFamily: {
			sans: ['Inter var', 'system-ui', 'ui-sans-serif'],
			serif: ['Inter var', 'system-ui', 'ui-sans-serif'],
			display: ['Inter var', 'system-ui', 'ui-sans-serif'],
			body: ['Inter var', 'system-ui', 'ui-sans-serif'],
		},
		fontSize: {
			xx: '0.65rem',
			xs: '0.75rem',
			xz: '0.8rem',
			sm: '.845rem',
			sz: '0.875rem',

			tiny: '.9125rem',
			tb: '.935rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'4xxl': '2.5rem',
			'5xl': '2.75rem',
			'6xl': '3rem',
			'7xl': '3.5rem',
		},
		active: 'currentColor',
		extend: {
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 0.55)',
				'4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
			},
			colors: {
				change: 'black',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),
	],
};
