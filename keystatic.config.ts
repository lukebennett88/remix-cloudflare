import { collection, config, fields, singleton } from '@keystatic/core';

const content = fields.document({
	label: 'Content',
	// componentBlocks,
	formatting: true,
	dividers: true,
	links: true,
	tables: true,
});

export default config({
	cloud: {
		project: 'luke-bennett/lukebennett-com-au',
	},
	storage:
		process.env.NODE_ENV === 'production' ?
			{ kind: 'cloud' }
		:	{ kind: 'local' },
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
	singletons: {
		about: singleton({
			label: 'About',
			entryLayout: 'content',
			format: {
				contentField: 'content',
			},
			path: 'content/_about',
			schema: {
				content,
			},
		}),
	},
});
