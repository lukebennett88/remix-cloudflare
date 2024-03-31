import { createConfig, defaultConfig } from '@tokenami/css';

import { theme } from '../app/theme/light/theme';
import { typography } from '../app/theme/typography';

export default createConfig({
	include: ['./app/**/*.{ts,tsx}'],
	grid: `${1 / 16}rem`,
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
		'anim': {},
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
			rounded:
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
