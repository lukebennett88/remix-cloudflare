import { DocumentRenderer } from '@keystatic/core/renderer';
import { type LoaderFunction } from '@remix-run/cloudflare';
import { cacheHeader } from 'pretty-cache-header';
import { renderToStaticMarkup } from 'react-dom/server';

import { reader } from '../reader.server';

const BASE_URL = 'https://www.lukebennett.com.au';
const MAX_POSTS = 100;

export const loader: LoaderFunction = async () => {
	const [linkPosts, blogPosts] = await Promise.all([
		Promise.all(
			(await reader.collections.links.all()).map(async (post) => ({
				type: 'link' as const,
				...post,
				entry: {
					...post.entry,
					content: await post.entry.content(),
				},
			})),
		),
		Promise.all(
			(await reader.collections.posts.all())
				.map((post) => ({
					type: 'post' as const,
					...post,
				}))
				.filter((post) => (import.meta.env.PROD ? !post.entry.isDraft : true))
				.map(async (post) => ({
					...post,
					entry: {
						...post.entry,
						content: await post.entry.content(),
					},
				})),
		),
	]);

	const posts = [...linkPosts, ...blogPosts]
		.sort(
			(a, b) =>
				new Date(b.entry.publishedAt).getTime() -
				new Date(a.entry.publishedAt).getTime(),
		)
		.slice(0, MAX_POSTS);

	const feed = generateRss({
		title: 'Luke Bennett',
		websiteUrl: BASE_URL,
		feedUrl: `${BASE_URL}/feed.xml`,
		icon: `${BASE_URL}/favicon.svg`,
		language: 'en-AU',
		updatedAt: new Date().toUTCString(),
		entries: await Promise.all(
			posts.map(async (post) => ({
				author: 'Luke Bennett',
				content: renderToStaticMarkup(
					<DocumentRenderer document={post.entry.content} />,
				),
				publishedAt: post.entry.publishedAt,
				title: post.entry.title,
				url: `${BASE_URL}/posts/${post.slug}`,
				// image: post.entry.image,
				// updatedAt: post.entry.updatedAt,
			})),
		),
	});

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/atom+xml',
			'Cache-Control': cacheHeader({
				maxAge: '15 minutes',
				public: true,
				sMaxage: '2 hours',
				staleWhileRevalidate: '10 minutes',
			}),
		},
	});
};

type RssEntry = {
	author?: string;
	content?: string;
	image?: string;
	publishedAt: string;
	title: string;
	updatedAt?: string;
	url: string;
};

function generateRss({
	entries,
	feedUrl,
	icon,
	language = 'en-AU',
	title,
	updatedAt,
	websiteUrl,
}: {
	entries: RssEntry[];
	feedUrl: string;
	icon: string;
	language?: string;
	updatedAt: string;
	title: string;
	websiteUrl: string;
}): string {
	return `
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${language}">
	<title>${title}</title>
	<icon>${icon}</icon>
	<updated>${updatedAt}</updated>
	<id>${feedUrl}</id>
	<link rel="self" href="${feedUrl}" type="application/atom+xml"/>
	<link type="text/html" href="${websiteUrl}" rel="alternate"/>
	${entries
		.map(
			(entry) => `
	<entry>
		<published>${entry.publishedAt}</published>
		${entry.updatedAt ? `<updated>${entry.updatedAt}</updated>` : ''}
		<title>${entry.title}</title>
		${entry.content ? `<content type="html">${entry.content}</content>` : ''}
		<link rel="alternate" type="text/html" href="${entry.url}"/>
		<id>${entry.url}</id>
		${entry.author ? `<author><name>${entry.author}</name></author>` : ''}
		${entry.image ? `<link rel="enclosure" type="image/jpeg" href="${entry.image}"/>` : ''}
	</entry>
	`,
		)
		.join('')}
</feed>
`;
}
