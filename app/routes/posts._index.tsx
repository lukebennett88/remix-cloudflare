import { json, MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { css } from '@tokenami/css';

import { reader } from '#app/reader.server.js';
import * as recipe from '#app/recipes';

import { Heading } from '../components/heading';
import { Layout } from '../components/layout';

export const loader = async () => {
	const posts = (await reader.collections.posts.all())
		.filter((post) => (import.meta.env.PROD ? !post.entry.isDraft : true))
		.sort(
			(a, b) =>
				new Date(b.entry.publishedAt).getTime() -
				new Date(a.entry.publishedAt).getTime(),
		);

	return json({
		posts,
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
	const { posts } = useLoaderData<typeof loader>();

	return (
		<Layout>
			<Heading id="posts" level={1}>
				Posts
			</Heading>
			<ul
				aria-labelledby="posts"
				style={css({
					...recipe.stack(),
					'--gap': 16,
				})}
			>
				{posts.map(({ slug, entry }) => (
					<li
						key={slug}
						style={css(
							entry.isDraft ?
								{
									'--outline-color': 'var(--border-color_accent)',
									'--outline-offset': 2,
									'--outline-style': 'dashed',
									'--outline-width': 2,
								}
							:	{},
						)}
						// className={cn(
						// 	'prose dark:prose-invert break-words bg-white p-4 shadow sm:rounded-xl dark:bg-gray-800',
						// 	entry.isDraft && 'border-2 border-dashed border-yellow-500',
						// )}
					>
						<a
							href={`/posts/${slug}`}
							style={css({
								...recipe.link({ tone: 'accent' }),
								'--display': 'inline-block',
							})}
						>
							<h2
								style={css({
									...recipe.typography({ size: '18' }),
								})}
							>
								{entry.title}
							</h2>
						</a>
						<br />
						<time className="text-sm" dateTime={entry.publishedAt}>
							{entry.publishedAt}
						</time>
					</li>
				))}
			</ul>
		</Layout>
	);
}
