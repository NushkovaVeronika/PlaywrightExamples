import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Products' button
// 5. Hover over first product and click 'Add to cart'
// 6. Click 'Continue Shopping' button
// 7. Hover over second product and click 'Add to cart'
// 8. Click 'View Cart' button
// 9. Verify both products are added to Cart
// 10. Verify their prices, quantity and total price

test("User should be able to add products in cart" , async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Products")');

    const firstProduct = page.locator('.product-image-wrapper').nth(0);
    await firstProduct.hover();
    await firstProduct.locator('.overlay-content a:has-text("Add to cart")').click();
    await page.click('button:has-text("Continue Shopping")');

    const secondProduct = page.locator('.product-image-wrapper').nth(1)
    await secondProduct.hover();
    await secondProduct.locator('.overlay-content a:has-text("Add to cart")').click();
    await page.click('a:has-text("View Cart")');

    const cartItem = page.locator('tr[id^="product-"]');
    await expect(cartItem).toHaveCount(2);

    // await expect(page.locator('#product-1')).toBeVisible();
    // await expect(page.locator('#product-2')).toBeVisible();

    // go through each product in the cart and verify the price, quantity and total price 
    for (let i = 0; i < 2; i++) {
        const item = cartItem.nth(i);
        const price = await item.locator('.cart_price').textContent();
        const qtty = await item.locator('.cart_quantity').textContent();
        const total_price = await item.locator('.cart_total').textContent();

        // verify they are not empty
        expect(price).not.toBe('');
        expect(qtty).not.toBe('');
        expect(total_price).not.toBe('');

    }
});