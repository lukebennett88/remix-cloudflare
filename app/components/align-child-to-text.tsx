import { css } from '@tokenami/css';

import { ZeroWidthSpace } from '#app/components/zero-width-space';

export function AlignChildToText({ children }: { children: React.ReactNode }) {
	return (
		<span
			style={css({
				'--align-items': 'center',
				'--display': 'inline-flex',
				'--flex-shrink': 0,
				'--min-inline-size': 0,
			})}
		>
			<ZeroWidthSpace />
			<span
				style={css({
					'--display': 'inline-flex',
					'--block-size': 0,
					'--align-items': 'center',
				})}
			>
				{children}
			</span>
		</span>
	);
}
