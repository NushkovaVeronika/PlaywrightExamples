# Test info

- Name: Should submit a Contact Us form
- Location: C:\Users\Veronika\Desktop\playwright-examples\tests\Automation Exercise\Contact Us Form\enter-info-upload-files-func.spec.ts:15:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('div.status.alert.alert-success')
Expected string: "Success! Your details have been submitted successfully."
Received string: ""
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('div.status.alert.alert-success')
    9 × locator resolved to <div class="status alert alert-success"></div>
      - unexpected value ""

    at C:\Users\Veronika\Desktop\playwright-examples\tests\Automation Exercise\Contact Us Form\enter-info-upload-files-func.spec.ts:36:66
```

# Page snapshot

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Contact Us" [level=2]:
  - text: Contact
  - strong: Us
- text: "Note: Below contact form is for testing purpose."
- heading "Get In Touch" [level=2]
- textbox "Name"
- textbox "Email"
- textbox "Subject"
- textbox "Your Message Here"
- button "Choose File"
- button "Submit"
- heading "Feedback For Us" [level=2]
- paragraph: We really appreciate your response to our website.
- paragraph:
  - text: Kindly share your feedback with us at
  - link "feedback@automationexercise.com":
    - /url: mailto:feedback@automationexercise.com
  - text: .
- paragraph: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
- paragraph: Thank you
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | // 1. Launch browser
   4 | // 2. Navigate to url 'http://automationexercise.com'
   5 | // 3. Verify that home page is visible successfully
   6 | // 4. Click on 'Contact Us' button
   7 | // 5. Verify 'GET IN TOUCH' is visible
   8 | // 6. Enter name, email, subject and message
   9 | // 7. Upload file
  10 | // 8. Click 'Submit' button
  11 | // 9. Click OK button
  12 | // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
  13 | // 11. Click 'Home' button and verify that landed to home page successfully
  14 |
  15 | test('Should submit a Contact Us form', async({page}) => {
  16 |     await page.goto('https://automationexercise.com/');
  17 |     await expect(page.locator('body')).toBeVisible(); 
  18 |     await page.click('a:has-text("Contact us")');
  19 |     await expect(page.locator('h2', {hasText: 'GET IN TOUCH'})).toBeVisible();
  20 |
  21 |     await page.fill('input[name="name"]', 'VN');
  22 |     await page.fill('input[name="email"]', 'vn@example.com');
  23 |     await page.fill('input[name="subject"]', 'Test Subject');
  24 |     await page.fill('textarea[name="message"]', 'This is a test message.');
  25 |
  26 |     const filePath = 'tests/Automation Exercise/Contact Us Form/testfile.txt'
  27 |     await page.setInputFiles('input[name="upload_file"]', filePath);
  28 |
  29 |     await page.locator('input[name="submit"]').click();
  30 |
  31 |     page.on('dialog', async dialog => {
  32 |         expect(dialog.message()).toContain('Success! Your details have been submitted successfully.');
  33 |     });
  34 |     await page.waitForTimeout(2000);
  35 |
> 36 |     await expect(page.locator('div.status.alert.alert-success')).toContainText('Success! Your details have been submitted successfully.');
     |                                                                  ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  37 |     
  38 |     await page.click('button:has-text("Home")');
  39 |     await expect(page).toHaveURL('https://www.automationexercise.com/');
  40 |
  41 | });
```