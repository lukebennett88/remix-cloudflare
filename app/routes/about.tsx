import { MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { css } from '@tokenami/css';

import { DocumentRenderer } from '#app/components/document-renderer';
import { reader } from '#app/reader.server.js';
import * as recipe from '#app/recipes';

export const loader = async () => {
	const page = await reader.singletons.about.read();
	if (!page) {
		throw new Response('Not found', { status: 404 });
	}
	return await page.content();
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
	const document = useLoaderData<typeof loader>();
	return (
		<div
			style={css({
				...recipe.stack(),
				'--gap': 12,
				'--margin': 'var(--size_auto)',
				'--max-inline-size': 'var(---,60ch)',
			})}
		>
			<DocumentRenderer document={document} />
		</div>
	);
}
