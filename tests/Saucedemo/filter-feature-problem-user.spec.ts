import { test, expect} from '@playwright/test'

test("User should be able to filter products by price - low to high", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', 'problem_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('#header_container > div.header_secondary_container > div > span > select')).toBeVisible();
    await page.locator('#header_container > div.header_secondary_container > div > span > select').click();
    await page.selectOption('[data-test="product-sort-container"]', 'lohi');

    const inventory_prices = await page.$$eval('.inventory_item_price', items => items.map(item => item.textContent!))
    const prices = inventory_prices.map(price => parseFloat(price.replace('$', '')));

    // Each price should be less than or equal to the following price
    for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeLessThanOrEqual(prices[i+1])
    }
    
})

