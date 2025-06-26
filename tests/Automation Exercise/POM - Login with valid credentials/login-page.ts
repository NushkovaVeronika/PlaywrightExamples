// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible


// POM 

import { Page, expect } from '@playwright/test'

export class LoginPage {
    constructor(private page: Page) {}


    async goto() {
        await this.page.goto('https://automationexercise.com/')
    }

    async clickLoginButton() {
        await this.page.click('a:has-text("Signup / Login")')
    }

    async verifyVisibility() {
        await expect(this.page.locator('h2:has-text("Login to your account")')).toBeVisible();
    }

    async login(email: string, password: string) {
        await this.page.fill('input[data-qa="login-email"]', email);
        await this.page.fill('input[data-qa="login-password"]', password);
        await this.page.click('button:has-text("Login")');
  }
    async verifyLoggedInAs() {
        await expect(this.page.getByText(/Logged in as/i)).toBeVisible();
  }

}