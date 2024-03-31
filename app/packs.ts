import { sva } from '#styled-system/css';

// Track -----------------------------------------------------------------------

export const track = sva({
	slots: ['root', 'center', 'rail'],
	base: {
		root: { display: 'flex' },
		center: { flexGrow: 1, minInlineSize: 0 },
		rail: { display: 'inline-flex', flexShrink: 0 },
	},
	variants: {
		verticalAlign: {
			start: {
				root: { alignItems: 'flex-start' },
			},
			center: {
				root: { alignItems: 'center' },
			},
			end: {
				root: { alignItems: 'flex-end' },
			},
		},
	},
	defaultVariants: {
		verticalAlign: 'center',
	},
});

// Typography ------------------------------------------------------------------

export const typography = {
	'12': {
		fontSize: '12px',
		lineHeight: '16px',
		_after: {
			marginBlockStart: '-0.3082em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.3252em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '0.0025em',
	},
	'14': {
		fontSize: '14px',
		lineHeight: '20px',
		_after: {
			marginBlockStart: '-0.3558em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.3728em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '0em',
	},
	'16': {
		fontSize: '16px',
		lineHeight: '24px',
		_after: {
			marginBlockStart: '-0.3915em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.4085em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '0em',
	},
	'18': {
		fontSize: '18px',
		lineHeight: '26px',
		_after: {
			marginBlockStart: '-0.3637em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.3807em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.0025em',
	},
	'20': {
		fontSize: '20px',
		lineHeight: '28px',
		_after: {
			marginBlockStart: '-0.3415em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.3585em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.005em',
	},
	'24': {
		fontSize: '24px',
		lineHeight: '30px',
		_after: {
			marginBlockStart: '-0.2665em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.2835em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.00625em',
	},
	'28': {
		fontSize: '28px',
		lineHeight: '36px',
		_after: {
			marginBlockStart: '-0.2844em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.3014em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.0075em',
	},
	'35': {
		fontSize: '35px',
		lineHeight: '40px',
		_after: {
			marginBlockStart: '-0.2129em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.2299em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.01em',
	},
	'60': {
		fontSize: '60px',
		lineHeight: '72px',
		_after: {
			marginBlockStart: '-0.2415em',
			content: "''",
			display: 'table',
		},
		_before: {
			marginBlockEnd: '-0.2585em',
			content: "''",
			display: 'table',
		},
		letterSpacing: '-0.015em',
	},
} as const;
