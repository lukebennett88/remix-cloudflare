import { NavLink, type NavLinkProps } from '@remix-run/react';
import { css } from '@tokenami/css';
import { type TokenamiProperties } from '@tokenami/dev';

import * as recipe from '#app/recipes';

type NavLinkRenderProps = {
	isActive: boolean;
	isPending: boolean;
	isTransitioning: boolean;
};

export interface LinkProps
	extends Omit<NavLinkProps, 'style' | 'to'>,
		recipe.LinkArgs,
		recipe.TypographyArgs {
	href: string;
	style?:
		| TokenamiProperties
		| ((props: NavLinkRenderProps) => TokenamiProperties | undefined);
}

export function Link({
	capsize = false,
	children,
	href,
	size,
	style,
	tone = 'accent',
	...consumerProps
}: LinkProps) {
	const isExternal = href.startsWith('http');
	return (
		<NavLink
			style={(renderProps) =>
				css(
					{
						...recipe.link({ tone }),
						'--font-weight': 'var(--weight_700)',
						'--text-wrap': 'pretty',
					},
					typeof style === 'function' ? style(renderProps) : style,
				)
			}
			to={href}
			{...consumerProps}
		>
			{(renderProps) => (
				<span
					style={css({
						...(size &&
							recipe.typography({
								capsize,
								size,
							})),
					})}
				>
					{typeof children === 'function' ? children(renderProps) : children}
					{isExternal && <>&nbsp;↝</>}
				</span>
			)}
		</NavLink>
	);
}
