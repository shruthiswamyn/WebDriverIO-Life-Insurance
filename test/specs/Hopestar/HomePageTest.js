import LoginPage from "../../pageobjects/LoginPage.js"
import HomePage from "../../pageobjects/HomePage.js"

describe('Home Page',()=>{
    it('Search for client based on client id', async()=>{

        await LoginPage.provideUrl()
        
        await LoginPage.login("555","666")
        await browser.pause(2000)
        
       // await HomePage.clickOnClientModule()
        //await browser.pause(2000)

        await HomePage.searchClient("1511986023")
        
        await browser.pause(6000)
    })
})