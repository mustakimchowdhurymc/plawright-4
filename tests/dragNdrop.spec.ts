import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('google_vignette');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});

test('Using parent element to select locator', async ({ page }) => {
  await page.locator('nb-card', {hasText: "Basic form"}).getByPlaceholder("Email").fill("Mustakim@gmail.com")
  // select check me out text box

  await page.getByText("Check me out").click()

 await expect(page.getByText("Check me out")).toBeChecked()
});