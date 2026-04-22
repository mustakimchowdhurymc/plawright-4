import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});


test('user child element ', async ({ page }) => {

  // get by child locaor variation
const radio = page.locator('nb-card nb-radio :text-is("Option 1")')

 await page.locator('nb-card nb-radio :text-is("Option 1")').click()

 await page.waitForTimeout(2000)

 await expect(radio).toBeChecked()


 await page.locator('nb-card nb-radio :text-is("Option 2")').click()

 await page.waitForTimeout(2000)

 await expect(radio).not.toBeChecked()


})

test('Using parent element to select locator', async ({ page }) => {
  await page.locator('nb-card', {hasText: "Basic form"}).getByPlaceholder("Email").fill("Mustakim@gmail.com")
  // select check me out text box

  await page.getByText("Check me out").click()

 await expect(page.getByText("Check me out")).toBeChecked()
});