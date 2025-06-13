import { test, expect } from '@playwright/test';


test('Header should be visible on the homepage', async ({ page }) => {
    await page.goto('https://playwright.dev');

    const header = page.locator('header');
    await expect(header).toBeVisible();
})