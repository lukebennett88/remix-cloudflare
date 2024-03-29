import { css } from '@tokenami/css';

import { capsize } from './theme/typography';

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
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['12']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['12']['::before'].marginBottom})`,
	}),
	'14': css({
		'--font-size': 'var(--font-size_14)',
		'--line-height': 'var(--leading_14)',
		'--letter-spacing': 'var(--tracking_14)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['14']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['14']['::before'].marginBottom})`,
	}),
	'16': {
		'--font-size': 'var(--font-size_16)',
		'--line-height': 'var(--leading_16)',
		'--letter-spacing': 'var(--tracking_16)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['16']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['16']['::before'].marginBottom})`,
	},
	'18': {
		'--font-size': 'var(--font-size_18)',
		'--line-height': 'var(--leading_18)',
		'--letter-spacing': 'var(--tracking_18)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['18']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['18']['::before'].marginBottom})`,
	},
	'20': {
		'--font-size': 'var(--font-size_20)',
		'--line-height': 'var(--leading_20)',
		'--letter-spacing': 'var(--tracking_20)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['20']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['20']['::before'].marginBottom})`,
	},
	'24': {
		'--font-size': 'var(--font-size_24)',
		'--line-height': 'var(--leading_24)',
		'--letter-spacing': 'var(--tracking_24)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['24']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['24']['::before'].marginBottom})`,
	},
	'28': {
		'--font-size': 'var(--font-size_28)',
		'--line-height': 'var(--leading_28)',
		'--letter-spacing': 'var(--tracking_28)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['28']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['28']['::before'].marginBottom})`,
	},
	'35': {
		'--font-size': 'var(--font-size_35)',
		'--line-height': 'var(--leading_35)',
		'--letter-spacing': 'var(--tracking_35)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['35']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['35']['::before'].marginBottom})`,
	},
	'60': {
		'--font-size': 'var(--font-size_60)',
		'--line-height': 'var(--leading_60)',
		'--letter-spacing': 'var(--tracking_60)',
		'--after_content': '""',
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${capsize['60']['::after'].marginTop})`,
		'--before_content': '""',
		'--before_display': 'table',
		'--before_margin-block-end': `var(---,${capsize['60']['::before'].marginBottom})`,
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
