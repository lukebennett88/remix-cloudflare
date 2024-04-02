import { Link as RemixLink } from '@remix-run/react';
import { css } from '@tokenami/css';

import * as recipe from '#app/recipes';

import { ExternalLinkIcon } from './external-link-icon';

export interface LinkProps extends recipe.LinkArgs {
	children: React.ReactNode;
	href: string;
}

export function Link({ children, href, tone = 'accent' }: LinkProps) {
	const { root, center, rail } = recipe.track({ isInline: true });
	const isExternal = href.startsWith('http');
	return (
		<RemixLink
			style={css({
				...recipe.link({ tone }),
				...root,
			})}
			to={href}
		>
			<span style={css({ ...center })}>{children}</span>
			{isExternal && <ExternalLinkIcon style={css({ ...rail })} />}
		</RemixLink>
	);
}
