/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},

	// Base config
	extends: ['eslint:recommended'],

	overrides: [
		// React
		{
			files: ['**/*.{js,jsx,ts,tsx}'],
			plugins: ['react', 'jsx-a11y'],
			extends: [
				'plugin:react/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-hooks/recommended',
				'plugin:jsx-a11y/recommended',
			],
			rules: {
				'jsx-a11y/alt-text': 'off',
				'react/jsx-sort-props': 'warn',
			},
			settings: {
				react: {
					version: 'detect',
				},
				formComponents: ['Form'],
				linkComponents: [
					{ name: 'Link', linkAttribute: 'to' },
					{ name: 'NavLink', linkAttribute: 'to' },
				],
			},
		},

		// Typescript
		{
			files: ['**/*.{ts,tsx}'],
			plugins: ['@typescript-eslint'],
			parser: '@typescript-eslint/parser',
			settings: {},
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/consistent-type-imports': [
					'warn',
					{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
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

		// Node
		{
			files: ['.eslintrc.cjs'],
			env: {
				node: true,
			},
		},
	],
};
