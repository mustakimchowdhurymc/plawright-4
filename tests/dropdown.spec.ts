import { test, expect } from '@playwright/test';



test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});


test('drop down', async ({ page }) => {
const dropDown = page.locator('ngx-header nb-select');
const optionList = page.locator('nb-option-list nb-option');
const expectedOptions = ['Light', 'Dark', 'Cosmic', 'Corporate'];

await dropDown.click();

const options = await optionList.allTextContents();
for (const option of options) {
  console.log(option.trim());
}

await expect(optionList).toHaveText(expectedOptions);

await optionList.getByText(expectedOptions[1]).click()


for (let i = 0; i < expectedOptions.length; i++) {
  await dropDown.click();
  
  await optionList.getByText(expectedOptions[i]).click()
}


await dropDown.click()

await optionList.getByText("Dark").click()

const colors = {Dark:"rgb(34, 43, 69)"};

await optionList.getByText(expectedOptions[1]).click()

const header = page.locator('nb-layout-header')

await expect(header).toHaveCSS('background-color', colors.Dark)


});