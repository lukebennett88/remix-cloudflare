/* eslint-disable prefer-const */

/**
 * By default, Remix will handle generating the HTTP Response for you.
 *
 * You are free to delete this file if you'd like to, but if you ever want it
 * revealed again, you can run `npx remix reveal` ✨
 * @see https://remix.run/file-conventions/entry.server
 */

import { type HandleDocumentRequestFunction } from '@remix-run/cloudflare';
import { RemixServer } from '@remix-run/react';
import { isbot } from 'isbot';
import { renderToReadableStream } from 'react-dom/server';

import { NonceProvider } from '#app/context/nonce-context';

type DocRequestArgs = Parameters<HandleDocumentRequestFunction>;

export default async function handleRequest(...args: DocRequestArgs) {
	let [
		request,
		responseStatusCode,
		responseHeaders,
		remixContext,
		loadContext,
	] = args;
	const nonce = String(loadContext.cspNonce ?? '') ?? undefined;
	const body = await renderToReadableStream(
		<NonceProvider value={nonce}>
			<RemixServer context={remixContext} url={request.url} />
		</NonceProvider>,
		{
			signal: request.signal,
			onError(error) {
				// Log streaming rendering errors from inside the shell
				console.error(error);
				responseStatusCode = 500;
			},
		},
	);

	if (isbot(request.headers.get('user-agent') || '')) {
		await body.allReady;
	}

	responseHeaders.set('Content-Type', 'text/html');
	return new Response(body, {
		headers: responseHeaders,
		status: responseStatusCode,
	});
}
