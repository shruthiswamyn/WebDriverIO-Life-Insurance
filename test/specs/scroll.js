describe('Hopestar Login Page',()=>{
    it('Login using credentials',async()=>{

        await browser.url("https://www.icicilombard.com/")
        await browser.pause(3000)

        const link = await $("//h2[text()='Experience insurance on the go with our IL Take Care app.']")
        link.scrollIntoView()
        
        console.log(`<----------------->`)
        console.log(link.isDisplayed())//true
        
        await browser.pause(5000)
    })
})