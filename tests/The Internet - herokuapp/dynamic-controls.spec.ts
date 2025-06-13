import { test, expect } from '@playwright/test';


test('Should trigger add/remove checkbox in Dynamic Controls', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dynamic Controls")');
    await page.click('button:has-text("Remove")');
    await expect(page.locator("#message")).toHaveText("It's gone!");
    await page.click('button:has-text("Add")');
    await expect(page.locator("#message")).toHaveText("It's back!");
});
