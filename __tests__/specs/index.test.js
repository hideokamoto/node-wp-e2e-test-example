const {
	visitAdminPage,
} = require('@wordpress/e2e-test-utils');

describe( 'Hello World', () => {
	it( 'Should load properly', async () => {
		await visitAdminPage( '/' );
		await page.screenshot({path: 'admin.png'})
		const nodes = await page.$x(
			'//h2[contains(text(), "Welcome to WordPress!")]'
		);
		expect( nodes.length ).not.toEqual(0)
	} );
} );