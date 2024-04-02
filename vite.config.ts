import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	plugins: [remixCloudflareDevProxy(), remix()],
	server: {
		host: '127.0.0.1',
	},
	ssr: {
		noExternal: [/^@keystatic\//, 'minimatch'],
		...(mode === 'production' ?
			{
				target: 'webworker',
				resolve: {
					conditions: ['worker'],
				},
			}
		:	{}),
	},
}));
