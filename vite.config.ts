import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [remixCloudflareDevProxy(), remix()],
	server: {
		host: '127.0.0.1',
	},
	ssr: {
		noExternal: [/^@keystatic\//, 'minimatch'],
		target: 'webworker',
	},
});
