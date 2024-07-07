import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class FormLayoutPage extends HelperBase{
    
    constructor(page: Page){
        super(page)
    }
    /**
     * 
     * @param email 
     * @param password 
     * @param obtionText 
     */
    async submitUsingGridFormWithCredentialsAndSelectOptions(email: string, password: string, obtionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', {hasText:'Using the Grid'})
        await usingTheGridForm.getByRole('textbox', {name: "email"}).fill(email)
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password)
        await usingTheGridForm.getByRole('radio', {name: obtionText}).check({force: true})
        await usingTheGridForm.getByRole('button').click()
    }
    
    /**
     * 
     * @param name 
     * @param email 
     * @param rememberMe 
     */
    async submitInlineForm(name: string, email: string, rememberMe: boolean) {
        const usingInlineForm = this.page.locator('nb-card', {hasText:'Inline form'})
        await usingInlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name)
        await usingInlineForm.getByRole('textbox', {name: "Email"}).fill(email)
        if(rememberMe)
            await usingInlineForm.getByRole('checkbox').check({force: true})
        await usingInlineForm.getByRole('button').click()

    }
}