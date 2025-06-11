import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down to footer
// 5. Verify text 'SUBSCRIPTION'
// 6. Enter email address in input and click arrow button
// 7. Verify success message 'You have been successfully subscribed!' is visible

test("User should successfully subscribe" , async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('h2:has-text("Subscription")')).toBeVisible();
    await page.fill('#susbscribe_email', 'email@example.com');
    await page.click('#subscribe');
    await expect(page.locator('div.alert-success.alert')).toHaveText('You have been successfully subscribed!');

   
});