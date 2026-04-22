import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Tables & Data').click()
  await page.getByText('Smart Table').click()
});



test('Using parent element to select locator', async ({ page }) => {


    const row1 = page.locator('nb-card-body tr').filter({ hasText: 'mdo@gmail.com' })
   await page.locator('table').locator('tr', {hasText: 'mdo@gmail.com' }).locator('.nb-trash').click()
    await page.waitForTimeout(30000);

 
});