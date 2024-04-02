import { css } from '@tokenami/css';

export const codeBlockStyles = css({
	'--background-color': 'var(---,#011627)', // these should match the syntax highlighting theme
	'--color': 'var(---,#d6deeb)', // these should match the syntax highlighting theme
	'--padding': 16,
});

export function BasicCodeBlock({ children }: { children: string }) {
	return (
		<pre style={codeBlockStyles}>
			<code>{children}</code>
		</pre>
	);
}
