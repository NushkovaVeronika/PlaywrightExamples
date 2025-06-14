import { test, expect } from '@playwright/test';

test.use({storageState: 'auth.json'});

test("User should be able to see products on inventory page", async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('#inventory_container').first()).toBeVisible();
});