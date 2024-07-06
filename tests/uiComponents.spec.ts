import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200/')
})

test.describe('Form Layout page', () => {
    test.beforeEach( async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })
    
    test('input fields', async({page}) => {
        const usingTheGridElementInput =page.locator('nb-card', {hasText:'Using the Grid'}).getByRole('textbox', {name: "Email"})
        await usingTheGridElementInput.fill('test@test.com')
        await usingTheGridElementInput.clear()
        await usingTheGridElementInput.pressSequentially('test@test.com', {delay: 500})
        
        //generic assertion
        const inputValue = await usingTheGridElementInput.inputValue()
        expect(inputValue).toEqual('test@test.com')

        //locatot assertion
        await expect(usingTheGridElementInput).toHaveValue('test@test.com')
    })
})