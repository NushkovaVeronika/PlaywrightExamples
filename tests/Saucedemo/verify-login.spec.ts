import { test, expect} from '@playwright/test'

//  User should successfully login

test("User should be able to login on Saucedemo", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})