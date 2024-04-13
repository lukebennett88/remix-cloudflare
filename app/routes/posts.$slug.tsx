import {
	json,
	type LoaderFunctionArgs,
	type MetaFunction,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

import { DocumentRenderer } from '#app/components/document-renderer';
import { reader } from '#app/reader.server.js';

import { Heading } from '../components/heading';
import { Layout } from '../components/layout';

export const loader = async ({ params }: LoaderFunctionArgs) => {
	if (!params.slug) {
		throw new Response('Error', { status: 500 });
	}

	const post = await reader.collections.posts.read(params.slug);

	if (!post) {
		throw new Response('Not found', { status: 404 });
	}

	if (import.meta.env.PROD && post.isDraft) {
		throw new Response('Not found', { status: 404 });
	}

	return json({
		document: await post.content(),
		publishedAt: post.publishedAt,
		title: post.title,
	});
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
	const { document, title } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Heading level={1}>{title}</Heading>
			<DocumentRenderer document={document} />
		</Layout>
	);
}
