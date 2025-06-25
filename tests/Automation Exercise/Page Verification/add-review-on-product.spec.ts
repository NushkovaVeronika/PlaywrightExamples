import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Click on 'Products' button
// 4. Verify user is navigated to ALL PRODUCTS page successfully
// 5. Click on 'View Product' button
// 6. Verify 'Write Your Review' is visible
// 7. Enter name, email and review
// 8. Click 'Submit' button
// 9. Verify success message 'Thank you for your review.'

test("User should be able to add a review", async ({page}) => {
    await page.goto('https://automationexercise.com/');
    await page.click('a[href="/products"]');
    await expect(page.locator('h2:has-text("ALL PRODUCTS")')).toBeVisible();
    await page.click('a[href="/product_details/1"]');
    await expect(page.locator('a[href="#reviews"]')).toBeVisible();
    await page.fill('#name', 'Veronika');
    await page.fill('#email', 'veronika@hotmail.com');
    await page.fill('#review', 'randomrandom');
    await page.click('button:has-text("Submit")');
    await expect(page.locator('#review-section > div > div > span')).toBeVisible();
});