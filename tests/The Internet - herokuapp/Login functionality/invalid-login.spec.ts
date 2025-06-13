import { test, expect } from '@playwright/test';


test('Should trigger error on invalid login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Form Authentication")');
    await page.fill('input[name="username"]', 'Veronika');
    await page.fill('input[name="password"]', 'test123');
    await page.click('button:has-text("Login")');

    const errorMessage = page.locator('#flash') // #flash is the CSS selector when there is an error 
    await expect(errorMessage).toContainText('Your username is invalid!');

});