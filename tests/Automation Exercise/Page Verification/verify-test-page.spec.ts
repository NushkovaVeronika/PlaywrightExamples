import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Test Cases' button
// 5. Verify user is navigated to test cases page successfully

test('User should be navigated to test cases page sucessfully', async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Test Cases")');
    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
});