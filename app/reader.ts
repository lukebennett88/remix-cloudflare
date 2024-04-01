import { createGitHubReader } from '@keystatic/core/reader/github';

import config from '../keystatic.config';

export const reader = createGitHubReader(config, {
	repo: 'lukebennett88/remix-cloudflare',
	token: process.env.GITHUB_TOKEN,
});
