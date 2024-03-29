import { createStyleObject } from '@capsizecss/core';
import fontMetrics from '@capsizecss/metrics/quicksand';

export const capsize = {
	'12': createStyleObject({
		fontSize: 12,
		leading: 16,
		fontMetrics,
	}),
	'14': createStyleObject({
		fontSize: 14,
		leading: 20,
		fontMetrics,
	}),
	'16': createStyleObject({
		fontSize: 16,
		leading: 24,
		fontMetrics,
	}),
	'18': createStyleObject({
		fontSize: 18,
		leading: 26,
		fontMetrics,
	}),
	'20': createStyleObject({
		fontSize: 20,
		leading: 28,
		fontMetrics,
	}),
	'24': createStyleObject({
		fontSize: 24,
		leading: 30,
		fontMetrics,
	}),
	'28': createStyleObject({
		fontSize: 28,
		leading: 36,
		fontMetrics,
	}),
	'35': createStyleObject({
		fontSize: 35,
		leading: 40,
		fontMetrics,
	}),
	'60': createStyleObject({
		fontSize: 60,
		leading: 60,
		fontMetrics,
	}),
};

export const typography = {
	'font-size': {
		'12': capsize['12'].fontSize,
		'14': capsize['14'].fontSize,
		'16': capsize['16'].fontSize,
		'18': capsize['18'].fontSize,
		'20': capsize['20'].fontSize,
		'24': capsize['24'].fontSize,
		'28': capsize['28'].fontSize,
		'35': capsize['35'].fontSize,
		'60': capsize['60'].fontSize,
	},
	'leading': {
		'12': capsize['12'].lineHeight,
		'14': capsize['14'].lineHeight,
		'16': capsize['16'].lineHeight,
		'18': capsize['18'].lineHeight,
		'20': capsize['20'].lineHeight,
		'24': capsize['24'].lineHeight,
		'28': capsize['28'].lineHeight,
		'35': capsize['35'].lineHeight,
		'60': capsize['60'].lineHeight,
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
