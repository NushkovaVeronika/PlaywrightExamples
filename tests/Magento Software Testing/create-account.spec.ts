import { test, expect } from '@playwright/test';


test('Should create a new account successfully', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text=Create an Account');
    await expect(page).toHaveURL(/\account\/create/);

    await page.fill('input[name="firstname"]', 'Veronika');
    await page.fill('input[name="lastname"]', "Nushkova");

    const email = `veronika${Date.now()}@example.com`;
    await page.fill('input[name="email"]', email);

    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.fill('input[name="password_confirmation"]', 'TestPassword123!');

    await page.click('button[title="Create an Account"]');
    await expect(page.locator(".message.success")).toHaveText("Thank you for registering with Main Website Store.")

});