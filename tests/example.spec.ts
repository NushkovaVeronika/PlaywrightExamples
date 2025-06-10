import { test, expect } from '@playwright/test'; 
// expect - used for assertion if something is true or not
// await -  wait for the page to fully load before we continue 


// 1. go to the page playwright.dev
// 2. wait for the page to load
// 3. check if the page contains the word 'Playwright'

test('basic test', async ({ page }) => { // defines a test with a name 'basic test'
  await page.goto('https://playwright.dev'); // this opens the url page
  await expect(page).toHaveTitle(/Playwright/); // assert, check if the page has a word 'Playwright'
});

// 1. go to the page playwright.dev
// 2. locate the element <header>
// 3. check if its visible on the page ( if header does not exists, the test will fail)

test.only('Header is visible on the homepage', async({page}) => {
    await page.goto('https://playwright.dev'); 
    
    const header = page.locator('header');
    await expect(header).toBeVisible();
})

// 1. go to the page playwright.dev
// 2. locate and click on the button 'Get Started'
// 3. check if the URL is changed 

test.only('Click on the Get started button', async({page}) => {
    await page.goto('https://playwright.dev');
    await page.click('text=Get started');
    await expect(page).toHaveURL(/\/docs\/intro/);
});

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. click on create an account button
// 3. check if the URL changed

test.only('Click on the Create an account button', async({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');
    await page.click('text=Create an Account');
    await expect(page).toHaveURL(/\account\/create/);
});

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. click on create an account button
// 3. fill all the empty fields (first name, last name, email, etc...)
// 4. click on the button 'create an account' to register
// 5. check if the account is succesfully created 

test.only('Create an account', async({page}) => {
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
});

// 1. go to the page "https://magento.softwaretestingboard.com/"
// 2. hover over the "women" button
// 3. hover over the "bottoms" button
// 4. click on the "shorts" button
// 5. check if the URL is changed
// 6. check if there is a "Shorts" word somewhere on the page 

test.only('Go to the women/bottoms/shorts section', async({page}) => {
    await page.goto('https://magento.softwaretestingboard.com/');

    await page.hover('a#ui-id-4');
    await page.waitForSelector('a:has-text("Bottoms")', {state:'visible'}); // without this the test fails because we need to wait before bottoms is shown from the dropdown menu
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

test.only('Add/Remove elements', async({page}) => {
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

test.only('Form authentication - invalid login', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Form Authentication")');
    await page.fill('input[name="username"]', 'Veronika');
    await page.fill('input[name="password"]', 'test123');
    await page.click('button:has-text("Login")');

    const errorMessage = page.locator('#flash') // #flash is the CSS selector when there is an error 
    await expect(errorMessage).toContainText('Your username is invalid!');

});
