module.exports = {
	env: {
		browser: true
	},
	extends: [
		'plugin:processmaker/recommended'
	],
	rules: {
		'no-restricted-imports': [ 2, {
			'name': 'inherits',
			'message': 'Use inherits-browser instead'
		} ]
	}
}
