import type { MetaFunction } from '@remix-run/cloudflare';
import { css } from '#styled-system/css';

import { typography } from '../packs';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Luke Bennett' },
		{
			name: 'description',
			content: 'Design Engineer at Thinkmill',
		},
	];
};

export default function Index() {
	return (
		<main
			className={css({
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'background.neutral.selected',
				color: 'text.neutral',
				flex: 1,
				padding: 16,
				bp10: {
					padding: 20,
				},
				bp20: {
					padding: 24,
				},
				_selection: {
					backgroundColor: 'background.accent',
					color: 'text.neutral.inverse',
				},
			})}
		>
			<div
				className={css({
					display: 'flex',
					flexDirection: 'column',
					gap: 16,
					margin: 'auto',
				})}
			>
				<h1
					className={css({
						fontSize: '60px',
						lineHeight: '72px',
						_after: {
							marginBlockStart: '-0.2415em',
							content: "''",
							display: 'table',
						},
						_before: {
							marginBlockEnd: '-0.2585em',
							content: "''",
							display: 'table',
						},
						letterSpacing: '-0.015em',
						fontWeight: '500',
						color: 'text.neutral',
					})}
				>
					Hello, I'm Luke Bennett
				</h1>
				<p
					className={css({
						...typography['24'],
						color: 'text.neutral.muted',
					})}
				>
					I'm a Design Engineer at Thinkmill
				</p>
			</div>
		</main>
	);
}
