import { test, expect } from '@playwright/test';
// dropdown 
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the Dropdown link
// 3. select option 2

test('Should be able to select option from dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dropdown")');
    await page.selectOption('#dropdown', '2')
});