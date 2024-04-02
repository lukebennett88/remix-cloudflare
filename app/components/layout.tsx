import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={css({
				...recipe.stack(),
				'--gap': 12,
				'--inline-size': 'var(--size_full)',
				'--margin': 'var(--size_auto)',
				'--max-inline-size': 'var(---,60ch)',
			})}
		>
			{children}
		</div>
	);
}
