import { test, expect} from '@playwright/test'



test("User should be able to proceed to checkout", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await expect(page.locator('#shopping_cart_container > a > span')).toBeVisible();
    await page.locator('#shopping_cart_container > a').click();
    await page.locator('#checkout').click();
    await page.fill('input[data-test="firstName"]', 'Veronika');
    await page.fill('input[data-test="lastName"]', 'Nushkova');
    await page.fill('input[data-test="postalCode"]', '1111');
    await page.locator('#continue').click();
    await expect(page.locator('#header_container > div.header_secondary_container > span')).toBeVisible();
    await page.locator('#finish').click();
    await expect(page.locator('#checkout_complete_container > h2')).toBeVisible();
    await page.locator('#back-to-products').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})