import { test, expect } from '@playwright/test';
// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. click on create an account button
// 3. check if the URL changed

test('Should be able to click on the Create an account button', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text=Create an Account');
    await expect(page).toHaveURL(/\account\/create/);
});


// 1. go to the page playwright.dev
// 2. locate and click on the button 'Get Started'
// 3. check if the URL is changed 

test('Should be able to click on the Get started button', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.click('text=Get started');
    await expect(page).toHaveURL(/\/docs\/intro/);
});