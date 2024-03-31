import { css } from '@tokenami/css';

type TokenamiProperties = Parameters<typeof css>[0];

// Visually Hidden -------------------------------------------------------------

export function visuallyHidden(overrides?: TokenamiProperties) {
	return css(
		{
			'--position': 'absolute',
			'--width': 1,
			'--height': 1,
			'--padding': 0,
			'--margin': -1,
			'--overflow': 'hidden',
			'--clip-path': 'rect(0 0 0 0)',
			'--white-space': 'nowrap',
			'--border-width': '0',
		},
		overrides,
	);
}

// Track -----------------------------------------------------------------------

const verticalAlignMap = {
	start: 'flex-start',
	center: 'center',
	end: 'flex-end',
} as const;

type TrackArgs = {
	verticalAlign?: keyof typeof verticalAlignMap;
};

export function track({ verticalAlign = 'center' }: TrackArgs = {}) {
	return {
		root: (overrides?: TokenamiProperties) =>
			css(
				{
					'--display': 'flex',
					'--align-items': verticalAlignMap[verticalAlign],
				},
				overrides,
			),
		center: (overrides?: TokenamiProperties) =>
			css(
				{
					'--flex-grow': 1,
					'--min-width': 0,
				},
				overrides,
			),
		rail: (overrides?: TokenamiProperties) =>
			css(
				{
					'--display': 'inline-flex',
					'--flex-shrink': 0,
				},
				overrides,
			),
	};
}

// Typography ------------------------------------------------------------------

const typographyMap = {
	'12': css({
		'--font-size': 'var(--font-size_12)',
		'--line-height': 'var(--leading_12)',
		'--letter-spacing': 'var(--tracking_12)',
	}),
	'14': css({
		'--font-size': 'var(--font-size_14)',
		'--line-height': 'var(--leading_14)',
		'--letter-spacing': 'var(--tracking_14)',
	}),
	'16': {
		'--font-size': 'var(--font-size_16)',
		'--line-height': 'var(--leading_16)',
		'--letter-spacing': 'var(--tracking_16)',
	},
	'18': {
		'--font-size': 'var(--font-size_18)',
		'--line-height': 'var(--leading_18)',
		'--letter-spacing': 'var(--tracking_18)',
	},
	'20': {
		'--font-size': 'var(--font-size_20)',
		'--line-height': 'var(--leading_20)',
		'--letter-spacing': 'var(--tracking_20)',
	},
	'24': {
		'--font-size': 'var(--font-size_24)',
		'--line-height': 'var(--leading_24)',
		'--letter-spacing': 'var(--tracking_24)',
	},
	'28': {
		'--font-size': 'var(--font-size_28)',
		'--line-height': 'var(--leading_28)',
		'--letter-spacing': 'var(--tracking_28)',
	},
	'35': {
		'--font-size': 'var(--font-size_35)',
		'--line-height': 'var(--leading_35)',
		'--letter-spacing': 'var(--tracking_35)',
	},
	'60': {
		'--font-size': 'var(--font-size_60)',
		'--line-height': 'var(--leading_60)',
		'--letter-spacing': 'var(--tracking_60)',
	},
} as const satisfies Record<
	'12' | '14' | '16' | '18' | '20' | '24' | '28' | '35' | '60',
	Parameters<typeof css>[0]
>;

type TypographyArgs = {
	size?: keyof typeof typographyMap;
};

export function typography(
	{ size = '16' }: TypographyArgs = {},
	overrides?: TokenamiProperties,
) {
	return css(typographyMap[size], overrides);
}

// Stack -----------------------------------------------------------------------

export function stack(overrides?: TokenamiProperties) {
	return css(
		{
			'--display': 'flex',
			'--flex-direction': 'column',
		},
		overrides,
	);
}
