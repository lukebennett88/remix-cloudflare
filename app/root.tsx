import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useLocation,
} from '@remix-run/react';
import { css } from '@tokenami/css';
import * as React from 'react';

import { ExternalNav, InternalNav } from '#app/components/nav';
import * as recipe from '#app/recipes';

import '#app/reset.css';
import '#app/tokenami.css';

import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare';

import { ClientHintCheck, getHints } from './client-hints';
import { useNonce } from './nonce-context';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	return json({
		hints: getHints(request),
	});
};

export const meta: MetaFunction<typeof loader> = () => {
	return [
		{ title: 'Luke Bennett' },
		{ name: 'description', content: 'Design Engineer at Thinkmill' },
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	const { hints } = useLoaderData<typeof loader>();

	const location = useLocation();
	const isKeystaticRoute = location.pathname.startsWith('/keystatic');

	function NormalRoute() {
		return (
			<React.Fragment>
				<InternalNav />
				<main
					style={css({
						...recipe.stack(),
						'--background-color': 'var(--background-color_neutral)',
						'--bp10_padding-inline': 20,
						'--bp20_padding-inline': 24,
						'--color': 'var(--text-color_neutral)',
						'--flex': '1',
						'--padding-block': 128,
						'--padding-inline': 16,
						'--position': 'relative',
						'--selection_background-color': 'var(--background-color_accent)',
						'--selection_color': 'var(--text-color_accent-inverse)',
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
			</React.Fragment>
		);
	}

	return (
		<html
			data-theme={hints.theme}
			lang="en"
			style={css({
				'--height': 'var(--size_full)',
			})}
		>
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<link href="/favicon.svg" rel="icon" type="image/svg+xml" />
				{/* <link
					href="/favicon-dark.svg"
					media="(prefers-color-scheme: dark)"
					rel="icon"
					type="image/svg+xml"
				/> */}
				<link href="/apple-touch-icon.png" rel="apple-touch-icon" />
				<link href="/manifest.webmanifest" rel="manifest" />
				<ClientHintCheck nonce={useNonce()} />
				<Meta />
				<Links />
			</head>
			<body
				{...(!isKeystaticRoute && {
					style: css({
						'--background-color': 'var(--background-color_accent)',
						'--display': 'flex',
						'--flex-direction': 'column',
						'--font-family': 'var(--font-family_sans)',
						'--min-height': 'var(--size_full)',
						'--padding': 16,
						'--bp10_padding': 20,
						'--bp20_padding': 24,
						'--selection_background-color': 'var(--background-color_accent)',
						'--selection_color': 'var(--text-color_accent-inverse)',
					}),
				})}
			>
				{isKeystaticRoute ? children : <NormalRoute />}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
