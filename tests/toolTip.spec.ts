import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Modal & Overlays').click()
  await page.getByText('Tooltip').click()
});


test('Tool tip , using child element ', async ({ page }) => {

const coloredToolTip = page.locator('nb-card', { hasText: 'Colored Tooltips' });

const defaultButton = coloredToolTip.getByText("DEFAULT")

await defaultButton.hover()

const toolTip =  await page.locator('nb-tooltip').textContent()

await console.log(toolTip)

await expect(toolTip).toEqual("This is a tooltip")


 
})