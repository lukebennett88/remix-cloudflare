import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

export function Heading({
	children,
	level,
}: {
	children: React.ReactNode;
	level: 1 | 2 | 3 | 4 | 5 | 6;
}) {
	const Tag = `h${level}` as const;
	const sizeMap = {
		'1': '35',
		'2': '28',
		'3': '24',
		'4': '20',
		'5': '16',
		'6': '16',
	} as const satisfies Record<typeof level, recipe.Breakpoint>;
	return (
		<Tag
			style={css({
				...recipe.typography({
					size: sizeMap[level],
				}),
				'--font-weight': level === 1 ? 'var(--weight_700)' : undefined,
				'--margin-block-end': level === 1 ? 'var(---,calc(1em/3))' : undefined,
			})}
		>
			{children}
		</Tag>
	);
}
