import { test , expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Scroll down page to bottom
// 5. Verify 'SUBSCRIPTION' is visible
// 6. Click on arrow at bottom right side to move upward
// 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen

test("User should be able to scroll up using 'Arrow' button and Scroll Down functionality", async ({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('h2:has-text("Subscription")')).toBeVisible();
    await page.click('#scrollUp');
    await expect(page.locator('h2:has-text("Full-Fledged practice website for Automation Engineers")').first()).toBeVisible();

});