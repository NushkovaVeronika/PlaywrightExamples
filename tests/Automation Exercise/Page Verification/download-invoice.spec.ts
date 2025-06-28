import {test , expect} from '@playwright/test'
import { download } from 'geckodriver';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Login
// 10. Verify ' Logged in as username' at top
// 11.Click 'Cart' button
// 12. Click 'Proceed To Checkout' button
// 13. Verify Address Details and Review Your Order
// 14. Enter description in comment text area and click 'Place Order'
// 15. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 16. Click 'Pay and Confirm Order' button
// 17. Click 'Download Invoice' button and verify invoice is downloaded successfully.
// 18. Click 'Continue' button


test("User should be able to download invoice after purchase", async ({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();

    const firstProduct = page.locator('.product-image-wrapper').nth(0);
    await firstProduct.hover();
    await firstProduct.locator('.overlay-content a:has-text("Add to cart")').click();
    await page.click('button:has-text("Continue Shopping")');
    await page.click('a[href="/view_cart"]');

    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.click('a:has-text("Proceed To Checkout")');
    await page.locator('#checkoutModal > div > div > div.modal-body > p:nth-child(2) > a').click();

    await page.fill('input[data-qa="login-email"]', 'veronika@hotmail.com');
    await page.fill('input[data-qa="login-password"]', 'vnvn123');
    await page.click('button:has-text("Login")');
    await expect(page.locator('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > i')).toBeVisible();
    await page.click('a[href="/view_cart"]');
    await page.click('a:has-text("Proceed To Checkout")');
    await expect(page.locator('#cart_items > div > div:nth-child(2) > h2')).toBeVisible();
    await expect(page.locator('#cart_items > div > div:nth-child(4) > h2')).toBeVisible();

    await page.locator('#ordermsg > textarea').fill('random');
    await page.click('a[href="/payment"]');

    await page.fill('input[name="name_on_card"]', 'Random Name');
    await page.fill('input[data-qa="card-number"]', '6456848345345');
    await page.fill('input[data-qa="cvc"]', '333');
    await page.fill('input[data-qa="expiry-month"]', '3');
    await page.fill('input[data-qa="expiry-year"]', '2028');

    await page.click('button:has-text("Pay and Confirm Order")'); 
    await page.click('a:has-text("Download Invoice")');
    await page.click('a:has-text("Continue")');
});