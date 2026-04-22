import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});


test('Locator', async ({ page }) => {
// by tag name

page.locator('input')

//by id

await page.locator('#inputEmail1').nth(0).click()

// by class value

page.locator('.shape-rectangle')



//by attribute

page.locator('[placeholder="Email"]')

//by class value(Full)

page.locator('[class="class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

// combine different selector  tag+attribut

await page.locator('input[placeholder="Email"]')
// xpath

page.locator('//*[@id= "inputEmaill1"]')

// by partial text

page.locator(':text("Using")')

// by exact text match

page.locator(':text-is("Using the Grid")')

  
});

test('interacting with elements', async ({ page }) => {
 
await page.getByRole('textbox',{name:"Email"}).first().click()

await page.getByRole('button',{name: "Sign in"}).first().click()

await page.getByLabel("Email").first().click()


await page.getByLabel("Email address").fill("mustakim@gmail.com")

await page.waitForTimeout(3000);





});

