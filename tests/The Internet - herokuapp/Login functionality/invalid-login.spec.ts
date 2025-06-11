import { test, expect } from '@playwright/test';
// form authentication invalid login check
// 1. go to the page https://the-internet.herokuapp.com/
// 2. enter username and password
// 3. check if there is "Your username is invalid!" message somewhere on the screen

test('Should trigger error on invalid login', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Form Authentication")');
    await page.fill('input[name="username"]', 'Veronika');
    await page.fill('input[name="password"]', 'test123');
    await page.click('button:has-text("Login")');

    const errorMessage = page.locator('#flash') // #flash is the CSS selector when there is an error 
    await expect(errorMessage).toContainText('Your username is invalid!');

});