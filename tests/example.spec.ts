import { test, expect } from '@playwright/test';












test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});


test('has title', async ({ page }) => {
// by tag name

page.locator('input')

//by id

page.locator('#inputEmail1')

// by class value

page.locator('.shape-rectangle')



//by attribute

page.locator('[placeholder="Email"]')

//by class value(Full)

page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

// combine different selector  tag+attribut

await page.locator('input[placeholder="Email"]').click()

// xpath

page.locator('//*[@id= "inputEmaill1"]')

// by partial text

page.locator(':text("Using")')

// by exact text match

page.locator(':text-is("Using the Grid")')

  
});


