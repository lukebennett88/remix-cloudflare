import {
	Link as RemixLink,
	type LinkProps as RemixLinkProps,
} from '@remix-run/react';
import { css, type TokenamiStyle } from '@tokenami/css';

import * as recipe from '#app/recipes';

import { ExternalLinkIcon } from './icons/external-link';

export interface LinkProps
	extends Omit<TokenamiStyle<RemixLinkProps>, 'to'>,
		recipe.LinkArgs {
	children: React.ReactNode;
	href: string;
}

export function Link({
	children,
	href,
	tone = 'accent',
	style,
	...consumerProps
}: LinkProps) {
	const isExternal = typeof href === 'string' && href.startsWith('http');
	return (
		<RemixLink
			style={css(
				{
					...recipe.link({ tone }),
					'--text-wrap': 'pretty',
				},
				style,
			)}
			to={href}
			{...consumerProps}
		>
			{children}
			{isExternal && (
				<>
					&nbsp;
					<ExternalLinkIcon
						style={css({
							'--block-size': 'var(---,0.875em)',
							'--display': 'inline',
							'--inline-size': 'var(---,0.875em)',
							'--vertical-align': 'baseline',
						})}
					/>
				</>
			)}
		</RemixLink>
	);
}
