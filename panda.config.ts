import { defineConfig } from '@pandacss/dev';
import { orangeP3, sandP3 } from '@radix-ui/colors';

export default defineConfig({
	// eject: true,
	exclude: [],
	include: ['./app/**/*.{ts,tsx}'],
	lightningcss: true,
	outdir: 'styled-system',
	outExtension: 'js',
	preflight: true,
	// presets: [],
	shorthands: false,
	theme: {
		breakpoints: {
			bp10: '640px',
			bp20: '768px',
			bp30: '1024px',
			bp40: '1280px',
			bp50: '1536px',
			bp60: '1920px',
		},
		tokens: {
			colors: {
				background: {
					neutral: {
						DEFAULT: {
							description: '',
							value: sandP3.sand1,
						},
						hover: {
							description: '',
							value: sandP3.sand2,
						},
						pressed: {
							description: '',
							value: sandP3.sand3,
						},
						disabled: {
							description: '',
							value: sandP3.sand4,
						},
						selected: {
							description: '',
							value: sandP3.sand5,
						},
						inverse: {
							description: '',
							value: sandP3.sand12,
						},
						inverseHover: {
							description: '',
							value: sandP3.sand11,
						},
						inversePressed: {
							description: '',
							value: sandP3.sand10,
						},
						inverseDisabled: {
							description: '',
							value: sandP3.sand9,
						},
					},
					accent: {
						DEFAULT: {
							description: '',
							value: orangeP3.orange9,
						},
						hover: {
							description: '',
							value: orangeP3.orange8,
						},
						pressed: {
							description: '',
							value: orangeP3.orange7,
						},
						disabled: {
							description: '',
							value: orangeP3.orange6,
						},
						selected: {
							description: '',
							value: orangeP3.orange5,
						},
						inverse: {
							description: '',
							value: orangeP3.orange4,
						},
						inverseHover: {
							description: '',
							value: orangeP3.orange3,
						},
						inversePressed: {
							description: '',
							value: orangeP3.orange2,
						},
						inverseDisabled: {
							description: '',
							value: orangeP3.orange1,
						},
					},
				},
				border: {
					neutral: {
						value: sandP3.sand6,
					},
					accent: {
						value: orangeP3.orange6,
					},
					inverse: {
						value: sandP3.sand12,
					},
				},
				text: {
					neutral: {
						DEFAULT: {
							value: sandP3.sand12,
						},
						muted: {
							value: sandP3.sand11,
						},
						inverse: {
							value: sandP3.sand1,
						},
						inverseMuted: {
							value: sandP3.sand2,
						},
					},
					accent: {
						DEFAULT: {
							value: orangeP3.orange12,
						},
						muted: {
							value: orangeP3.orange11,
						},
						inverse: {
							value: orangeP3.orange1,
						},
						inverseMuted: {
							value: orangeP3.orange2,
						},
					},
				},
			},
			fonts: {
				sans: {
					value:
						"Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
				},
				rounded: {
					value:
						"ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif",
				},
				mono: {
					value:
						"ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
				},
			},
		},
	},
});
