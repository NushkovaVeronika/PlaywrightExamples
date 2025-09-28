import { test, expect} from '@playwright/test'



test("User should be able to filter products - A-Z", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill('input[data-test="username"]', 'problem_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('#header_container > div.header_secondary_container > div > span > select')).toBeVisible();
    await page.locator('#header_container > div.header_secondary_container > div > span > select').click();
    await page.selectOption('[data-test="product-sort-container"]', 'az');

    const product_Names = await page.$$eval('.inventory_item_name', items => items.map(item => item.textContent?.trim() || ""));
    const sorted_Names = [...product_Names].sort((a,b) => a.localeCompare(b));
    
    expect(product_Names).toEqual(sorted_Names);
    
    
})
