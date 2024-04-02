import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps as KeystaticDocumentRendererProps,
} from '@keystatic/core/renderer';
import { css } from '@tokenami/css';

import { CodeBlock } from '../code-block';
import { Heading } from './heading';
import { Link } from './link';

interface DocumentRendererProps extends KeystaticDocumentRendererProps {}

export function DocumentRenderer(props: DocumentRendererProps) {
	return (
		<KeystaticDocumentRenderer
			{...props}
			renderers={{
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
							<em style={css({ '--font-style': 'italic' })}>
								{props.children}
							</em>
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
			}}
		/>
	);
}
