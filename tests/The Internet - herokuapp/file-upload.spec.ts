import { test, expect } from '@playwright/test';
// File Upload
// 1. go to the page https://the-internet.herokuapp.com/
// 2, click on the File Upload link
// 3. check if the url is -> https://the-internet.herokuapp.com/upload
// 4. click on the Choose file button & upload a file
// 5. click on the upload button
// 6. check if there is a success message #h3 "File Uploaded"

test('Should be able to upload a file', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/'); 
    await page.click('a:has-text("File Upload")');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/upload');
    
    const filePath = 'tests/testfile.txt'
    await page.setInputFiles('input#file-upload', filePath);
    await page.click('input#file-submit')
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});