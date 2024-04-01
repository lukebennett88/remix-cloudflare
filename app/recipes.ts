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
		root: css({
			'--display': 'flex',
			'--align-items': verticalAlignMap[verticalAlign],
		}),
		center: css({
			'--flex-grow': 1,
			'--min-width': 0,
		}),
		rail: css({
			'--display': 'inline-flex',
			'--flex-shrink': 0,
		}),
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

export function typography({ size = '16' }: TypographyArgs = {}) {
	return css(typographyMap[size]);
}

// Stack -----------------------------------------------------------------------

export function stack() {
	return css({
		'--display': 'flex',
		'--flex-direction': 'column',
	});
}

// Focus ring ------------------------------------------------------------------

export function focusRing(overrides?: TokenamiProperties) {
	return css(
		{
			'--focus-visible_outline-color': 'var(--border-color_accent)',
			'--focus-visible_outline-offset': 2,
			'--focus-visible_outline-style': 'dashed',
			'--focus-visible_outline-width': 2,
		},
		overrides,
	);
}

// Link ------------------------------------------------------------------------

const linkToneMap = {
	neutral: {
		'--color': 'var(--text-color_neutral)',
	},
	accent: {
		'--color': 'var(--text-color_accent)',
	},
} satisfies Record<string, TokenamiProperties>;

type LinkArgs = {
	tone?: keyof typeof linkToneMap;
};

export function link({ tone = 'neutral' }: LinkArgs = {}) {
	return css({
		...focusRing(),
		...linkToneMap[tone],
		'--text-decoration': 'underline',
	});
}

// Container -------------------------------------------------------------------

const containerMap = {
	'10': {
		'--max-inline-size': 'var(--size_10)',
	},
	'20': {
		'--max-inline-size': 'var(--size_20)',
	},
	'30': {
		'--max-inline-size': 'var(--size_30)',
	},
	'40': {
		'--max-inline-size': 'var(--size_40)',
	},
} satisfies Record<string, TokenamiProperties>;

type ContainerArgs = {
	size: keyof typeof containerMap;
};

export function container({ size }: ContainerArgs) {
	return css({
		...containerMap[size],
		'--margin-inline': 'var(--size_auto)',
		'--inline-size': 'var(--size_full)',
	});
}
