import { css } from '@tokenami/css';
import { TokenamiProperties } from '@tokenami/dev';
import { useMemo } from 'react';

type NativeImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

interface CloudImageProps
	extends Omit<
		NativeImageProps,
		| 'alt'
		| 'decoding'
		| 'height'
		| 'loading'
		| 'role'
		| 'sizes'
		| 'src'
		| 'srcSet'
		| 'style'
		| 'width'
	> {
	/**
	 * The alt text for the image.
	 */
	alt?: string;

	/**
	 * The breakpoints at which to generate images.
	 *
	 * @default [300, 400, 500, 600, 700]
	 */
	breakpoints?: number[];

	/**
	 * The caption for the image.
	 */
	caption?: string;

	/**
	 * Hint for browser image decoding.
	 * - 'sync': Decode with DOM rendering.
	 * - 'async': Decode after DOM rendering.
	 * - 'auto': Browser decides.
	 */
	decoding?: 'sync' | 'async' | 'auto';

	/**
	 * The densities at which to generate images.
	 *
	 * @default [1, 1.5, 2]
	 */
	densities?: number[];

	/**
	 * How the image should be resized to fit its container.
	 * - 'scale-down': Scale down to fit.
	 * - 'contain': Scale to fit, preserving aspect ratio.
	 * - 'cover': Scale to fill, preserving aspect ratio.
	 * - 'crop': Scale to fill, cropping edges if necessary.
	 * @default 'scale-down'
	 */
	fit?: 'scale-down' | 'contain' | 'cover' | 'crop';

	/**
	 * The height of the image.
	 */
	height?: number | null;

	/**
	 * Browser loading behavior for the image.
	 * - 'eager': Load immediately.
	 * - 'lazy': Defer until near viewport.
	 */
	loading?: 'eager' | 'lazy';

	/**
	 * The maximum width of the image.
	 *
	 * @default 700
	 */
	maxWidth?: number;

	/**
	 * Sets loading priority for the image.
	 * When true, image loads eagerly and is given high priority.
	 * Useful for above-the-fold or large hero images.
	 *
	 * @default false
	 */
	priority?: boolean;

	/**
	 * The source URL of the image.
	 */
	src: string;

	/**
	 * The style properties for the image in Tokenami format.
	 */
	style?: TokenamiProperties;

	/**
	 * The width of the image.
	 */
	width?: number | null;
}

export function CloudImage({
	alt,
	breakpoints = [300, 400, 500, 600, 700],
	caption,
	decoding,
	densities = [1, 1.5, 2],
	fit = 'scale-down',
	height = null,
	loading,
	maxWidth = 700,
	priority = false,
	src,
	style,
	width = null,
	...consumerProps
}: CloudImageProps) {
	const srcSet = useMemo(
		() =>
			generateSrcSet({
				breakpoints,
				densities,
				fit,
				height,
				src,
				width,
			}),
		[breakpoints, densities, fit, height, src, width],
	);

	const img = (
		<img
			{...consumerProps}
			alt={alt}
			decoding={decoding ?? priority ? 'async' : 'auto'}
			loading={loading ?? priority ? 'eager' : 'lazy'}
			role={alt ? undefined : 'presentation'}
			sizes={`(min-width: ${maxWidth}px) ${maxWidth}px, 100vw`}
			src={`${src}?width=${Math.min(width ?? 0, maxWidth)}&height=${
				height ?? 0
			}&fit=${fit}`}
			srcSet={srcSet}
			style={css(
				{
					'--aspect-ratio':
						width && height ? `${(width / height).toFixed(2)}` : 'auto',
					'--background-color': 'var(--background-color_neutral)',
					'--max-block-size': height ?? 'var(--size_full)',
					'--max-inline-size':
						width ? Math.min(width, maxWidth) : 'var(--size_full)',
					'--object-fit': 'cover',
					'--block-size': 'var(--size_full)',
				},
				style,
			)}
		/>
	);

	if (caption) {
		return (
			<figure>
				{img}
				<figcaption>{caption}</figcaption>
			</figure>
		);
	}

	return img;
}

function generateSrcSet({
	breakpoints,
	densities,
	fit,
	height,
	src,
	width,
}: Required<
	Pick<CloudImageProps, 'fit' | 'height' | 'src' | 'width'> & {
		breakpoints: number[];
		densities: number[];
	}
>) {
	if (!width || !height) {
		return '';
	}

	const srcSet: string[] = [];

	breakpoints.forEach((breakpoint) => {
		densities.forEach((density) => {
			const scaledWidth = Math.round(breakpoint * density);
			const scaledHeight = Math.round((scaledWidth / width) * height);
			srcSet.push(
				`${src}?width=${scaledWidth}&height=${scaledHeight}&fit=${fit} ${scaledWidth}w`,
			);
		});
	});

	return srcSet.join(', ');
}
