import {
	blackP3A,
	orangeP3,
	sageDarkP3,
	sandP3,
	sandP3A,
	tealDarkP3,
} from '@radix-ui/colors';
import { createConfig, defaultConfig } from '@tokenami/css';

export const light = {
	'background-color': {
		'neutral': sandP3.sand1,
		'neutral-hover': sandP3.sand2,
		'neutral-pressed': sandP3.sand3,
		'neutral-disabled': sandP3.sand4,
		'neutral-selected': sandP3.sand5,
		'neutral-inverse': sandP3.sand12,
		'neutral-inverse-hover': sandP3.sand11,
		'neutral-inverse-pressed': sandP3.sand10,
		'neutral-inverse-disabled': sandP3.sand9,
		'accent': orangeP3.orange9,
		'accent-hover': orangeP3.orange8,
		'accent-pressed': orangeP3.orange7,
		'accent-disabled': orangeP3.orange6,
		'accent-selected': orangeP3.orange5,
		'accent-inverse': orangeP3.orange4,
		'accent-inverse-hover': orangeP3.orange3,
		'accent-inverse-pressed': orangeP3.orange2,
		'accent-inverse-disabled': orangeP3.orange1,
		// "success": success["9"],
		// "success-hover": success["8"],
		// "success-pressed": success["7"],
		// "warning": warning["9"],
		// "warning-hover": warning["8"],
		// "warning-pressed": warning["7"],
		// "error": error["9"],
		// "error-hover": error["8"],
		// "error-pressed": error["7"],
	},
	'border-color': {
		neutral: sandP3.sand6,
		accent: orangeP3.orange6,
		// "error": error[6],
		// "success": success[6],
		inverse: sandP3.sand12,
	},
	'text-color': {
		'neutral': sandP3.sand12,
		'neutral-muted': sandP3.sand11,
		'accent': orangeP3.orange10,
		'accent-muted': orangeP3.orange9,
		'neutral-inverse': sandP3.sand1,
		'neutral-inverse-muted': sandP3.sand2,
		'accent-inverse': orangeP3.orange1,
		'accent-inverse-muted': orangeP3.orange2,
		// "success": success[12],
		// "success-muted": success[11],
		// "success-inverse": success[1],
		// "success-inverse-muted": success[2],
		// "warning": warning[12],
		// "warning-muted": warning[11],
		// "warning-inverse": warning[1],
		// "warning-inverse-muted": warning[2],
		// "error": error[12],
		// "error-muted": error[11],
		// "error-inverse": error[1],
		// "error-inverse-muted": error[2],
	},
};

export const dark = {
	'background-color': {
		'neutral': sageDarkP3.sage1,
		'neutral-hover': sageDarkP3.sage2,
		'neutral-pressed': sageDarkP3.sage3,
		'neutral-disabled': sageDarkP3.sage4,
		'neutral-selected': sageDarkP3.sage5,
		'neutral-inverse': sageDarkP3.sage12,
		'neutral-inverse-hover': sageDarkP3.sage11,
		'neutral-inverse-pressed': sageDarkP3.sage10,
		'neutral-inverse-disabled': sageDarkP3.sage9,
		'accent': tealDarkP3.teal9,
		'accent-hover': tealDarkP3.teal8,
		'accent-pressed': tealDarkP3.teal7,
		'accent-disabled': tealDarkP3.teal6,
		'accent-selected': tealDarkP3.teal5,
		'accent-inverse': tealDarkP3.teal4,
		'accent-inverse-hover': tealDarkP3.teal3,
		'accent-inverse-pressed': tealDarkP3.teal2,
		'accent-inverse-disabled': tealDarkP3.teal1,
		// "success": success["9"],
		// "success-hover": success["8"],
		// "success-pressed": success["7"],
		// "warning": warning["9"],
		// "warning-hover": warning["8"],
		// "warning-pressed": warning["7"],
		// "error": error["9"],
		// "error-hover": error["8"],
		// "error-pressed": error["7"],
	},
	'border-color': {
		neutral: sageDarkP3.sage6,
		accent: tealDarkP3.teal6,
		// "error": error[6],
		// "success": success[6],
		inverse: sageDarkP3.sage12,
	},
	'text-color': {
		'neutral': sageDarkP3.sage12,
		'neutral-muted': sageDarkP3.sage11,
		'accent': tealDarkP3.teal10,
		'accent-muted': tealDarkP3.teal9,
		'neutral-inverse': sageDarkP3.sage1,
		'neutral-inverse-muted': sageDarkP3.sage2,
		'accent-inverse': tealDarkP3.teal1,
		'accent-inverse-muted': tealDarkP3.teal2,
		// "success": success[12],
		// "success-muted": success[11],
		// "success-inverse": success[1],
		// "success-inverse-muted": success[2],
		// "warning": warning[12],
		// "warning-muted": warning[11],
		// "warning-inverse": warning[1],
		// "warning-inverse-muted": warning[2],
		// "error": error[12],
		// "error-muted": error[11],
		// "error-inverse": error[1],
		// "error-inverse-muted": error[2],
	},
};

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

const modes = {
	light,
	dark,
};

function createTheme(mode: 'light' | 'dark') {
	return {
		'alpha': {},
		'anim': {
			steamRise:
				'3s ease-in-out infinite steamFade, 3s cubic-bezier(0.4, 0, 0.2, 1) infinite steamTransform',
		},
		'background-color': {
			...modes[mode]['background-color'],
		},
		'border': {},
		'border-color': {
			...modes[mode]['border-color'],
		},
		'ease': {
			'linear': 'linear',
			'in': 'cubic-bezier(0.4, 0, 1, 1)',
			'out': 'cubic-bezier(0, 0, 0.2, 1)',
			'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
		},
		'flex-grow': {
			'0': '0',
			'1': '1',
		},
		'font-family': {
			sans: "'Helvetica Neue', Helvetica, Inter, ui-sans-serif, system-ui, Roboto, 'Arial Nova', 'Nimbus Sans', Arial, sans-serif",
			mono: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
		},
		'font-size': {
			...typography['font-size'],
		},
		'leading': {
			...typography['leading'],
		},
		'line-style': {},
		'radii': {
			none: '0px',
			full: '9999px',
		},
		'size': {
			'10': '448px',
			'20': '688px',
			'30': '880px',
			'40': '1136px',
			'auto': 'auto',
			'full': '100%',
		},
		'shadow': {
			'10': `
				inset 0 0 0 1px ${sandP3A.sandA5},
				inset 0 1.5px 2px 0 ${sandP3A.sandA2},
				inset 0 1.5px 2px 0 ${blackP3A.blackA2}
			`,
			'20': `
				0 0 0 1px ${sandP3A.sandA3},
				0 0 0 0.5px ${blackP3A.blackA1},
				0 1px 1px 0 ${sandP3A.sandA2},
				0 2px 1px -1px ${blackP3A.blackA1},
				0 1px 3px 0 ${blackP3A.blackA1}
			`,
			'30': `
				0 0 0 1px ${sandP3A.sandA3},
				0 2px 3px -2px ${sandP3A.sandA3},
				0 3px 12px -4px ${blackP3A.blackA2},
				0 4px 16px -8px ${blackP3A.blackA2}
			`,
			'40': `
				0 0 0 1px ${sandP3A.sandA3},
				0 8px 40px ${blackP3A.blackA1},
				0 12px 32px -16px ${sandP3A.sandA3}
			`,
			'50': `
				0 0 0 1px ${sandP3A.sandA3},
				0 12px 60px ${blackP3A.blackA3},
				0 12px 32px -16px ${sandP3A.sandA5}
			`,
			'60': `
				0 0 0 1px ${sandP3A.sandA3},
				0 12px 60px ${blackP3A.blackA3},
				0 16px 64px ${sandP3A.sandA2},
				0 16px 36px -20px ${sandP3A.sandA7}
			`,
		},
		'text-color': {
			...modes[mode]['text-color'],
		},
		'tracking': {
			...typography['tracking'],
		},
		'transition': {},
		'transition-duration': {
			'150ms': '150ms',
			'200ms': '200ms',
			'300ms': '300ms',
			'500ms': '500ms',
		},
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
	};
}

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
		'fill': ['background-color', 'border-color', 'text-color'],
		'flex-grow': ['flex-grow'],
		'font-family': ['font-family'],
		'inline-size': ['grid', 'size'],
		'margin': ['grid', 'size'],
		'margin-block': ['grid', 'size'],
		'margin-block-end': ['grid', 'size'],
		'margin-block-start': ['grid', 'size'],
		'margin-inline': ['grid', 'size'],
		'margin-inline-end': ['grid', 'size'],
		'margin-inline-start': ['grid', 'size'],
		'outline-color': ['border-color'],
		'outline-offset': ['grid'],
		'outline-width': ['grid'],
		'text-decoration-color': ['text-color'],
		'transition-duration': ['transition-duration'],
	},
	responsive: {
		bp10: '@media (min-width: 640px)',
		bp20: '@media (min-width: 768px)',
		bp30: '@media (min-width: 1024px)',
		bp40: '@media (min-width: 1280px)',
		bp50: '@media (min-width: 1536px)',
		bp60: '@media (min-width: 1920px)',
	},
	themeSelector: (mode) => {
		if (mode === 'light') {
			return ':root';
		}
		return `[data-theme=${mode}]`;
	},
	selectors: {
		...defaultConfig['selectors'],
		marker: '&::marker',
		selection: '&::selection',
	},
	theme: {
		modes: {
			light: createTheme('light'),
			dark: createTheme('dark'),
		},
	},
});
