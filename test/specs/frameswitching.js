describe('Understand frame switching',()=>{
    it('multiple frames',async()=>{
        
        await browser.url('https://chercher.tech/practice/frames')

        //switch using index - not reliable- avoid using
        // browser.switchToFrame(0)
        // await $("input[type='text']").setValue("shruthi")
        await browser.pause(2000)

        //switch using id
         browser.switchToFrame(await $('#frame1'))//id="frame1" in source file

    // //     //switch using name
    // //    // browser.switchToFrame("iamframe")//name="iamframe" in source file   
        
    // //     //switch using element or xpath
    //     //    browser.switchToFrame( await $('[name="iamframe"]'))//use iamframe#frame1 for css -> name#id
        await $("input[type='text']").setValue("hello")
        await browser.pause(2000)

        browser.switchToFrame(await $('#frame3'))
        await $("input[type='checkbox']").click()
        await browser.pause(5000)

        //exits all the iframes and places the webdriverio control at the page level 
        await browser.switchToFrame(null)

        await browser.switchToFrame(await $('#frame2'))
        await $('#animals').selectByVisibleText('Avatar')
        await browser.pause(5000)
    })
})