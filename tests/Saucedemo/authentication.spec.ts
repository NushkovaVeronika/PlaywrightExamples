import { test , expect } from '@playwright/test';

test("User should be able to login successfully", async({page}) => {
    await page.goto('https://saucedemo.com/');

    await page.fill('input[name="user-name"]', 'standard_user');
    await page.fill('input[name="password"]', 'secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


    
});