import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps,
} from '@keystatic/core/renderer';
import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

export function DocumentRenderer(props: DocumentRendererProps) {
	return (
		<KeystaticDocumentRenderer
			{...props}
			renderers={{
				block: {
					heading(props) {
						const Tag = `h${props.level}` as const;
						const sizeMap = {
							'1': '35',
							'2': '28',
							'3': '24',
							'4': '20',
							'5': '16',
							'6': '16',
						} as const satisfies Record<typeof props.level, recipe.Breakpoint>;
						return (
							<Tag
								style={css({
									...recipe.typography({
										size: sizeMap[props.level],
									}),
									'--font-weight':
										props.level === 1 ? 'var(--weight_700)' : undefined,
								})}
							>
								{props.children}
							</Tag>
						);
					},
				},
			}}
		/>
	);
}
