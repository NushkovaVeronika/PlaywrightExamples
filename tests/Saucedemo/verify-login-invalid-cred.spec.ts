import { test, expect} from '@playwright/test'

//  User should not be able to login - input = incorrect password

test("User should not be able to login on Saucedemo", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce123');
    await page.locator('#login-button').click();
    await expect(page.locator('#login_button_container > div > form > div.error-message-container.error > h3')).toBeVisible();
})