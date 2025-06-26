import { test, expect } from '@playwright/test';
import { LoginPage } from './login-page';




test('User should be able to login', async({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.clickLoginButton();
    await loginPage.verifyVisibility();
    await loginPage.login('veronika@hotmail.com', 'vnvn123');
    await loginPage.verifyLoggedInAs();
});