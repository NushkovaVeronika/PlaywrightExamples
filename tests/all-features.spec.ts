import { test, expect } from '@playwright/test';
// expect - used for assertion
// await -  wait for the page to fully load before we continue 


// 1. go to the page playwright.dev
// 2. wait for the page to load
// 3. check if the page contains the word 'Playwright'

test('Should be able to load the homepage and see "Playwright"" ', async ({ page }) => { // defines a test with a name 'basic test'
    await page.goto('https://playwright.dev'); // this opens the url page
    await expect(page).toHaveTitle(/Playwright/); // assert, check if the page has a word 'Playwright'
});

// 1. go to the page playwright.dev
// 2. locate the element <header>
// 3. check if its visible on the page ( if header does not exists, the test will fail)

test('Header should be visible on the homepage', async ({ page }) => {
    await page.goto('https://playwright.dev');

    const header = page.locator('header');
    await expect(header).toBeVisible();
})

// 1. go to the page playwright.dev
// 2. locate and click on the button 'Get Started'
// 3. check if the URL is changed 

test('Should be able to click on the Get started button', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await page.click('text=Get started');
    await expect(page).toHaveURL(/\/docs\/intro/);
});

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. click on create an account button
// 3. check if the URL changed

test('Should be able to click on the Create an account button', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text=Create an Account');
    await expect(page).toHaveURL(/\account\/create/);
});

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. click on create an account button
// 3. fill all the empty fields (first name, last name, email, etc...)
// 4. click on the button 'create an account' to register
// 5. check if the account is succesfully created 

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

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. hover over the "women" button
// 3. hover over the "bottoms" button
// 4. click on the "shorts" button
// 5. check if the URL is changed
// 6. check if there is a "Shorts" word somewhere on the page 

test('Should be able to navigate to women/bottoms/shorts section', async ({ page }) => {
    await page.goto('https://magento.softwaretestingboard.com/');

    await page.hover('a#ui-id-4');
    await page.waitForSelector('a:has-text("Bottoms")', { state: 'visible' }); // without this the test fails because we need to wait before bottoms is shown from the dropdown menu
    await page.hover('a:has-text("Bottoms")');

    await page.waitForSelector('a:has-text("Shorts")', { state: 'visible' });
    await page.click('a:has-text("Shorts")');

    await expect(page).toHaveURL(/shorts/);
    await expect(page.locator('h1')).toHaveText('Shorts');
});

// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the add/remove elements link
// 3. check if the url is changed (contains add_remove_elements)
// 4. click on the add element button 2 times
// 5. click on the delete button once

test('Should be able to add and remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Add/Remove Elements")');
    await expect(page).toHaveURL(/add_remove_elements/);
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Delete")');

});

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

// checkboxes test
// 1. go to the page https://the-internet.herokuapp.com/
// 2. select the first checkbox
// 3. uncheck the second checkbox
// 4. check if the first checkbox is selected or not

test.only('Should be able to select/unselect checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Checkboxes")');

    const checkbox1 = page.locator('input[type="checkbox"]').nth(0); // 1st checkbox with index 0
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1) // 2nd checkbox with index 1

    await checkbox1.setChecked(true);
    await(checkbox2).setChecked(true);

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();

    // // if (!(await checkbox1.isChecked())) {
    // //     await checkbox1.click();
    // // }
    // // await expect(checkbox1).toBeChecked();

    // if (!(await checkbox2.isChecked())) {
    //     await checkbox2.click();
    // }
    // await expect(checkbox2).toBeChecked();

});

// check if links named "Form Authentication", "Checkboxes" & "Dropdown" exist on the main page
// 1. go to the page https://the-internet.herokuapp.com/
// 2. check if those links exist

test('Should be visible: main page links', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page.locator('a', { hasText: 'Form Authentication' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Checkboxes' })).toBeVisible();
    await expect(page.locator('a', { hasText: 'Dropdown' })).toBeVisible();

});


// dropdown 
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the Dropdown link
// 3. select option 2

test('Should be able to select option from dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dropdown")');
    await page.selectOption('#dropdown', '2')
});

// JavaScript alerts
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the JavaScript Alerts link
// 3. Click on the "Click for JS Alert" button
// 3. check to see if there is a message "I am a JS Alert" on the screen

test('Should trigger JS alert and confirm it', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("JavaScript Alerts")');
    await page.click('button:has-text("Click for JS Alert")');
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

// Dynamic Controls
// 1. go to the page https://the-internet.herokuapp.com/
// 2. click on the Dynamic Controls link
// 3. click on the button Remove
// 4. expect to see a message "It's gone!" after removing the checbox
// 5. Click on the Add button
// 6. expect to see a message "It's back!" after adding it again

test('Should trigger add/remove checkbox in Dynamic Controls', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Dynamic Controls")');
    await page.click('button:has-text("Remove")');
    await expect(page.locator("#message")).toHaveText("It's gone!");
    await page.click('button:has-text("Add")');
    await expect(page.locator("#message")).toHaveText("It's back!");
});

// File Upload
// 1. go to the page https://the-internet.herokuapp.com/
// 2, click on the File Upload link
// 3. check if the url is -> https://the-internet.herokuapp.com/upload
// 4. click on the Choose file button & upload a file
// 5. click on the upload button
// 6. check if there is a success message #h3 "File Uploaded"

test('Should be able to upload a file', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/'); 
    await page.click('a:has-text("File Upload")');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/upload');
    
    const filePath = 'tests/testfile.txt'
    await page.setInputFiles('input#file-upload', filePath);
    await page.click('input#file-submit')
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});