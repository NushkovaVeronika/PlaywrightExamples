import { test, expect } from '@playwright/test';
// Dynamic Controls
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the Dynamic Controls link
// 3. click on the button Remove
// 4. expect to see a message "It's gone!" after removing the checbox
// 5. Click on the Add button
// 6. expect to see a message "It's back!" after adding it again

test('Should trigger add/remove checkbox in Dynamic Controls', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dynamic Controls")');
    await page.click('button:has-text("Remove")');
    await expect(page.locator("#message")).toHaveText("It's gone!");
    await page.click('button:has-text("Add")');
    await expect(page.locator("#message")).toHaveText("It's back!");
});
