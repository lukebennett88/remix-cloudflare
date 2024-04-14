import { NavLink, type NavLinkProps } from '@remix-run/react';
import { css, type TokenamiStyle } from '@tokenami/css';

import * as recipe from '#app/recipes';

export interface LinkProps
	extends Omit<TokenamiStyle<NavLinkProps>, 'to'>,
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
	const isExternal = href.startsWith('http');
	return (
		<NavLink
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
			{isExternal && <>&nbsp;↝</>}
		</NavLink>
	);
}
