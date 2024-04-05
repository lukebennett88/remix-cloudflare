import * as cookie from 'cookie';

const ONE_YEAR = 31_536_000;

const THEME_COOKIE_NAME = 'theme';
export type Theme = 'light' | 'dark';

export function getTheme(request: Request): Theme | null {
	const cookieHeader = request.headers.get('cookie');
	const parsed =
		cookieHeader ? cookie.parse(cookieHeader)[THEME_COOKIE_NAME] : 'light';
	if (parsed === 'light' || parsed === 'dark') return parsed;
	return null;
}

export function setTheme(theme: Theme | 'system') {
	if (theme === 'system') {
		return cookie.serialize(THEME_COOKIE_NAME, '', { path: '/', maxAge: -1 });
	} else {
		return cookie.serialize(THEME_COOKIE_NAME, theme, {
			path: '/',
			maxAge: ONE_YEAR,
		});
	}
}
