import { parseWithZod } from '@conform-to/zod';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useFetcher,
	useFetchers,
	useLoaderData,
	useLocation,
} from '@remix-run/react';
import { css } from '@tokenami/css';
import { assert } from 'emery/assertions';
import * as React from 'react';
import { z } from 'zod';

import { ExternalNav, InternalNav } from '#app/components/nav';
import * as recipe from '#app/recipes';

import '#app/reset.css';
import '#app/tokenami.css';

import { getFormProps, useForm } from '@conform-to/react';
import {
	ActionFunctionArgs,
	json,
	LoaderFunctionArgs,
	MetaFunction,
} from '@remix-run/cloudflare';

import { ClientHintCheck, getHints, useHints } from './client-hints';
import { LaptopIcon } from './components/icons/laptop';
import { MoonIcon } from './components/icons/moon';
import { SunIcon } from './components/icons/sun';
import { useNonce } from './context/nonce-context';
import { getTheme, setTheme, type Theme } from './theme.server';
import { useRequestInfo } from './utils/request-info';

export const loader = async ({ request }: LoaderFunctionArgs) => {
	return json({
		requestInfo: {
			hints: getHints(request),
			userPrefs: {
				theme: getTheme(request),
			},
		},
	});
};

export const meta: MetaFunction<typeof loader> = () => {
	return [
		{ title: 'Luke Bennett' },
		{ name: 'description', content: 'Design Engineer at Thinkmill' },
	];
};

export function Layout({ children }: { children: React.ReactNode }) {
	const data = useLoaderData<typeof loader>();

	const location = useLocation();
	const isKeystaticRoute = location.pathname.startsWith('/keystatic');
	const RouteWrapper = isKeystaticRoute ? React.Fragment : NormalRoute;

	const theme = useTheme();

	return (
		<html
			data-theme={theme}
			lang="en"
			style={css({
				'--color-scheme': theme,
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
				<RouteWrapper userPrefs={data.requestInfo.userPrefs}>
					{children}
				</RouteWrapper>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

function NormalRoute({
	children,
	userPrefs,
}: {
	children: React.ReactNode;
	userPrefs: ReturnType<typeof useRequestInfo>['userPrefs'];
}) {
	const { center, rail, root } = recipe.track();
	return (
		<React.Fragment>
			<header
				style={css({
					...root,
					'--background-color': 'var(--background-color_neutral)',
					'--inline-size': 'var(--size_full)',
				})}
			>
				<div style={css(center)}>
					<InternalNav />
				</div>
				<div style={css(rail)}>
					<ThemeSwitch userPreference={userPrefs.theme} />
				</div>
			</header>
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

/**
 * @returns the user's theme preference, or the client hint theme if the user
 * has not set a preference.
 */
export function useTheme() {
	const hints = useHints();
	const requestInfo = useRequestInfo();
	const optimisticMode = useOptimisticThemeMode();
	if (optimisticMode) {
		return optimisticMode === 'system' ? hints.theme : optimisticMode;
	}
	return requestInfo.userPrefs.theme ?? hints.theme;
}

const ThemeFormSchema = z.object({
	theme: z.enum(['system', 'light', 'dark']),
});

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const submission = parseWithZod(formData, {
		schema: ThemeFormSchema,
	});

	assert(submission?.status === 'success', 'Invalid theme received');

	const { theme } = submission.value;

	const responseInit = {
		headers: { 'set-cookie': setTheme(theme) },
	};
	return json({ result: submission.reply() }, responseInit);
}

/**
 * If the user's changing their theme mode preference, this will return the
 * value it's being changed to.
 */
export function useOptimisticThemeMode() {
	const fetchers = useFetchers();
	const themeFetcher = fetchers.find((f) => f.formAction === '/');

	if (themeFetcher && themeFetcher.formData) {
		const submission = parseWithZod(themeFetcher.formData, {
			schema: ThemeFormSchema,
		});

		if (submission.status === 'success') {
			return submission.value.theme;
		}
	}
}

function ThemeSwitch({ userPreference }: { userPreference?: Theme | null }) {
	const fetcher = useFetcher<typeof action>();

	const [form] = useForm({
		id: 'theme-switch',
		lastResult: fetcher.data?.result,
	});

	const optimisticMode = useOptimisticThemeMode();
	const mode = optimisticMode ?? userPreference ?? 'system';
	const nextMode =
		mode === 'system' ? 'light'
		: mode === 'light' ? 'dark'
		: 'system';

	const modeIcon = {
		light: { icon: SunIcon, label: 'Light theme' },
		dark: { icon: MoonIcon, label: 'Dark theme' },
		system: { icon: LaptopIcon, label: 'System theme' },
	};

	const currentTheme = modeIcon[mode];

	const Icon = currentTheme.icon;

	return (
		<fetcher.Form method="POST" {...getFormProps(form)}>
			<input name="theme" type="hidden" value={nextMode} />
			<div
				style={css({
					'--bp10_padding-inline': 20,
					'--bp20_padding-inline': 24,
					'--display': 'flex',
					'--gap': 8,
					'--padding-inline': 16,
				})}
			>
				<button
					style={css({
						...recipe.focusRing(),
						'--align-items': 'center',
						'--block-size': 32,
						'--color': 'var(--text-color_neutral)',
						'--display': 'flex',
						'--inline-size': 32,
						'--justify-content': 'center',
						'--padding': 8,
					})}
					type="submit"
				>
					<Icon aria-label={currentTheme.label} />
				</button>
			</div>
		</fetcher.Form>
	);
}

export default function App() {
	return <Outlet />;
}
