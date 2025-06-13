import { test, expect } from '@playwright/test';


test('Should trigger JS alert and confirm it', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("JavaScript Alerts")');
    await page.click('button:has-text("Click for JS Alert")');
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});
