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