import '#app/index.css';

import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import { css } from '#styled-system/css';

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={css({
				height: '100%',
			})}
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body
				className={css({
					backgroundColor: 'background.accent',
					display: 'flex',
					flexDirection: 'column',
					fontFamily: 'sans',
					minHeight: '100%',
					padding: 16,
					bp10: {
						padding: 20,
					},
					bp20: {
						padding: 24,
					},
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
