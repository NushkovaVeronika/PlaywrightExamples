# Test info

- Name: User should be able to filter products by price - low to high
- Location: C:\Users\Veronika\Desktop\playwright-examples\tests\Saucedemo\filter-feature-problem-user.spec.ts:5:5

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 9.99
Received:    29.99
    at C:\Users\Veronika\Desktop\playwright-examples\tests\Saucedemo\filter-feature-problem-user.spec.ts:20:27
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | import { test, expect} from '@playwright/test'
   2 |
   3 |
   4 |
   5 | test("User should be able to filter products by price - low to high", async ({page}) => {
   6 |     await page.goto("https://www.saucedemo.com/");
   7 |     await page.fill('input[data-test="username"]', 'problem_user');
   8 |     await page.fill('input[data-test="password"]', 'secret_sauce');
   9 |     await page.locator('#login-button').click();
  10 |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  11 |     await expect(page.locator('#header_container > div.header_secondary_container > div > span > select')).toBeVisible();
  12 |     await page.locator('#header_container > div.header_secondary_container > div > span > select').click();
  13 |     await page.selectOption('[data-test="product-sort-container"]', 'lohi');
  14 |
  15 |     const inventory_prices = await page.$$eval('.inventory_item_price', items => items.map(item => item.textContent!))
  16 |     const prices = inventory_prices.map(price => parseFloat(price.replace('$', '')));
  17 |
  18 |     // Each price should be less than or equal to the following price
  19 |     for (let i = 0; i < prices.length - 1; i++) {
> 20 |         expect(prices[i]).toBeLessThanOrEqual(prices[i+1])
     |                           ^ Error: expect(received).toBeLessThanOrEqual(expected)
  21 |     }
  22 |     
  23 | })
  24 |
  25 |
```