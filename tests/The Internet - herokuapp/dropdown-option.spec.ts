import { test, expect } from '@playwright/test';

test('Should be able to select option from dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dropdown")');
    await page.selectOption('#dropdown', '2')
});