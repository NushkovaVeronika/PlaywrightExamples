import { test, expect } from '@playwright/test'

// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Scroll to bottom of page
// 4. Verify 'RECOMMENDED ITEMS' are visible
// 5. Click on 'Add To Cart' on Recommended product
// 6. Click on 'View Cart' button
// 7. Verify that product is displayed in cart page

test("User should be able to add products to cart from recommended items", async ({page}) => {
    await page.goto('http://automationexercise.com');
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(page.locator('body > section:nth-child(3) > div > div > div.col-sm-9.padding-right > div.recommended_items > h2')).toBeVisible();
    await page.click('#recommended-item-carousel > div > div.item.active > div:nth-child(1) > div > div > div > a');
    await page.click('#cartModal > div > div > div.modal-body > p:nth-child(2) > a > u');
    await expect(page.locator('#cart_info')).toBeVisible();
}); 