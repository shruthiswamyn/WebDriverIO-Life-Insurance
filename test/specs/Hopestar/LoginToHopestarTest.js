import LoginPage from "../../pageobjects/LoginPage.js"

describe('Login Page',()=>{
    it('Login to application',async()=>{

        await LoginPage.provideUrl()
        
        await LoginPage.login("555","666")

        await browser.pause(2000)
    })
})