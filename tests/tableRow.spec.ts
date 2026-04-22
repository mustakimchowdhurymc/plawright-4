import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Tables & Data').click()
  await page.getByText('Smart Table').click()
});


test('tapping on edit row1', async ({ page }) => {

  // get by child locaor variation
const tableRow1 = page.locator(
  '.ng2-smart-row.ng-star-inserted',
  { hasText: 'mdo@gmail.com' }
);

const edit1 = tableRow1.locator('.nb-edit');

await edit1.click();

// 

const tableRow10 = page.locator('.ng2-smart-row.ng-star-inserted',{ hasText: 'karen@yandex.ru' });

const tableRow10Delete = tableRow10.locator(".nb-trash")

await tableRow10Delete.click()
await page.waitForTimeout(3000); 

await page.on('dialog' , async dialog =>{
await dialog.dismiss();
})

await expect(tableRow10Delete).toBeVisible()

await tableRow10Delete.click()
await page.on('dialog' , async dialog =>{
await dialog.accept();

})

await page.waitForTimeout(3000);

await expect(tableRow10Delete).toBeVisible()


})





