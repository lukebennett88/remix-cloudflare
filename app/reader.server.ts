import { createGitHubReader } from '@keystatic/core/reader/github';

import config from '../keystatic.config';

const originalFetch = globalThis.fetch;

globalThis.fetch = async (url, init) => {
	// Cloudflare Workers don't support the cache option
	if (init?.cache) delete init.cache;

	const headers = new Headers(init?.headers);

	// Not sure if this is needed when deployed, it was when running: `wrangler pages dev`
	if (typeof url === 'string' && url.includes('github')) {
		headers.set('User-Agent', 'keystatic');
	}

	return originalFetch(url, { ...init, headers });
};

export const reader = createGitHubReader(config, {
	repo: 'lukebennett88/remix-cloudflare',
	token: process.env.GITHUB_TOKEN,
});
