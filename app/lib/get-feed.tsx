import { DocumentRenderer } from '@keystatic/core/renderer';
import { Feed } from 'feed';
import { renderToStaticMarkup } from 'react-dom/server';

import { reader } from '../reader.server';

const BASE_URL = 'https://www.lukebennett.com.au';
const MAX_POSTS = 100;

export async function getFeed() {
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

	const feed = new Feed({
		title: 'Luke Bennett',
		description: 'This is my personal feed!',
		id: BASE_URL,
		link: `${BASE_URL}/feed.xml`,
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		image: `${BASE_URL}/favicon.svg`,
		favicon: `${BASE_URL}/favicon.ico`,
		copyright: `All rights reserved ${new Date().getFullYear()}, Luke Bennett`,
		updated: new Date(2013, 6, 14),
		generator: '',
		feedLinks: {
			json: `${BASE_URL}/feed.json`,
			atom: `${BASE_URL}/feed.atom`,
		},
		author: {
			name: 'Luke Bennett',
			email: 'hello@lukebennett.com.au',
			link: BASE_URL,
		},
	});

	posts.forEach((post) => {
		feed.addItem({
			title: post.entry.title,
			id: `${BASE_URL}/${post.slug}`,
			link: `${BASE_URL}/${post.slug}`,
			content: renderToStaticMarkup(
				<DocumentRenderer document={post.entry.content} />,
			),
			author: [
				{
					name: 'Luke Bennett',
					email: 'hello@lukebennett.com.au',
					link: BASE_URL,
				},
			],
			date: new Date(post.entry.publishedAt),
		});
	});

	return feed;
}
