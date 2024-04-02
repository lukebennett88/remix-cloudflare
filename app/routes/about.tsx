import { MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

import { DocumentRenderer } from '#app/components/document-renderer';
import { reader } from '#app/reader.server.js';

import { Layout } from '../components/layout';

export const loader = async () => {
	const page = await reader.singletons.about.read();
	if (!page) {
		throw new Response('Not found', { status: 404 });
	}

	return {
		document: await page.content(),
	};
};

export const meta: MetaFunction = () => {
	return [
		{ title: 'Luke Bennett' },
		{
			name: 'description',
			content: 'Design Engineer at Thinkmill',
		},
	];
};

export default function Page() {
	const { document } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<DocumentRenderer document={document} />
		</Layout>
	);
}
