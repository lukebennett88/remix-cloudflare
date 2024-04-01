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

import { ExternalNav, InternalNav } from './components/nav';

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
				<InternalNav />
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
				<ExternalNav />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
