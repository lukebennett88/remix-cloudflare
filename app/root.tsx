import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { css } from '@tokenami/css';

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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				style={css({
					'--background-color': 'var(--background-color_accent)',
					'--display': 'flex',
					'--flex-direction': 'column',
					'--font-family': 'var(--font-family_sans)',
					'--height': 'var(--size_full)',
					'--padding': 16,
					'--bp10_padding': 20,
					'--bp20_padding': 24,
				})}
			>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
