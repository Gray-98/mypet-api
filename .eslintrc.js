module.exports = {
	env: {
		node: true
	},
	rules: {
		semi: ['error', 'always'],
    	quotes: ['error', 'single'],
		strict: ["error", "safe"]
	},
	parser: "babel-eslint",
	parserOptions: {
	  ecmaVersion: 7
	},
	ignorePatterns: ['config/config.js', 'migrations/*.js']
};
