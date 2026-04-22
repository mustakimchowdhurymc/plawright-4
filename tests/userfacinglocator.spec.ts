import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});


test('user facing locators ', async ({ page }) => {

  // get by role

  await page.getByRole('textbox', { name: "Email" }).first().fill('Mustakim@gmail.com');
  // assertion
  await expect(page.getByRole('textbox', { name: "Email" }).first()).toHaveValue('Mustakim@gmail.com');

  await page.getByRole('textbox', {name:'Password'}).first().fill("Passw0rd")

  //assertion

 await expect(page.getByRole('textbox', { name: "Password" }).first()).toHaveValue('Passw0rd');
  
  // get by role button

  await page.getByRole('button', { name: "SIGN IN" }).first().click()

// get by title


await  page.getByTitle('Datepicker').click()

await expect(page.getByText('Common Datepicker')).toBeVisible();


})