import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')

})

test('navigate to Form page', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formsLayoutPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toasterPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async ({ page }) => {
    const pm = new PageManager(page)
    await pm.navigateTo().formsLayoutPage()
    await pm.onFormLayoutPage().submitUsingGridFormWithCredentialsAndSelectOptions('test@test.com', 'password', 'Option 1')
    await pm.onFormLayoutPage().submitInlineForm('test name', 'test@test.com', true)
    await pm.navigateTo().datePickerPage()
    await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(3)
    await pm.onDatePickerPage().selectDatepickerWithRangeFromToday(5, 15)
})

