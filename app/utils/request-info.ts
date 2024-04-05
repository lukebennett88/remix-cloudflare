import { useRouteLoaderData } from '@remix-run/react';
import { assert } from 'emery/assertions';

import { type loader as rootLoader } from '#app/root';

/**
 * @returns the request info from the root loader
 */
export function useRequestInfo() {
	const data = useRouteLoaderData<typeof rootLoader>('root');
	assert(
		data?.requestInfo !== undefined,
		'No requestInfo found in root loader',
	);

	return data.requestInfo;
}
