import { test, expect } from '@playwright/test';

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Contact Us' button
// 5. Verify 'GET IN TOUCH' is visible
// 6. Enter name, email, subject and message
// 7. Upload file
// 8. Click 'Submit' button
// 9. Click OK button
// 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
// 11. Click 'Home' button and verify that landed to home page successfully

test('Should submit a Contact Us form', async({page}) => {
    await page.goto('https://automationexercise.com/');
    await expect(page.locator('body')).toBeVisible(); 
    await page.click('a:has-text("Contact us")');
    await expect(page.locator('h2', {hasText: 'GET IN TOUCH'})).toBeVisible();

    await page.fill('input[name="name"]', 'VN');
    await page.fill('input[name="email"]', 'vn@example.com');
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('textarea[name="message"]', 'This is a test message.');

    const filePath = './testfile.txt'
    await page.setInputFiles('input[name="upload_file"]', filePath);

    // await page.click('input[name="submit"]');

    await page.locator('input[data-qa="submit-button"]').click();

    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await expect(page.locator('div.status.alert-success')).toHaveText('Success! Your details have been submitted successfully.');

    await page.click('a:has-text("Home")');
    await expect(page).toHaveURL('https://www.automationexercise.com/');

});