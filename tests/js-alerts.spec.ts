import { test, expect } from '@playwright/test';
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
