import { test, expect } from '../fixtures/baseTest.js';
import { users } from '../fixtures/testData.js';

test.describe('Inventory Module', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

    });

    test('Verify Inventory Page', async ({ inventoryPage }) => {

        await expect(
            inventoryPage.page.locator('.title')
        ).toHaveText('Products');

    });

    test('Add Backpack To Cart', async ({ inventoryPage }) => {

        await inventoryPage.addBackpackToCart();

        await expect(
            inventoryPage.page.locator('.shopping_cart_badge')
        ).toHaveText('1');

    });

    test('Sort Products A-Z', async ({ inventoryPage }) => {

        await inventoryPage.sortBy('az');

        await expect(
            inventoryPage.page.locator('.inventory_item')
                .first()
        ).toBeVisible();

    });

    test('Logout', async ({ inventoryPage }) => {

        await inventoryPage.logout();

        await expect(
            inventoryPage.page
        ).toHaveURL('/');

    });

});