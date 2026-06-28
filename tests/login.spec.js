import { test, expect } from '../fixtures/baseTest.js';

test.describe('Login Module', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.open();
    });

    test('Valid Login', async ({ loginPage, inventoryPage }) => {

        await loginPage.login(
            users.standard.username,
            users.standard.password
        );

        await expect(
            loginPage.page
        ).toHaveURL(/inventory/);

        await expect(
            loginPage.page.locator('.title')
        ).toHaveText('Products');

    });

    test('Invalid Login', async ({ loginPage }) => {

        await loginPage.login(
            'wrong_user',
            'wrong_password'
        );

        await expect(
            loginPage.page.locator('[data-test="error"]')
        ).toContainText(
            'Username and password do not match'
        );

    });

    test('Locked User Login', async ({ loginPage }) => {

        await loginPage.login(
            users.locked.username,
            users.locked.password
        );

        await expect(
            loginPage.page.locator('[data-test="error"]')
        ).toContainText(
            'Sorry, this user has been locked out.'
        );

    });

});