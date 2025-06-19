import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Add products to cart
// 5. Click 'Cart' button
// 6. Verify that cart page is displayed
// 7. Click Proceed To Checkout
// 8. Click 'Register / Login' button
// 9. Fill all details in Signup and create account
// 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 11. Verify ' Logged in as username' at top
// 12.Click 'Cart' button
// 13. Click 'Proceed To Checkout' button
// 14. Verify Address Details and Review Your Order
// 15. Enter description in comment text area and click 'Place Order'
// 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 17. Click 'Pay and Confirm Order' button
// 18. Verify success message 'Your order has been placed successfully!'
// 19. Click 'Delete Account' button
// 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button

test("Should be able to register while checkout", async ({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();

    const product1 = page.locator('.product-image-wrapper').nth(0)
    const product2 = page.locator('.product-image-wrapper').nth(1)
    
    await product1.hover();
    await product1.locator('.overlay-content a:has-text("Add to cart")').click();
    await page.click('button:has-text("Continue Shopping")');
    await product2.hover();
    await product2.locator('.overlay-content a:has-text("Add to cart")').click();
    await page.click('a:has-text("View Cart")');
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.click('a:has-text("Proceed To Checkout")');
    await page.click('a:has-text("Register / Login")');


    const name = 'Lara'
    const email = `lara${Date.now()}@example.com`
    await page.fill('input[name="name"]', name);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.locator('button:has-text("Signup")').click();
    
    await page.check('input#id_gender2');
    await expect(page.locator('input#name')).toHaveValue(name);
    await expect(page.locator('input#email')).toHaveValue(email);

    await page.fill('input#password', 'TestPassword123!');
    await page.selectOption('select#days', '10');
    await page.selectOption('select#months', '6');
    await page.selectOption('select#years', '2001');

    await page.check('input#newsletter');
    await page.check('input#optin');

    await page.fill('input#first_name', 'Lara');
    await page.fill('input#last_name', 'Doe');
    await page.fill('input#company', 'Company');
    await page.fill('input#address1', '123 MMM');
    await page.fill('input#address2', 'Random');
    await page.selectOption('select#country', 'India');
    await page.fill('input#state', 'Random');
    await page.fill('input#city', 'Random');
    await page.fill('input#zipcode', '535345');
    await page.fill('input#mobile_number', '3535353454');

    await page.click('button:has-text("Create Account")');
    await expect(page.locator('text=Account Created!')).toBeVisible();
    
    await page.click('a:has-text("Continue")');
    await expect(page.locator(`text = Logged in as ${name}`)).toBeVisible();
    await page.click('a:has-text("Cart")');
    await page.click('a:has-text("Proceed to checkout")');
    await expect(page.locator(`text = Address Details`)).toBeVisible();
    await expect(page.locator(`text = Review Your Order`)).toBeVisible();
    await page.fill('textarea[name="message"]', "Random message");
    await page.locator('a[href="/payment"]').click();

    const name_on_card = 'Lara Doe';
    const card_number = '554675765634';
    const cvc = '456';
    const expiration_month = '11';
    const expiration_year = '2029';

    await page.fill('input[name="name_on_card"]', name_on_card);
    await page.fill('input[name="card_number"]', card_number);
    await page.fill('input[name="cvc"]', cvc);
    await page.fill('input[name="expiry_month"]', expiration_month);
    await page.fill('input[name="expiry_year"]', expiration_year);
 
    await page.click('button:has-text("Pay and Confirm Order")');
    await expect(page.locator('div.alert-success')).toContainText(/You have been successfully subscribed!/i, { timeout: 5000 });
    await page.locator('a[href="/delete_account"]').click();
    await expect(page.locator('b')).toHaveText(/Account Deleted/i);
    await page.locator('a:has-text("Continue")').click();

});