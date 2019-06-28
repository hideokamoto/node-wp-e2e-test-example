const path = require( 'path' );

const jestE2EConfig = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: [
		'<rootDir>/__tests__/config/bootstrap.js',
	],
	testMatch: [
		'<rootDir>/__tests__/specs/**/?(*.)(spec|test).js',
	],
	transform: {
		'^.+\\.[jt]sx?$': path.join( __dirname, 'babel-transform' ),
	},
	transformIgnorePatterns: [
		'node_modules',
		'scripts/__tests__/config/puppeteer.config.js',
	],
};


module.exports = jestE2EConfig;