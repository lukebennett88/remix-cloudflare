import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

export const codeBlockStyles = css({
	...recipe.typography({ capsize: false, size: '14' }),
	'--background-color': 'var(---,#011627)', // these should match the syntax highlighting theme
	'--color': 'var(---,#d6deeb)', // these should match the syntax highlighting theme
	'--font-family': 'var(--font-family_mono)',
	'--overflow': 'auto',
	'--padding': 16,
	'--tab-size': 2,
});

export function BasicCodeBlock({ children }: { children: string }) {
	return (
		<pre style={codeBlockStyles}>
			<code>{children}</code>
		</pre>
	);
}
