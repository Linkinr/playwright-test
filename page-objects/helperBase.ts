import { Page, expect } from "@playwright/test";

export class HelperBase {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(timeInSeconss: number){
        await this.page.waitForTimeout(timeInSeconss * 1000)
    }
}