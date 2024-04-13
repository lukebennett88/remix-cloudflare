import { css } from '@tokenami/css';
import { type TokenamiProperties } from '@tokenami/dev';
import * as React from 'react';
import { getHighlighterCore } from 'shiki/core';
import cssLang from 'shiki/langs/css.mjs';
import htmlLang from 'shiki/langs/html.mjs';
import javascriptLang from 'shiki/langs/javascript.mjs';
import jsonLang from 'shiki/langs/json.mjs';
import markdownLang from 'shiki/langs/markdown.mjs';
import tsxLang from 'shiki/langs/tsx.mjs';
import typescriptLang from 'shiki/langs/typescript.mjs';
import nightOwl from 'shiki/themes/night-owl.mjs';
import getWasm from 'shiki/wasm';

import { BasicCodeBlock, codeBlockStyles } from './basic-code-block';

export async function getHighligher() {
	return await getHighlighterCore({
		langs: [
			cssLang,
			htmlLang,
			javascriptLang,
			jsonLang,
			markdownLang,
			tsxLang,
			typescriptLang,
		],
		loadWasm: getWasm,
		themes: [nightOwl],
	});
}

const highlightableLangs = [
	'css',
	'html',
	'javascript',
	'json',
	'markdown',
	'tsx',
	'typescript',
] as const;

type HighlightableLang = (typeof highlightableLangs)[number];

function isHighlightable(lang: string | undefined): lang is HighlightableLang {
	return highlightableLangs.includes(lang as any);
}

export default function CodeBlock({
	children,
	language,
	style,
}: {
	children: string;
	language?: string;
	style?: TokenamiProperties;
}) {
	const [highlightedCode, setHighlightedCode] = React.useState<string>();

	React.useEffect(() => {
		let isMounted = true;

		if (isHighlightable(language)) {
			(async function highlightCode() {
				try {
					const highlighter = await getHighligher();
					const highlighted = highlighter.codeToHtml(children, {
						lang: language,
						theme: 'night-owl',
					});
					if (isMounted) {
						setHighlightedCode(highlighted);
					}
				} catch (error) {
					import.meta.env.DEV &&
						console.error('Failed to highlight code:', error);
				}
			})();
		}

		return () => {
			isMounted = false;
		};
	}, [children, language]);

	if (!highlightedCode) {
		return (
			<BasicCodeBlock style={css(codeBlockStyles, style)}>
				{children}
			</BasicCodeBlock>
		);
	}

	return (
		<div
			dangerouslySetInnerHTML={{ __html: highlightedCode }}
			style={css(codeBlockStyles, style)}
		/>
	);
}
