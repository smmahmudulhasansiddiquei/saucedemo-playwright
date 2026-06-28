import { test, expect } from '../fixtures/baseTest.js';
import { users } from '../fixtures/testData.js';

test.describe('Checkout Flow', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

    });

    test('Complete Checkout', async ({

        inventoryPage,
        cartPage,
        checkoutPage

    }) => {

        await inventoryPage.addBackpackToCart();
        await inventoryPage.openCart();
        await cartPage.checkout();
        
        await checkoutPage.completeCheckout(

            'Mahmudul',
            'Hasan',
            '1207'

        );

        await expect(
            checkoutPage.page.locator('.complete-header')
        ).toHaveText(
            'Thank you for your order!'
        );

    });

});