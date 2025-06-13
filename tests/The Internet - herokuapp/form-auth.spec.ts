import { test, expect } from '@playwright/test';


test('Should be visible: main page links', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator('a', { hasText: 'Form Authentication' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Checkboxes' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Dropdown' })).toBeVisible();

});