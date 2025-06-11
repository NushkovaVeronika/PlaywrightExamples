import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible

test('Should not allow registration with an existing email', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a[href="/login"]');
    await expect(page.locator('text=New User Signup!')).toBeVisible();
    const name = 'Veronika';
    const email = `veronika@hotmail.com`;
    await page.fill('input[name="name"]', name);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button:has-text("Signup")');
    await expect(page.locator('p', {hasText: 'Email Address already exist!'})).toBeVisible();
});