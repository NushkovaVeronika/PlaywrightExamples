import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Enter product name in search input and click search button
// 6. Verify 'SEARCHED PRODUCTS' is visible
// 7. Verify all the products related to search are visible
// 8. Add those products to cart
// 9. Click 'Cart' button and verify that products are visible in cart
// 10. Click 'Signup / Login' button and submit login details
// 11. Again, go to Cart page
// 12. Verify that those products are visible in cart after login as well

test("Should be able to search products and verify cart after login", async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await page.click('a[href="/products"]');
    await expect(page.locator("body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div > h2")).toBeVisible();
    await page.fill("#search_product", "dress");
    await page.locator('#submit_search').click();
    await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();
    await expect(page.locator(".features_items")).toBeVisible();
    await expect(page.locator('.features_items .product-image-wrapper').first()).toBeVisible();
    await page.locator('.features_items .product-image-wrapper').first().hover();
    await page.click('a:has-text("Add to cart")');
    await page.click('button:has-text("Continue Shopping")');
    await page.click('a[href="/view_cart"]');
    await expect(page.locator('#product-3 > td.cart_product')).toBeVisible();
    await page.click('a[href="/login"]');
    await page.fill('input[data-qa="login-email"]', 'veronika@hotmail.com');
    await page.fill('input[data-qa="login-password"]', 'vnvn123');
    await page.click('button:has-text("Login")');
    await page.click('a[href="/view_cart"]');
    await expect(page.locator('#product-3 > td.cart_product')).toBeVisible();



    
});