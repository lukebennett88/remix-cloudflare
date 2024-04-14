import {
	json,
	type MetaFunction,
	type SerializeFrom,
} from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { css } from '@tokenami/css';

import { reader } from '#app/reader.server.js';
import * as recipe from '#app/recipes';

import { AlignChildToText } from '../components/align-child-to-text';
import { DocumentRenderer } from '../components/document-renderer';
import { Heading } from '../components/heading';
import { Layout } from '../components/layout';
import { Link } from '../components/link';

export const loader = async () => {
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

	return json({
		posts: [...linkPosts, ...blogPosts].sort(
			(a, b) =>
				new Date(b.entry.publishedAt).getTime() -
				new Date(a.entry.publishedAt).getTime(),
		),
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

const { root, center, rail } = recipe.track({
	verticalAlign: 'start',
});

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

type PostProps = SerializeFrom<typeof loader>['posts'][number];

function Post({ entry, slug, type }: PostProps) {
	const isLinkPost = type === 'link';
	return (
		<li
			style={css({
				'--border-block-end-color': 'var(--border-color_neutral)',
				'--border-block-end-style': 'var(---,solid)',
				'--border-block-end-width': '1px',
				'--last-child_border-width': 0,
				'--padding-block': 48,
			})}
		>
			<article
				style={css({
					...recipe.stack(),
					'--gap': 12,
				})}
			>
				<div
					style={css({
						...recipe.typography({
							capsize: false,
							size: '18',
						}),
						...root,
						'--gap': 24,
						'--justify-content': 'space-between',
					})}
				>
					<Link
						href={isLinkPost ? entry.linkedUrl : `/posts/${slug}`}
						style={css({
							...recipe.typography({
								size: '28',
							}),
							...center,
							'--font-weight': 'var(--weight_700)',
							'--text-decoration-style':
								!isLinkPost && entry.isDraft ? 'dashed' : 'solid',
						})}
						tone="accent"
					>
						<h2>
							{entry.title}
							{isLinkPost && <>&nbsp; ↝</>}
						</h2>
					</Link>
					<AlignChildToText>
						<time
							dateTime={entry.publishedAt}
							style={css({
								...rail,
								...recipe.typography({ size: '16' }),
								'--font-variant-numeric': 'tabular-nums',
							})}
						>
							{entry.publishedAt}
						</time>
					</AlignChildToText>
				</div>
				<div
					style={css({
						'--inline-size': 'var(--size_full)',
					})}
				>
					{isLinkPost && <DocumentRenderer document={entry.content as any} />}
				</div>
			</article>
		</li>
	);
}
