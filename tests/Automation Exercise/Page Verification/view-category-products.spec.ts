import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that categories are visible on left side bar
// 4. Click on 'Women' category
// 5. Click on any category link under 'Women' category, for example: Dress
// 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
// 7. On left side bar, click on any sub-category link of 'Men' category
// 8. Verify that user is navigated to that category page

test("Should be able to view category products", async({page}) => {
    await page.goto('http://automationexercise.com/');
    await expect(page.locator('#accordian')).toBeVisible();
    await page.locator('#accordian > div:nth-child(1) > div.panel-heading > h4 > a').click();
    await page.locator('#Women > div > ul > li:nth-child(1) > a').click();
    await expect(page).toHaveURL('https://automationexercise.com/category_products/1');
    await page.locator('#accordian > div:nth-child(2) > div.panel-heading > h4 > a').click();
    await page.locator('#Men > div > ul > li:nth-child(2) > a').click();
    await expect(page).toHaveURL('https://automationexercise.com/category_products/6');
});