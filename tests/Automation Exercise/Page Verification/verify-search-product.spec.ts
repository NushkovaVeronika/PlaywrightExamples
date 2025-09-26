import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. Enter product name in search input and click search button
// 7. Verify 'SEARCHED PRODUCTS' is visible
// 8. Verify all the products related to search are visible

test("User should be able to search products", async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Products")');
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await page.fill('input[name="search"]', 'Blue Top');
    await page.locator('#submit_search').click();
    await expect(page.locator('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div')).toBeVisible();
    
})