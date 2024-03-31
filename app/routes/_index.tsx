import type { MetaFunction } from '@remix-run/cloudflare';
import { css } from '@tokenami/css';

import { Me } from '../components/me';
import * as recipe from '../recipes';

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
			style={recipe.stack({
				'--background-color': 'var(--background-color_neutral)',
				'--color': 'var(--text-color_neutral)',
				'--flex': '1',
				'--padding': 16,
				'--bp10_padding': 20,
				'--bp20_padding': 24,
			})}
		>
			<div
				style={recipe.stack({
					'--margin': 'var(--size_auto)',
				})}
			>
				<h1
					style={recipe.typography(
						{ size: '60' },
						{ '--font-family': 'var(--font-family_rounded)' },
					)}
				>
					Luke Bennett
				</h1>
				<p style={recipe.typography({ size: '35' })}>
					Design Engineer at{' '}
					<a
						href="https://thinkmill.com.au"
						style={css({
							'--text-decoration': 'underline',
							'--color': 'var(--text-color_accent)',
						})}
					>
						Thinkmill
					</a>
				</p>
				<Me />
			</div>
		</main>
	);
}
