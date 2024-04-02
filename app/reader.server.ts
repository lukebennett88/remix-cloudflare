import { createGitHubReader } from '@keystatic/core/reader/github';

import config from '../keystatic.config';

export function getReader() {
	return createGitHubReader(config, {
		repo: 'lukebennett88/remix-cloudflare',
		token: process.env.GITHUB_TOKEN,
	});
}
