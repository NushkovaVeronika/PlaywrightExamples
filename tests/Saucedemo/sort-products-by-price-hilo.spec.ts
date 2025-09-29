import { test, expect} from '@playwright/test'

test("User should be able to filter products by price - high to low", async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('input[data-test="username"]', 'problem_user');;
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('.product_sort_container')).toBeVisible();
    await page.locator('#header_container > div.header_secondary_container > div > span > select').click();
    await page.selectOption('.product_sort_container', 'hilo');

    const inventory_prices = await page.$$eval('.inventory_item_price', items => items.map(item => item.textContent!))
    const prices = inventory_prices.map(price => parseFloat(price.replace('$', '')));

    for(let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).toBeGreaterThanOrEqual(prices[i+1])
    }


})