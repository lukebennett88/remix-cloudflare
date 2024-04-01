import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

import '#app/reset.css';
import '#app/tokenami.css';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			style={css({
				'--height': 'var(--size_full)',
			})}
		>
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<Meta />
				<Links />
			</head>
			<body
				style={css({
					'--background-color': 'var(--background-color_accent)',
					'--display': 'flex',
					'--flex-direction': 'column',
					'--font-family': 'var(--font-family_sans)',
					'--min-height': 'var(--size_full)',
					'--padding': 16,
					'--bp10_padding': 20,
					'--bp20_padding': 24,
				})}
			>
				<main
					style={css({
						...recipe.stack(),
						'--flex': '1',
						'--position': 'relative',
						'--padding-block': 128,
						'--padding-inline': 16,
						'--bp10_padding-inline': 20,
						'--bp20_padding-inline': 24,
						'--background-color': 'var(--background-color_neutral)',
						'--color': 'var(--text-color_neutral)',
					})}
				>
					<div
						style={css({
							...recipe.container({ size: '40' }),
							...recipe.stack(),
							'--flex': '1',
						})}
					>
						{children}
					</div>
				</main>
				<Nav />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function Nav() {
	return (
		<nav
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
					'--justify-content': 'space-between',
					'--flex-wrap': 'wrap',
				})}
			>
				<ul
					style={css({
						'--pointer-events': 'auto',
						'--display': 'flex',
						'--gap': 8,
						'--margin-block-start': 'var(--size_auto)',
						'--padding': 6,
					})}
				>
					{[
						{ href: '/', label: 'Home' },
						{ href: '/posts', label: 'Posts' },
						{ href: '/about', label: 'About' },
						{ href: '/feed', label: 'RSS Feed' },
					].map(({ href, label }) => (
						<li key={href}>
							<a href={href} style={recipe.link({ tone: 'neutral' })}>
								{label}
							</a>
						</li>
					))}
				</ul>
				<ul
					style={css({
						'--pointer-events': 'auto',
						'--display': 'flex',
						'--gap': 8,
						'--margin-block-start': 'var(--size_auto)',
						'--padding': 6,
					})}
				>
					{[
						{
							href: 'https://mastodon.social/@luke_bennett_',
							label: 'Mastodon',
						},
						{ href: 'https://twitter.com/luke_bennett_', label: 'Twitter' },
						{ href: 'https://github.com/lukebennett88', label: 'GitHub' },
					].map(({ href, label }) => (
						<li key={href}>
							<a
								href={href}
								style={css({
									...recipe.link({ tone: 'neutral' }),
									'--align-items': 'center',
									'--display': 'inline-flex',
									'--gap': 4,
								})}
							>
								{label}
								<svg
									fill="none"
									height="15"
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
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default function App() {
	return <Outlet />;
}
