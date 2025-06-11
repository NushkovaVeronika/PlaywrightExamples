import { test, expect } from '@playwright/test';
// check if links named "Form Authentication", "Checkboxes" & "Dropdown" exist on the main page
// 1. go to the page https://the-internet.herokuapp.com/
// 2. check if those links exist

test('Should be visible: main page links', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator('a', { hasText: 'Form Authentication' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Checkboxes' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Dropdown' })).toBeVisible();

});