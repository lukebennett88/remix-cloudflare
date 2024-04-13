import { type TokenamiProperties } from '@tokenami/dev';
import * as React from 'react';

import { BasicCodeBlock } from './basic-code-block';

const LazyCodeBlock = React.lazy(() => import('./highlighted-code-block'));

export function CodeBlock({
	children,
	language,
	style,
}: {
	children: string;
	language?: string | undefined;
	style?: TokenamiProperties;
}) {
	return (
		<React.Suspense
			fallback={<BasicCodeBlock style={style}>{children}</BasicCodeBlock>}
		>
			<LazyCodeBlock language={language} style={style}>
				{children}
			</LazyCodeBlock>
		</React.Suspense>
	);
}
