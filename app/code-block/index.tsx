import * as React from 'react';

import { BasicCodeBlock } from './basic-code-block';

const LazyCodeBlock = React.lazy(() => import('./highlighted-code-block'));

export function CodeBlock({
	children,
	language,
}: {
	children: string;
	language?: string | undefined;
}) {
	return (
		<React.Suspense fallback={<BasicCodeBlock>{children}</BasicCodeBlock>}>
			<LazyCodeBlock language={language}>{children}</LazyCodeBlock>
		</React.Suspense>
	);
}
