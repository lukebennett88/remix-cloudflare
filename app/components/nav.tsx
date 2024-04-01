import { NavLink } from '@remix-run/react';
import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

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
	const { root, center, rail } = recipe.track();
	return (
		<nav
			{...consumerProps}
			role="navigation"
			style={css({
				'--background-color': 'var(--background-color_neutral)',
				'--bp10_padding-block': 20,
				'--bp10_padding-inline': 20 + 16,
				'--bp20_padding-block': 24,
				'--bp20_padding-inline': 24 + 16,
				'--color': 'var(--text-color_neutral)',
				'--flex-shrink': 0,
				'--padding-block': 16,
				'--padding-inline': 16 + 16,
				'--pointer-events': 'none',
			})}
		>
			<div
				style={css({
					...recipe.container({ size: '40' }),
					'--display': 'flex',
					'--justify-content': justifyContent,
					'--flex-wrap': 'wrap',
				})}
			>
				<ul
					style={css({
						'--display': 'flex',
						'--gap': 8,
						'--margin-block-start': 'var(--size_auto)',
						'--pointer-events': 'auto',
					})}
				>
					{links.map(({ href, label }) => {
						const isExternal = href.startsWith('http');
						return (
							<li key={href}>
								<NavLink
									rel={isExternal ? 'me' : undefined}
									style={({ isActive }) =>
										css({
											...recipe.link({ tone: isActive ? 'neutral' : 'muted' }),
											...recipe.typography({ size: '16' }),
											...root,
											'--gap': 4,
										})
									}
									to={href}
								>
									<span
										style={css({
											...center,
										})}
									>
										{label}
									</span>
									{isExternal && (
										<svg
											aria-hidden
											fill="none"
											focusable="false"
											height="15"
											role="img"
											style={css({ ...rail })}
											viewBox="0 0 15 15"
											width="15"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												clipRule="evenodd"
												d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
												fill="currentColor"
												fillRule="evenodd"
											></path>
										</svg>
									)}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
}
