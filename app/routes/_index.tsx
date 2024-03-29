import type { MetaFunction } from '@remix-run/cloudflare';

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
				'--selection_background-color': 'var(--background-color_accent)',
				'--selection_color': 'var(--text-color_neutral-inverse)',
			})}
		>
			<div
				style={recipe.stack({
					'--gap': 16,
					'--max-inline-size': 'var(--size_20)',
					'--margin': 'var(--size_auto)',
				})}
			>
				<p
					style={recipe.typography(
						{
							size: '60',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (60px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '35',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (35px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '28',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (28px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '24',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (24px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '18',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (18px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '16',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (16px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '14',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (14px)
				</p>
				<p
					style={recipe.typography(
						{
							size: '12',
						},
						{
							'--background-color': 'var(--background-color_accent-inverse)',
							'--hover_background-color': 'var(--background-color_accent)',
							'--hover_color': 'var(--text-color_neutral-inverse)',
							'--transition-property': 'background-color, color',
							'--transition-duration': '0.2s',
							'--transition-timing-function': 'var(--ease_in-out)',
						},
					)}
				>
					Typography (12px)
				</p>
			</div>
		</main>
	);
}
