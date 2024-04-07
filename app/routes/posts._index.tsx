import { json, MetaFunction } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
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

const { root, center, rail } = recipe.track();

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
				})}
			>
				{posts.map((post) => (
					<Post key={post.slug} {...post} />
				))}
			</ul>
		</Layout>
	);
}

interface PostProps {
	slug: string;
	entry: {
		title: string;
		publishedAt: string;
		isDraft: boolean;
	};
}

function Post({ entry, slug }: PostProps) {
	return (
		<li
			style={css({
				'--border-block-end-color': 'var(--border-color_neutral)',
				'--border-block-end-style': 'var(---,solid)',
				'--border-block-end-width': '1px',
				'--last-child_border-width': 0,
				'--padding-block': 16,
			})}
		>
			<article
				style={css({
					'--align-items': 'baseline',
					'--display': 'flex',
					'--gap': 8,
					'--justify-content': 'space-between',
					...root,
				})}
			>
				<Link
					style={css({
						...recipe.link({ tone: 'accent' }),
						...center,
						'--flex-grow': 'var(--flex-grow_0)',
						'--text-decoration-style': entry.isDraft ? 'dashed' : 'solid',
					})}
					to={`/posts/${slug}`}
				>
					<h2
						style={css({
							...recipe.typography({ size: '18' }),
							'--font-weight': 'var(--weight_700)',
						})}
					>
						{entry.title}
					</h2>
				</Link>
				<time
					dateTime={entry.publishedAt}
					style={css({
						...recipe.typography({ size: '14' }),
						...rail,
					})}
				>
					{entry.publishedAt}
				</time>
			</article>
		</li>
	);
}
