import { test, expect } from '@playwright/test';

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