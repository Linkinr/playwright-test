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
        const usingTheGridElementInput = page.locator('nb-card', {hasText:'Using the Grid'}).getByRole('textbox', {name: "Email"})
        await usingTheGridElementInput.fill('test@test.com')
        await usingTheGridElementInput.clear()
        await usingTheGridElementInput.pressSequentially('test@test.com', {delay: 500})
        
        //generic assertion
        const inputValue = await usingTheGridElementInput.inputValue()
        expect(inputValue).toEqual('test@test.com')

        //locatot assertion
        await expect(usingTheGridElementInput).toHaveValue('test@test.com')
    })

    test('radio buttons', async({page}) => {
        const usingTheGridForm = page.locator('nb-card', {hasText:'Using the Grid'})

        await usingTheGridForm.getByLabel('Option 1').check({force: true})
        const radioStatus = await usingTheGridForm.getByLabel('Option 1').isChecked()
        expect(radioStatus).toBeTruthy()
        await expect(usingTheGridForm.getByRole('radio', {name: "Option 1"})).toBeChecked()

        await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true})
        expect(await usingTheGridForm.getByLabel('Option 1').isChecked()).toBeFalsy()
        expect(await usingTheGridForm.getByLabel('Option 2').isChecked()).toBeTruthy()
    })

    test('List and dropdowns', async({page}) => {
        const dropDownMenu = page.locator('ngx-header nb-select')
        await dropDownMenu.click()

        const optionList = page.getByRole('list').locator('nb-option')
        await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
        await optionList.filter({hasText: "Cosmic"}).click()
        const header = page.locator('nb-layout-header')
        await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

        const colors = {
            "Light": 'rgb(255, 255, 255)',
            "Dark": 'rgb(34, 43, 69)',
            "Cosmic": 'rgb(50, 50, 89)',
            "Corporate": 'rgb(255, 255, 255)'
        }

        await dropDownMenu.click()
        for(const color in colors){
            await optionList.filter({hasText: color}).click()
            await expect(header).toHaveCSS('background-color', colors[color])
            if(color != "Corporate")
                await dropDownMenu.click()
        }
    })
})