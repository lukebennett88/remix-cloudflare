import {
	Link as RemixLink,
	type LinkProps as RemixLinkProps,
} from '@remix-run/react';
import { css, type TokenamiStyle } from '@tokenami/css';
import { Fragment } from 'react/jsx-runtime';

import * as recipe from '#app/recipes';

import { AlignChildToText } from './align-child-to-text';
import { ExternalLinkIcon } from './external-link-icon';

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
				<Fragment>
					&nbsp;
					<AlignChildToText>
						<ExternalLinkIcon
							style={css({
								'--block-size': 'var(---,0.75em)',
								'--inline-size': 'var(---,0.75em)',
							})}
						/>
					</AlignChildToText>
				</Fragment>
			)}
		</RemixLink>
	);
}
