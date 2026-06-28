import { test } from '@playwright/test';
import { users } from '../fixtures/testData.js';

test('Authentication Setup', async ({ page }) => {

    await page.goto('/');
    await page.fill('#user-name', users.standard.username);
    await page.fill('#password', users.standard.password);
    await page.click('#login-button');
    await page.context().storageState({ path: 'playwright/.auth/user.json'});

});