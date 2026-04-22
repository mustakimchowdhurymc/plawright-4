import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Datepicker').click()
});

test('datepicker', async ({ page }) => {

  await page.getByPlaceholder('Form Picker').click()

 const dateM = page.locator('[class="day-cell ng-star-inserted"]')

 await page.waitForTimeout(2000);

 await page.locator('[class="day-cell ng-star-inserted"]').getByText('8').nth(0).click()
 
  
await page.waitForTimeout(2000);

await page.getByPlaceholder('Range Picker').click()

// 

await page.locator('[class="range-cell day-cell ng-star-inserted"]').getByText("15").click()

});