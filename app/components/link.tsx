import { Link as RemixLink } from '@remix-run/react';
import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

import { AlignChildToText } from './align-child-to-text';
import { ExternalLinkIcon } from './external-link-icon';

export interface LinkProps extends recipe.LinkArgs {
	children: React.ReactNode;
	href: string;
}

export function Link({ children, href, tone = 'accent' }: LinkProps) {
	const isExternal = href.startsWith('http');
	return (
		<RemixLink
			style={css({
				...recipe.link({ tone }),
			})}
			to={href}
		>
			{children}&nbsp;
			{isExternal && (
				<AlignChildToText>
					<ExternalLinkIcon
						style={css({
							'--block-size': 'var(---,0.75em)',
							'--inline-size': 'var(---,0.75em)',
						})}
					/>
				</AlignChildToText>
			)}
		</RemixLink>
	);
}
