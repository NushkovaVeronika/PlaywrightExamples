import {test, expect} from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click 'X' button corresponding to particular product
// 8. Verify that product is removed from the cart

test ("Should be able to remove products from cart", async ({page}) => {
    await page.goto('https://www.automationexercise.com/');
    await expect(page.locator('body')).toBeVisible();

    const product1 = page.locator('.product-image-wrapper').nth(0);
    await product1.hover();
    await page.click('a:has-text("Add to cart")');
    await page.click('button:has-text("Continue Shopping")');
    await page.click('a[href="/view_cart"]');

    await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');
    await page.click('.cart_quantity_delete');
    await expect(page.locator('#empty_cart > p > b')).toBeVisible();
});