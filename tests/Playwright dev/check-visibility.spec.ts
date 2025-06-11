import { test, expect } from '@playwright/test';
// 1. go to the page playwright.dev
// 2. locate the element <header>
// 3. check if its visible on the page ( if header does not exists, the test will fail)

test('Header should be visible on the homepage', async ({ page }) => {
    await page.goto('https://playwright.dev');

    const header = page.locator('header');
    await expect(header).toBeVisible();
})