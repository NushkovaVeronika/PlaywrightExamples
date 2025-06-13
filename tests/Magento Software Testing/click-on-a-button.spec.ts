import { test, expect } from '@playwright/test';


test('Should be able to click on the Create an account button', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text=Create an Account');
    await expect(page).toHaveURL(/\account\/create/);
});




test('Should be able to click on the Get started button', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.click('text=Get started');
    await expect(page).toHaveURL(/\/docs\/intro/);
});