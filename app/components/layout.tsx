import { css } from '@tokenami/css';

import { typography } from '../recipes';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={css({
				...typography({ capsize: false, size: '20' }),
				'--color': 'var(--text-color_neutral-muted)',
				'--inline-size': 'var(--size_full)',
				'--margin': 'var(--size_auto)',
				'--max-inline-size': 'var(---,60ch)',
			})}
		>
			{children}
		</div>
	);
}
