import { test, expect } from '@playwright/test';
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

test('Should be able to register', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('body')).toBeVisible();
    await page.click('a[href="/login"]');
    await expect(page.locator('text=New User Signup!')).toBeVisible();
    const name = 'Veronika';
    const email = `veronika${Date.now()}@example.com`;
    await page.fill('input[name="name"]', name);
    await page.fill('input[data-qa="signup-email"]', email);
    await page.click('button:has-text("Signup")');
    await expect(page.locator('text=Enter Account Information')).toBeVisible();
    await page.check('input#id_gender2');
    await expect(page.locator('input#name')).toHaveValue(name);
    await expect(page.locator('input#email')).toHaveValue(email);

    await page.fill('input#password', 'TestPassword123!');
    await page.selectOption('select#days', '10');
    await page.selectOption('select#months', '6');
    await page.selectOption('select#years', '2001');

    await page.check('input#newsletter');
    await page.check('input#optin');

    await page.fill('input#first_name', 'Veronika');
    await page.fill('input#last_name', 'Nushkova');
    await page.fill('input#company', 'Company');
    await page.fill('input#address1', '123 MMM');
    await page.fill('input#address2', 'Random');
    await page.selectOption('select#country', 'India');
    await page.fill('input#state', 'Random');
    await page.fill('input#city', 'Random');
    await page.fill('input#zipcode', '535345');
    await page.fill('input#mobile_number', '3535353454');

    await page.click('button:has-text("Create Account")');
    await expect(page.locator('text=Account Created!')).toBeVisible();
    await page.click('a:has-text("Continue")');
    await expect(page.locator(`text=Logged in as ${name}`)).toBeVisible();
    await page.click('a:has-text("Delete Account")');
    await expect(page.locator('text=Account Deleted!')).toBeVisible();


});