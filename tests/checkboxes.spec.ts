import { test, expect } from '@playwright/test';
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