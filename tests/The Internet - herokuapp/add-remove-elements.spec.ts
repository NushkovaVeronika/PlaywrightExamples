import { test, expect } from '@playwright/test';

test('Should be able to add and remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Add/Remove Elements")');
    await expect(page).toHaveURL(/add_remove_elements/);
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Delete")');

});