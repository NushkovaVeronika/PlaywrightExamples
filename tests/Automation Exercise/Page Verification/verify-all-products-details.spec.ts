import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Products' button
// 5. Verify user is navigated to ALL PRODUCTS page successfully
// 6. The products list is visible
// 7. Click on 'View Product' of first product
// 8. User is landed to product detail page
// 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand

test("User should be able to see products and product details on the page", async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Products")');
    await expect(page.locator('.title.text-center')).toBeVisible();
    await expect(page.locator('.features_items')).toBeVisible();
    await page.click('a:has-text("View Product")');
    await expect(page).toHaveURL(/\/product_details\/\d+$/)
    await expect(page.locator('.product-information')).toBeVisible();
});