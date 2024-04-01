import { createConfig, defaultConfig } from '@tokenami/css';

import { theme } from '../app/theme/light/theme';

export const typography = {
	'font-size': {
		'12': `${12 / 16}rem`,
		'14': `${14 / 16}rem`,
		'16': `${16 / 16}rem`,
		'18': `${18 / 16}rem`,
		'20': `${20 / 16}rem`,
		'24': `${24 / 16}rem`,
		'28': `${28 / 16}rem`,
		'35': `${35 / 16}rem`,
		'60': `${60 / 16}rem`,
	},
	'leading': {
		'12': `${16 / 16}rem`,
		'14': `${20 / 16}rem`,
		'16': `${24 / 16}rem`,
		'18': `${26 / 16}rem`,
		'20': `${28 / 16}rem`,
		'24': `${30 / 16}rem`,
		'28': `${36 / 16}rem`,
		'35': `${40 / 16}rem`,
		'60': `${60 / 16}rem`,
	},
	'tracking': {
		'12': '0.0025em',
		'14': '0em',
		'16': '0em',
		'18': '-0.0025em',
		'20': '-0.005em',
		'24': '-0.00625em',
		'28': '-0.0075em',
		'35': '-0.01em',
		'60': '-0.025em',
	},
};

export default createConfig({
	include: ['./app/**/*.{ts,tsx}'],
	grid: `${1 / 16}rem`,
	keyframes: {
		steamFade: {
			'0%, 100%': { opacity: '0' },
			'50%': { opacity: '1' },
		},
		steamTransform: {
			'0%': { transform: 'translateY(0.5rem) scale(0.9)' },
			'100%': { transform: 'translate(-0.125rem) scale(1.1)' },
		},
	},
	properties: {
		...defaultConfig['properties'],
		'background-color': ['background-color'],
		'border-color': ['border-color'],
		'border-block-color': ['border-color'],
		'border-block-end-color': ['border-color'],
		'border-block-start-color': ['border-color'],
		'border-inline-color': ['border-color'],
		'border-inline-end-color': ['border-color'],
		'border-inline-start-color': ['border-color'],
		'color': ['text-color'],
		'font-family': ['font-family'],
		'fill': ['background-color', 'border-color', 'text-color'],
		'margin': ['grid', 'size'],
		'margin-block': ['grid', 'size'],
		'margin-block-end': ['grid', 'size'],
		'margin-block-start': ['grid', 'size'],
		'margin-inline': ['grid', 'size'],
		'margin-inline-end': ['grid', 'size'],
		'margin-inline-start': ['grid', 'size'],
	},
	responsive: {
		bp10: '@media (min-width: 640px)',
		bp20: '@media (min-width: 768px)',
		bp30: '@media (min-width: 1024px)',
		bp40: '@media (min-width: 1280px)',
		bp50: '@media (min-width: 1536px)',
		bp60: '@media (min-width: 1920px)',
	},
	theme: {
		'alpha': {},
		'anim': {
			steamRise:
				'3s ease-in-out infinite steamFade, 3s cubic-bezier(0.4, 0, 0.2, 1) infinite steamTransform',
		},
		'background-color': {
			...theme['background-color'],
		},
		'border': {},
		'border-color': {
			...theme['border-color'],
		},
		'ease': {
			'linear': 'linear',
			'in': 'cubic-bezier(0.4, 0, 1, 1)',
			'out': 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},
		'font-family': {
			sans: "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
			display:
				"ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif",
			mono: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
		},
		'font-size': {
			...typography['font-size'],
		},
		'leading': {
			...typography['leading'],
		},
		'line-style': {},
		'radii': {},
		'size': {
			'10': '448px',
			'20': '688px',
			'30': '880px',
			'40': '1136px',
			'auto': 'auto',
			'full': '100%',
		},
		'shadow': {},
		'text-color': {
			...theme['text-color'],
		},
		'tracking': {
			...typography['tracking'],
		},
		'transition': {},
		'weight': {
			'400': '400',
			'700': '700',
		},
		'z': {
			'0': '0',
			'10': '10',
			'20': '20',
			'30': '30',
		},
	},
});
