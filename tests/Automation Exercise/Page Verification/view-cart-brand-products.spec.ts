import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify that Brands are visible on left side bar
// 5. Click on any brand name
// 6. Verify that user is navigated to brand page and brand products are displayed
// 7. On left side bar, click on any other brand link
// 8. Verify that user is navigated to that brand page and can see products


test("Should be able to view & cart brand products", async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await page.click('a[href="/products"]');
    await expect(page.locator(".left-sidebar")).toBeVisible();
    await page.click('a[href="/brand_products/Polo"]');
    await expect(page.locator("body > section > div > div.row > div.col-sm-9.padding-right > div > h2")).toBeVisible();
    await page.click('a[href="/brand_products/Babyhug"]');
    await expect(page.locator("body > section > div > div.row > div.col-sm-9.padding-right > div > h2")).toBeVisible();
});