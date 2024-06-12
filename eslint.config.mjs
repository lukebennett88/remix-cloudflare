import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends('eslint:recommended'),
	{
		ignores: [
			'.env',
			'.wrangler',
			'/.cache',
			'/build',
			'app/tokenami.css',
			'node_modules',
		],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.commonjs,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	...fixupConfigRules(
		compat.extends(
			'plugin:react/recommended',
			'plugin:react/jsx-runtime',
			'plugin:react-hooks/recommended',
			'plugin:jsx-a11y/recommended',
		),
	).map((config) => ({
		...config,
		files: ['**/*.{js,jsx,ts,tsx}'],
	})),
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			'react': fixupPluginRules(react),
			'jsx-a11y': fixupPluginRules(jsxA11Y),
		},
		settings: {
			react: {
				version: 'detect',
			},
			formComponents: ['Form'],
			linkComponents: [
				{
					name: 'Link',
					linkAttribute: 'to',
				},
				{
					name: 'NavLink',
					linkAttribute: 'to',
				},
			],
		},
		rules: {
			'jsx-a11y/alt-text': 'off',
			'react/jsx-sort-props': 'warn',
		},
	},
	...compat.extends('plugin:@typescript-eslint/recommended').map((config) => ({
		...config,
		files: ['**/*.{ts,tsx}'],
	})),
	{
		files: ['**/*.{ts,tsx}'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		languageOptions: {
			parser: tsParser,
		},
		settings: {},
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/consistent-type-imports': [
				'warn',
				{
					prefer: 'type-imports',
					fixStyle: 'inline-type-imports',
				},
			],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		files: ['**/.eslintrc.cjs'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
