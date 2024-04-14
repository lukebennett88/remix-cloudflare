import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { cacheHeader } from 'pretty-cache-header';

import { DocumentRenderer } from '#app/components/document-renderer';
import { reader } from '#app/reader.server.js';

import { Layout } from '../components/layout';

export const loader = async () => {
	const page = await reader.singletons.about.read();
	if (!page) {
		throw new Response('Not found', { status: 404 });
	}

	return json(
		{
			document: await page.content(),
		},
		{
			headers: {
				'Cache-Control': cacheHeader({
					maxAge: '24 hours',
					public: true,
					sMaxage: '48 hours',
					staleWhileRevalidate: '1 hour',
				}),
			},
		},
	);
};

export const meta: MetaFunction<typeof loader> = ({ matches }) => {
	const parentMeta = matches
		.flatMap((match) => match.meta ?? [])
		.filter((meta) => !('title' in meta));
	return [...parentMeta, { title: 'About: Luke Bennett' }];
};

export default function Page() {
	const { document } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<DocumentRenderer document={document} />
		</Layout>
	);
}
