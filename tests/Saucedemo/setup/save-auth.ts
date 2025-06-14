import { chromium } from '@playwright/test';

(async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.waitForURL('**/inventory.html');

  await context.storageState({ path: 'auth.json' });
  await browser.close();
})();
