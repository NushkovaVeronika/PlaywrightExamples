import { test, expect } from '@playwright/test';
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the add/remove elements link
// 3. check if the url is changed (contains add_remove_elements)
// 4. click on the add element button 2 times
// 5. click on the delete button once

test('Should be able to add and remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Add/Remove Elements")');
    await expect(page).toHaveURL(/add_remove_elements/);
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Delete")');

});