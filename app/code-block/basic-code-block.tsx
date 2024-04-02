import { css } from '@tokenami/css';

export const codeBlockStyles = css({
	'--background-color': 'var(---,#011627)', // these should match the syntax highlighting theme
	'--color': 'var(---,#d6deeb)', // these should match the syntax highlighting theme
	'--font-family': 'var(--font-family_mono)',
	'--overflow': 'auto',
	'--padding': 16,
	'--tab-size': 2,
	'--transition-duration': 'var(--transition-duration_150ms)',
	'--transition-property': 'all',
	'--transition-timing-function': 'var(--ease_in)',
});

export function BasicCodeBlock({ children }: { children: string }) {
	return (
		<pre style={codeBlockStyles}>
			<code>{children}</code>
		</pre>
	);
}
