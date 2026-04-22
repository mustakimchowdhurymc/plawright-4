import { test, expect } from '@playwright/test';





test.beforeEach('has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()
});

test('basic test', async ({ page }) => {
 
    const usingTheGrid = page.locator('nb-card', {hasText :"Using the Grid"})

    await usingTheGrid.getByPlaceholder('Email').fill("Mustakim@gmail.com")

    await expect(usingTheGrid.getByPlaceholder('Email')).toHaveValue('Mustakim@gmail.com')


try { 
  await expect(usingTheGrid.getByPlaceholder('Email')).toHaveValue('Mustajhkim@gmail.com')   
    
} catch (error) {
    console.error('Test failed ')
    throw error
}


});

test('Radio button', async ({ page }) => {
 
    const usingTheGrid = page.locator('nb-card', {hasText :"Using the Grid"})

    const radio = page
  .locator('nb-card', { hasText: 'Using the Grid' })
  .getByText("Option 1")


    await radio.click()

    // sign in button

    await usingTheGrid.getByRole('button', {name : "SIGN IN"}).click()



});



test('drop down', async ({ page }) => {
  const dropdown = page.getByRole('button', { name: 'Light' })
  await dropdown.click();

});





