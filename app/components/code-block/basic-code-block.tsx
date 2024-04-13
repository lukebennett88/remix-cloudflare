import { css } from '@tokenami/css';
import { type TokenamiProperties } from '@tokenami/dev';

export const codeBlockStyles = css({
	'--background-color': 'var(---,#011627)', // these should match the syntax highlighting theme
	'--color': 'var(---,#d6deeb)', // these should match the syntax highlighting theme
	'--display': 'inline-block',
	'--font-family': 'var(--font-family_mono)',
	'--font-size': 'var(---,0.75em)',
	'--inline-size': 'var(--size_full)',
	'--margin-inline': 'var(--size_auto)',
	'--overflow': 'auto',
	'--padding': 16,
	'--tab-size': 2,
});

export function BasicCodeBlock({
	children,
	style,
}: {
	children: string;
	style?: TokenamiProperties;
}) {
	return (
		<pre style={css(codeBlockStyles, style)}>
			<code>{children}</code>
		</pre>
	);
}
