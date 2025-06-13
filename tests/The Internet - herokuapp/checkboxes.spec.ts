import { test, expect } from '@playwright/test';


test.only('Should be able to select/unselect checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.click('a:has-text("Checkboxes")');

    const checkbox1 = page.locator('input[type="checkbox"]').nth(0); 
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1) 

    await checkbox1.setChecked(true);
    await(checkbox2).setChecked(true);

    await expect(checkbox1).toBeChecked();
    await expect(checkbox2).toBeChecked();



});