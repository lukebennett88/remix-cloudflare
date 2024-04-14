import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

import { Link } from './link';

export function InternalNav() {
	return (
		<Nav
			aria-label="Main Navigation"
			justifyContent="start"
			links={[
				{
					href: '/',
					label: 'Home',
				},
				{
					href: '/posts',
					label: 'Posts',
				},
				{
					href: '/about',
					label: 'About',
				},
				{
					href: '/feed',
					label: 'RSS Feed',
				},
			]}
		/>
	);
}

export function ExternalNav() {
	return (
		<Nav
			aria-label="External Links"
			justifyContent="end"
			links={[
				{
					href: 'https://mastodon.social/@luke_bennett_',
					label: 'Mastodon',
				},
				{
					href: 'https://bsky.app/profile/lukebennett.com.au',
					label: 'Bluesky',
				},
				{
					href: 'https://twitter.com/luke_bennett_',
					label: 'Twitter',
				},
				{
					href: 'https://github.com/lukebennett88',
					label: 'GitHub',
				},
			]}
		/>
	);
}

interface NavProps extends React.HTMLAttributes<HTMLElement> {
	justifyContent?: 'start' | 'end';
	links: Array<{
		href: string;
		label: string;
	}>;
}

function Nav({ justifyContent = 'start', links, ...consumerProps }: NavProps) {
	return (
		<nav
			{...consumerProps}
			role="navigation"
			style={css({
				'--background-color': 'var(--background-color_neutral)',
				'--bp10_padding-block': 20,
				'--bp10_padding-inline': 20,
				'--bp20_padding-block': 24,
				'--bp20_padding-inline': 24,
				'--color': 'var(--text-color_neutral)',
				'--flex-shrink': 0,
				'--padding-block': 16,
				'--padding-inline': 16,
				'--pointer-events': 'none',
			})}
		>
			<div
				style={css({
					...recipe.container({ size: '40' }),
					'--display': 'flex',
					'--justify-content': 'start',
					'--bp10_justify-content': justifyContent,
					'--flex-wrap': 'wrap',
				})}
			>
				<ul
					style={css({
						'--display': 'flex',
						'--flex-wrap': 'wrap',
						'--gap': 24,
						'--margin-block-start': 'var(--size_auto)',
						'--pointer-events': 'auto',
					})}
				>
					{links.map(({ href, label }) => {
						const isExternal = href.startsWith('http');
						return (
							<li key={href}>
								<Link
									href={href}
									rel={isExternal ? 'me' : undefined}
									size="16"
									style={({ isActive }) =>
										css({
											...recipe.link({
												tone: isActive ? 'neutral' : 'muted',
											}),
											'--gap': 4,
										})
									}
								>
									{label}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
