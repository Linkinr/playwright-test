import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/formLayoutPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')

})

test('navigate to Form page', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formsLayoutPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toasterPage()
    await navigateTo.tooltipPage()
})

test('parametrized methods', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutPage = new FormLayoutPage(page)

    await navigateTo.formsLayoutPage()
    await onFormLayoutPage.submitUsingGridFormWithCredentialsAndSelectOptions('test@test.com', 'password', 'Option 1')
    await onFormLayoutPage.submitInlineForm('test name', 'test@test.com', true)
})