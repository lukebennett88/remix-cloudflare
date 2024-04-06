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
		code(props) {
			return <CodeBlock {...props} />;
		},
		heading(props) {
			return <Heading {...props} />;
		},
	},
	inline: {
		code(props) {
			return (
				<code
					style={css({
						'--font-family': 'var(--font-family_mono)',
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
				<strong style={css({ '--font-weight': 'var(--weight_700)' })}>
					{props.children}
				</strong>
			);
		},
		italic(props) {
			return (
				<em style={css({ '--font-style': 'italic' })}>{props.children}</em>
			);
		},
		keyboard(props) {
			return <kbd>{props.children}</kbd>;
		},
		strikethrough(props) {
			return (
				<s style={css({ '--text-decoration-line': 'line-through' })}>
					{props.children}
				</s>
			);
		},
		underline(props) {
			return (
				<u style={css({ '--text-decoration': 'underline' })}>
					{props.children}
				</u>
			);
		},
	},
} satisfies DocumentRendererProps['renderers'];
