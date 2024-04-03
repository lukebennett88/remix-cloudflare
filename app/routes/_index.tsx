import { css } from '@tokenami/css';

import { Me } from '#app/components/me';
import * as recipe from '#app/recipes';

export default function Index() {
	return (
		<div
			style={css({
				...recipe.stack(),
				...recipe.container({ size: '20' }),
				'--gap': 60,
				'--inline-size': 'var(--size_full)',
				'--margin': 'var(--size_auto)',
				'--text-align': 'center',
			})}
		>
			<h1
				style={css({
					...recipe.typography({ size: '35' }),
					'--font-weight': 'var(--weight_700)',
				})}
			>
				Luke Bennett
			</h1>
			<Me />
			<p
				style={css({
					...recipe.typography({
						size: '20',
					}),
					'--color': 'var(--text-color_neutral-muted)',
				})}
			>
				Design Engineer at{' '}
				<a
					href="https://thinkmill.com.au"
					style={css({
						...recipe.link({
							tone: 'accent',
						}),
					})}
				>
					Thinkmill
				</a>
			</p>
		</div>
	);
}
