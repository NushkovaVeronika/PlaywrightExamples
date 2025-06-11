import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Logout' button
// 10. Verify that user is navigated to login page

test('User should successfully logout', async({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a:has-text("Signup / Login")');
    await expect(page.locator('h2', {hasText: 'Login to your account'})).toBeVisible();
    
    await page.fill('input[data-qa="login-email"]', 'veronika@hotmail.com');
    await page.fill('input[data-qa="login-password"]', 'vnvn123');
    await page.click('button:has-text("Login")');
    await expect(page.getByText(/Logged in as/i)).toBeVisible();
    await page.click('a:has-text("Logout")');
    await expect(page).toHaveURL("https://automationexercise.com/login");


});