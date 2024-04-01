import { createStyleObject } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/helveticaNeue';
import { css } from '@tokenami/css';
import { typedKeys } from 'emery';

export type TokenamiProperties = Parameters<typeof css>[0];

// Visually Hidden -------------------------------------------------------------

export function visuallyHidden() {
	return css({
		'--position': 'absolute',
		'--width': 1,
		'--height': 1,
		'--padding': 0,
		'--margin': -1,
		'--overflow': 'hidden',
		'--clip-path': 'rect(0 0 0 0)',
		'--white-space': 'nowrap',
		'--border-width': '0',
	});
}

// Track -----------------------------------------------------------------------

const verticalAlignMap = {
	start: 'flex-start',
	center: 'center',
	end: 'flex-end',
} as const;

export type TrackArgs = {
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

export type StyleObject = ReturnType<typeof createStyleObject>;

function createLogicalCapsizeStyleObject({
	fontSize,
	lineHeight,
	'::after': { marginTop },
	'::before': { marginBottom },
}: StyleObject) {
	return {
		'--font-size': `var(---,${fontSize})`,
		'--line-height': `var(---,${lineHeight})`,
		'--after_content': "''",
		'--after_display': 'table',
		'--after_margin-block-start': `var(---,${marginTop})`,
		'--before_content': "''",
		'--before_display': 'table',
		'--before_margin-block-start': `var(---,${marginBottom})`,
	} as const satisfies TokenamiProperties;
}

function createTypographyVariant(
	fontSize: number,
	leading: number,
	letterSpacing: string,
) {
	return {
		...createLogicalCapsizeStyleObject(
			createStyleObject({ fontSize, leading, fontMetrics }),
		),
		'--letter-spacing': `var(---,${letterSpacing})`,
	} satisfies TokenamiProperties;
}

const typographyKeys = [
	'12',
	'14',
	'16',
	'18',
	'20',
	'24',
	'28',
	'35',
	'60',
] as const;

export type TypographyKey = (typeof typographyKeys)[number];

const typographyMap = {
	'12': createTypographyVariant(12, 16, '0.0025em'),
	'14': createTypographyVariant(14, 20, '0em'),
	'16': createTypographyVariant(16, 24, '0em'),
	'18': createTypographyVariant(18, 26, '-0.0025em'),
	'20': createTypographyVariant(20, 28, '-0.005em'),
	'24': createTypographyVariant(24, 30, '-0.00625em'),
	'28': createTypographyVariant(28, 36, '-0.0075em'),
	'35': createTypographyVariant(35, 40, '-0.01em'),
	'60': createTypographyVariant(60, 72, '-0.015em'),
} as const satisfies Record<TypographyKey, TokenamiProperties>;

const breakpoints = ['bp10', 'bp20', 'bp30', 'bp40', 'bp50', 'bp60'];

export type Breakpoint = (typeof breakpoints)[number];

function prefixStylesForBreakpoint(
	styles: TokenamiProperties,
	prefix?: Breakpoint,
) {
	const prefixedStyles: any = {};
	for (const key of typedKeys(styles)) {
		// Correctly format the prefixed key by removing the initial '--' when adding the prefix
		const formattedKey = key.startsWith('--') ? key.slice(2) : key;
		const prefixedKey =
			prefix ? `--${prefix}_${formattedKey}` : `--${formattedKey}`;
		prefixedStyles[prefixedKey] = styles[key];
	}
	return prefixedStyles as TokenamiProperties;
}

export type TypographyArgs = {
	size?:
		| keyof typeof typographyMap
		| Partial<Record<'base' | Breakpoint, keyof typeof typographyMap>>;
};

export function typography({ size = '16' }: TypographyArgs = {}) {
	let styles = {};
	if (typeof size === 'string') {
		styles = { ...typographyMap[size] };
	} else {
		// Ensure base styles are set first if specified.
		if (size.base) {
			const baseKey = size.base as keyof typeof typographyMap;
			styles = { ...styles, ...typographyMap[baseKey] };
		}

		// Apply breakpoint-specific styles without overwriting base styles.
		breakpoints.forEach((bp) => {
			if (bp !== 'base' && size[bp]) {
				const key = size[bp] as keyof typeof typographyMap;
				const bpStyles = prefixStylesForBreakpoint(typographyMap[key], bp);
				styles = { ...styles, ...bpStyles };
			}
		});
	}

	return css(styles);
}

// Whitelisting responsive CSS custom properties by adding them below so the compiler can find them.:
// '--bp10_font-size': '',
// '--bp10_line-height': '',
// '--bp10_after_content': '',
// '--bp10_after_display': '',
// '--bp10_after_margin-block-start': '',
// '--bp10_before_content': '',
// '--bp10_before_display': '',
// '--bp10_before_margin-block-start': '',
// '--bp10_letter-spacing': '',

// '--bp20_font-size': '',
// '--bp20_line-height': '',
// '--bp20_after_content': '',
// '--bp20_after_display': '',
// '--bp20_after_margin-block-start': '',
// '--bp20_before_content': '',
// '--bp20_before_display': '',
// '--bp20_before_margin-block-start': '',
// '--bp20_letter-spacing': '',

// '--bp30_font-size': '',
// '--bp30_line-height': '',
// '--bp30_after_content': '',
// '--bp30_after_display': '',
// '--bp30_after_margin-block-start': '',
// '--bp30_before_content': '',
// '--bp30_before_display': '',
// '--bp30_before_margin-block-start': '',
// '--bp30_letter-spacing': '',

// '--bp40_font-size': '',
// '--bp40_line-height': '',
// '--bp40_after_content': '',
// '--bp40_after_display': '',
// '--bp40_after_margin-block-start': '',
// '--bp40_before_content': '',
// '--bp40_before_display': '',
// '--bp40_before_margin-block-start': '',
// '--bp40_letter-spacing': '',

// '--bp50_font-size': '',
// '--bp50_line-height': '',
// '--bp50_after_content': '',
// '--bp50_after_display': '',
// '--bp50_after_margin-block-start': '',
// '--bp50_before_content': '',
// '--bp50_before_display': '',
// '--bp50_before_margin-block-start': '',
// '--bp50_letter-spacing': '',

// '--bp60_font-size': '',
// '--bp60_line-height': '',
// '--bp60_after_content': '',
// '--bp60_after_display': '',
// '--bp60_after_margin-block-start': '',
// '--bp60_before_content': '',
// '--bp60_before_display': '',
// '--bp60_before_margin-block-start': '',
// '--bp60_letter-spacing': '',

// Stack -----------------------------------------------------------------------

export function stack() {
	return css({
		'--display': 'flex',
		'--flex-direction': 'column',
	});
}

// Focus ring ------------------------------------------------------------------

export function focusRing() {
	return css({
		'--focus-visible_outline-color': 'var(--border-color_accent)',
		'--focus-visible_outline-offset': 2,
		'--focus-visible_outline-style': 'dashed',
		'--focus-visible_outline-width': 2,
	});
}

// Link ------------------------------------------------------------------------

const linkToneMap = {
	neutral: {
		'--color': 'var(--text-color_neutral)',
	},
	muted: {
		'--color': 'var(--text-color_neutral-muted)',
	},
	accent: {
		'--color': 'var(--text-color_accent)',
	},
} satisfies Record<string, TokenamiProperties>;

export type LinkArgs = {
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

export type ContainerArgs = {
	size: keyof typeof containerMap;
};

export function container({ size }: ContainerArgs) {
	return css({
		...containerMap[size],
		'--margin-inline': 'var(--size_auto)',
		'--inline-size': 'var(--size_full)',
	});
}
