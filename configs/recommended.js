module.exports = {
	env: {
		es2018: true
	},
	parserOptions: {
		ecmaVersion: 'es6',
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended'
	],
	rules: {
		'array-bracket-spacing': [ 'error', 'always' ],
		'indent': [ 2, 2, {
			VariableDeclarator: { var: 2, let: 2, const: 3 },
			FunctionDeclaration: { body: 1, parameters: 2 },
			FunctionExpression: { body: 1, parameters: 2 }
		} ],
		'keyword-spacing': [ 2 ],
		'lines-around-comment': [ 2, { beforeBlockComment: true, beforeLineComment: true } ],
		'no-bitwise': 2,
		"no-unexpected-multiline": "error",
		"no-param-reassign": 1,
		eqeqeq: "error",
		"max-len": ["error", { code: 140, ignoreUrls: true }],
		"comma-dangle": ["error", "never"],
		"import/no-extraneous-dependencies": "warn",
		"consistent-return": "warn",
		"no-plusplus": 0,
		"no-underscore-dangle": 0,
		"no-restricted-syntax": "warn",
		"no-continue": "warn",
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		'no-multi-spaces': 2,
		'no-trailing-spaces': [ 2 ],
		'no-unused-vars': [ 2, { args: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^_' } ],
		'object-curly-spacing': [ 2, 'always' ],
		'semi': [ 2, 'always' ],
		'space-before-blocks': [ 2, 'always' ],
		'space-before-function-paren': [ 'error', {
			'anonymous': 'never',
			'named': 'never',
			'asyncArrow': 'always'
		} ],
		'spaced-comment': [ 2, 'always' ],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': 'error',
		'quotes': [ 2, 'single', { avoidEscape: true } ]
	}
};
