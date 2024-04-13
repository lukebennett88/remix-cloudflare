import { InferRenderersForComponentBlocks } from '@keystatic/core';
import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps as KeystaticDocumentRendererProps,
} from '@keystatic/core/renderer';
import { css } from '@tokenami/css';

import { CloudImage } from '#app/components/cloud-image';
import { CodeBlock } from '#app/components/code-block';
import { Heading } from '#app/components/heading';
import { Link } from '#app/components/link';
import * as recipe from '#app/recipes';

import { componentBlocks as editorComponentBlocks } from '../../keystatic.config';

interface DocumentRendererProps extends KeystaticDocumentRendererProps {}

export function DocumentRenderer(props: DocumentRendererProps) {
	return (
		<KeystaticDocumentRenderer
			componentBlocks={componentBlocks}
			renderers={renderers}
			{...props}
		/>
	);
}

const componentBlocks = {
	cloudImage(props) {
		return <CloudImage {...props} />;
	},
} satisfies InferRenderersForComponentBlocks<typeof editorComponentBlocks>;

const renderers = {
	block: {
		blockquote(props) {
			return (
				<blockquote
					{...props}
					style={css({
						...recipe.typography({ size: '24' }),
						...recipe.verticalRhythm(),
						'--border-inline-start-color': 'var(--border-color_accent)',
						'--border-inline-start-style': 'var(---,solid)',
						'--border-inline-start-width': 'var(---,0.25rem)',
						'--color': 'var(--text-color_neutral)',
						'--font-style': 'italic',
						'--padding-block': 'var(---,0.25em)',
						'--padding-inline-start': 12,
					})}
				/>
			);
		},
		code(props) {
			return (
				<CodeBlock
					{...props}
					style={css({
						...recipe.verticalRhythm(),
					})}
				/>
			);
		},
		divider(props) {
			return (
				<hr
					{...props}
					style={css({
						...recipe.verticalRhythm(),
					})}
				/>
			);
		},
		heading(props) {
			return (
				<Heading
					{...props}
					style={css({
						...recipe.verticalRhythm(),
					})}
				/>
			);
		},
		image(props) {
			return (
				<img
					{...props}
					style={css({
						...recipe.verticalRhythm(),
					})}
				/>
			);
		},
		list(props) {
			const listTypes = {
				ordered: {
					element: 'ol',
					listStyleType: 'decimal',
				},
				unordered: {
					element: 'ul',
					listStyleType: 'disc',
				},
			} as const;
			const listType = listTypes[props.type];
			const List = listType.element;
			return (
				<List
					style={css({
						...recipe.verticalRhythm(),
						'--list-style-position': 'inside',
						'--list-style-type': listType.listStyleType,
					})}
				>
					{props.children.map((child) => (
						<li
							key={child.key}
							style={css({
								'--display': 'list-item',
							})}
						>
							{child}
						</li>
					))}
				</List>
			);
		},
		paragraph(props) {
			return (
				<p
					style={css({
						...recipe.verticalRhythm(),
						'--text-align': props.textAlign,
					})}
				>
					{props.children}
				</p>
			);
		},
	},
	inline: {
		code(props) {
			return (
				<code
					style={css({
						'--color': 'var(--text-color_neutral)',
						'--display': 'inline-block',
						'--font-family': 'var(--font-family_mono)',
						'--font-size': 'var(---,0.75em)',
						'--font-weight': 'var(--weight_700)',
					})}
				>
					{props.children}
				</code>
			);
		},
		link(props) {
			return <Link {...props} />;
		},
		bold(props) {
			return (
				<strong
					style={css({
						'--color': 'var(--text-color_neutral)',
						'--font-weight': 'var(--weight_700)',
					})}
				>
					{props.children}
				</strong>
			);
		},
		italic(props) {
			return (
				<em
					style={css({
						'--font-style': 'italic',
					})}
				>
					{props.children}
				</em>
			);
		},
		keyboard(props) {
			return <kbd>{props.children}</kbd>;
		},
		strikethrough(props) {
			return (
				<s
					style={css({
						'--text-decoration-line': 'line-through',
					})}
				>
					{props.children}
				</s>
			);
		},
		underline(props) {
			return (
				<u
					style={css({
						'--text-decoration': 'underline',
					})}
				>
					{props.children}
				</u>
			);
		},
	},
} satisfies DocumentRendererProps['renderers'];
