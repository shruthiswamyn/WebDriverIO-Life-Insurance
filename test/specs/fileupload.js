describe('Uploading files',()=>{
    it('Upload an external file',async()=>{

        await browser.url('https://foundit.in')
        await browser.pause(2000)

        await $("div[class='heroSection-buttonContainer_secondaryBtn__text']").click()
        await browser.pause(2000)

        var wh = browser.getWindowHandles() 
        console.log('<----cross checking window page title at the beginning------>')
        console.log(await browser.getTitle()) 
        for(var i=0;i<(await wh).length;wh++)
        {
            if(wh[i]!=wh)
            {
                browser.switchToWindow(wh[i])
                break
            }
        }

       
        await $("input[id='file-upload']").click()
        await browser.pause(2000)

    })
})