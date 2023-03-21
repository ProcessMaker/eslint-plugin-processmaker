module.exports = {
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	extends: [
		'plugin:processmaker/recommended',
		'plugin:vue/recommended'
	],
	plugins: ['vue'],
	parserOptions: {
		ecmaVersion: 'latest'
	}
};
