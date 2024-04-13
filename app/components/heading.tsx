import { css, TokenamiStyle } from '@tokenami/css';

import * as recipe from '#app/recipes';

type HeadingElementProps = TokenamiStyle<
	React.HTMLAttributes<HTMLHeadingElement>
>;

interface HeadingProps extends HeadingElementProps {
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
	children,
	level,
	style,
	...consumerProps
}: HeadingProps) {
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
			{...consumerProps}
			style={css(
				{
					...recipe.typography({
						size: sizeMap[level],
					}),
					'--color': 'var(--text-color_neutral)',
					'--font-weight': 'var(--weight_700)',
					'--margin-block-end':
						level === 1 ? 'var(---,calc(1em/3))' : undefined,
				},
				style,
			)}
		>
			{children}
		</Tag>
	);
}
