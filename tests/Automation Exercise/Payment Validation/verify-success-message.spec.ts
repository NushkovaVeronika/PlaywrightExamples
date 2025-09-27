import {expect, test} from '@playwright/test';

test("User should be able to see success message after making a payment", async({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Signup / Login")');
    await expect(page.locator('h2', {hasText: 'Login to your account'})).toBeVisible();
    
    await page.fill('input[data-qa="login-email"]', 'veronika@hotmail.com');
    await page.fill('input[data-qa="login-password"]', 'vnvn123');
    await page.click('button:has-text("Login")');
    await expect(page.getByText(/Logged in as/i)).toBeVisible();
    
    await page.locator("body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div").hover();
    await page.locator("body > section:nth-child(3) > div.container > div > div.col-sm-9.padding-right > div.features_items > div:nth-child(3) > div > div.single-products > div.product-overlay > div > a").click();
    await page.locator("#cartModal > div > div > div.modal-body > p:nth-child(2) > a > u").click();
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await page.click('a:has-text("Proceed To Checkout")');
    await expect(page).toHaveURL("https://automationexercise.com/checkout");
    await page.click('a:has-text("Place Order")');

    await expect(page).toHaveURL("https://automationexercise.com/payment");
    await page.fill('input[data-qa="name-on-card"]', 'veronika');
    await page.fill('input[data-qa="card-number"]', '5345464654');
    await page.fill('input[data-qa="cvc"]', '333');
    await page.fill('input[data-qa="expiry-month"]', '11');
    await page.fill('input[data-qa="expiry-year"]', '2026');
    await page.locator('#submit').click();
    await expect(page.locator("#form > div > div > div > h2 > b")).toBeVisible();
    
})