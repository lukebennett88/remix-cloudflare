import { getHintUtils } from '@epic-web/client-hints';
import {
	clientHint as colorSchemeHint,
	subscribeToSchemeChange,
} from '@epic-web/client-hints/color-scheme';
import { useRevalidator } from '@remix-run/react';
import * as React from 'react';

const hintsUtils = getHintUtils({
	theme: colorSchemeHint,
});

export function ClientHintCheck({ nonce }: { nonce: string }) {
	const { revalidate } = useRevalidator();
	React.useEffect(
		() => subscribeToSchemeChange(() => revalidate()),
		[revalidate],
	);

	return (
		<script
			dangerouslySetInnerHTML={{
				__html: hintsUtils.getClientHintCheckScript(),
			}}
			nonce={nonce}
		/>
	);
}

export const { getHints } = hintsUtils;
