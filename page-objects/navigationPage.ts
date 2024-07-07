import { Page } from "@playwright/test";

export class NavigationPage {
    readonly page: Page
    constructor(page: Page){
       this.page = page
    }

    async formsLayoutPage(){
        await this.selectGoupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async datePickerPage(){
        await this.selectGoupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage(){
        await this.selectGoupMenuItem('Tables & Data')
        await this.page.getByText('Smart Table').click()
    }

    async toasterPage(){
        await this.selectGoupMenuItem('Modal & Overlays')
        await this.page.getByText('Toastr').click()
    }

    async tooltipPage(){
        await this.selectGoupMenuItem('Modal & Overlays')
        await this.page.getByText('Tooltip').click()
    }

    private async selectGoupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expendState = await groupMenuItem.getAttribute('aria-expanded')
        if(expendState == "false") 
            await groupMenuItem.click()
    }
}