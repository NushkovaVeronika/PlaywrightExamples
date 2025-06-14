import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'View Product' for any product on home page
// 5. Verify product detail is opened
// 6. Increase quantity to 4
// 7. Click 'Add to cart' button
// 8. Click 'View Cart' button
// 9. Verify that product is displayed in cart page with exact quantity

test("Should be able to verify the number of products in the cart", async({page}) => {
    await page.goto('http://automationexercise.com')
    await expect(page.locator('body')).toBeVisible();
    await page.locator(('a[href="/product_details/1"]')).click();
    await expect(page.locator('.product-details')).toBeVisible();
    await page.locator('input[name="quantity"]').fill('4');
    await page.locator('button:has-text("Add to cart")').click();
    await expect(page.locator('.modal-content')).toBeVisible();
    await page.locator('a:has-text("View cart")').click();
    await expect(page.locator('td.cart_quantity')).toHaveText('4');
});