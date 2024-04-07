import {
	Link as RemixLink,
	LinkProps as RemixLinkProps,
} from '@remix-run/react';
import { css, TokenamiStyle } from '@tokenami/css';
import { Fragment } from 'react/jsx-runtime';

import * as recipe from '#app/recipes';

import { AlignChildToText } from './align-child-to-text';
import { ExternalLinkIcon } from './external-link-icon';

export interface LinkProps
	extends TokenamiStyle<RemixLinkProps>,
		recipe.LinkArgs {
	children: React.ReactNode;
}

export function Link({
	children,
	to,
	tone = 'accent',
	style,
	...consumerProps
}: LinkProps) {
	const isExternal = typeof to === 'string' && to.startsWith('http');
	return (
		<RemixLink
			style={css(
				{
					...recipe.link({ tone }),
				},
				style,
			)}
			to={to}
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
