import { type LoaderFunction } from '@remix-run/cloudflare';
import { cacheHeader } from 'pretty-cache-header';

import { getFeed } from '../lib/get-feed';

export const loader: LoaderFunction = async () => {
	const feed = await getFeed();

	return new Response(feed.atom1(), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': cacheHeader({
				maxAge: '15 minutes',
				public: true,
				sMaxage: '2 hours',
				staleWhileRevalidate: '10 minutes',
			}),
		},
	});
};
