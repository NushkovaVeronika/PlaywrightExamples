import { test, expect } from '@playwright/test'; 
// expect - used for assertion if something is true or not
// await -  wait for the page to fully load before we continue 

test('basic test', async ({ page }) => { // defines a test with a name 'basic test'
  await page.goto('https://playwright.dev'); // this opens the url page
  await expect(page).toHaveTitle(/Playwright/); // assert, check if the page has a word 'Playwright'
});
