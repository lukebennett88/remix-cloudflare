import { collection, config, fields } from '@keystatic/core';

export default config({
	cloud: {
		project: 'luke-bennett/lukebennett-com-au',
	},
	storage:
		process.env.NODE_ENV === 'production' ?
			{
				kind: 'cloud',
				pathPrefix: 'apps/web',
			}
		:	{
				kind: 'local',
			},
	collections: {
		posts: collection({
			label: 'Posts',
			entryLayout: 'content',
			format: {
				contentField: 'content',
			},
			path: 'content/posts/*',
			slugField: 'title',
			schema: {
				title: fields.slug({
					name: {
						label: 'Title',
					},
				}),
				publishedAt: fields.date({
					label: 'Published at',
					validation: {
						isRequired: true,
					},
				}),
				isDraft: fields.checkbox({
					label: 'Do not publish',
					description:
						'Check this box to prevent this post from being published',
					defaultValue: false,
				}),
				content: fields.document({
					label: 'Content',
					// componentBlocks,
					formatting: true,
					dividers: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
});
