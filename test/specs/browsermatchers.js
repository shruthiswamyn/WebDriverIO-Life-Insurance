describe('Sample with expect',()=>{
    it('4 methods',async()=>{

        await browser.url("https://www.google.com/")
        await expect(browser).toHaveUrl("https://www.google.com/")//Checks if browser is on a specific page.
    
        await expect(browser).toHaveUrlContaining("google")
    })    
        it("tohaveTitle method",async()=>{
            await browser.url("http://www.google.com/")
            // const title =  await browser.getTitle()
            // console.log(`title is..................... ${title}`)
            await expect(browser).toHaveTitle("Google")

            await browser.url("http://www.google.com/")
            await expect(browser).toHaveTitleContaining("Goo")
        })
    
})

//xit ---> do not execute that particular it block



    