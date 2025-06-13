import { test, expect } from '@playwright/test';


test('Should be able to upload a file', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/'); 
    await page.click('a:has-text("File Upload")');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/upload');
    
    const filePath = 'tests/testfile.txt'
    await page.setInputFiles('input#file-upload', filePath);
    await page.click('input#file-submit')
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
});