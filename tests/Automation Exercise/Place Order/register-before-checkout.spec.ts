import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click 'Signup / Login' button
// 5. Fill all details in Signup and create account
// 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
// 7. Verify ' Logged in as username' at top
// 8. Add products to cart
// 9. Click 'Cart' button
// 10. Verify that cart page is displayed
// 11. Click Proceed To Checkout
// 12. Verify Address Details and Review Your Order
// 13. Enter description in comment text area and click 'Place Order'
// 14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
// 15. Click 'Pay and Confirm Order' button
// 16. Verify success message 'Your order has been placed successfully!'
// 17. Click 'Delete Account' button
// 18. Verify 'ACCOUNT DELETED!' and click 'Continue' button

test("Should be able to register before checkout", async({page}) => {
    await page.goto('http://automationexercise.com')
    await expect(page.locator('body')).toBeVisible()
    await page.click('a[href="/login"]')

    const name = 'VeronikaNushkova'
    const email = `lara${Date.now()}@example.com`

    await page.fill('input[name="name"]', name);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.locator('button:has-text("Signup")').click();

    await page.check('input#id_gender2');
    await page.fill('input[name="name"]', name);

    await page.fill('input[data-qa="password"]', 'test12345');
    await page.selectOption('select#days', '5');
    await page.selectOption('select#months', '3');
    await page.selectOption('select#years', '2006');

    await page.check('input#newsletter');
    await page.check('input#optin');

    await page.fill('input[data-qa="first_name"]', 'Veronika');
    await page.fill('input[data-qa="last_name"]', 'Nusshkova');
    await page.fill('input[data-qa="company"]', 'CompanyName');
    await page.fill('input[data-qa="address"]', 'FirstAddress');
    await page.fill('input[data-qa="address2"]', 'SecondAddress');
    await page.selectOption('select#country', 'India');
    await page.fill('input[data-qa="state"]', 'whatever');
    await page.fill('input[data-qa="city"]', 'whateveerrr');
    await page.fill('input[data-qa="zipcode"]', '4545');
    await page.fill('input[data-qa="mobile_number"]', '45443567543455');
    await page.click('button:has-text("Create Account")');

    await expect(page.locator('text=Account Created!')).toBeVisible();
    await page.click('a:has-text("Continue")');

    await expect(page.locator(`text = Logged in as ${name}`)).toBeVisible();

    const product1 = page.locator('.product-image-wrapper').nth(0);

    await product1.hover();
    await page.click('a:has-text("Add to cart")');
    await page.click('button:has-text("Continue Shopping")');
    await page.click('a[href="/view_cart"]');

    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await page.click('a:has-text("Proceed To Checkout")');
    await expect(page.locator(`text = Address Details`)).toBeVisible();
    await expect(page.locator(`text = Review Your Order`)).toBeVisible();
    await page.fill('textarea[name="message"]', 'randommessage');
    await page.click('a:has-text("Place order")');


    await page.fill('input[name="name_on_card"]', 'Random Name');
    await page.fill('input[data-qa="card-number"]', '6456848345345');
    await page.fill('input[data-qa="cvc"]', '333');
    await page.fill('input[data-qa="expiry-month"]', '3');
    await page.fill('input[data-qa="expiry-year"]', '2028');

    await page.click('button:has-text("Pay and Confirm Order")'); 
    await page.click('a[href="/delete_account"]');
    await expect(page.locator(`text = Account Deleted`)).toBeVisible();
    await page.click('a:has-text("Continue")');

});