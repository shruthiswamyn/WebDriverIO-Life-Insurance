describe('Undertsand window handling',()=>{
    it('Multiple windows',async()=>{

        //launch the url
        console.log('Launch the website-------------------------------->')
        await browser.url("https://demo.automationtesting.in/Windows.html")
        
        await browser.pause(5000)

        //identify the element and click
        await $('=Open New Seperate Windows').click()
        await browser.pause(1000)
        await $('[class="btn btn-primary"]').click()
       
        //get the window handles
        var wh = browser.getWindowHandles() //"wh" is the parent window here
        console.log('<----cross checking parent window page title at the beginning------>')
        console.log(await browser.getTitle()) 

        //*********************to avoid hardcoding of window number, do as below
        for(var i=0;i<(await wh).length;wh++)
        {
            if(wh[i]!=wh)
            {
                browser.switchToWindow(wh[i])
                break
            }
        }
        //******************************/
        //switch to required child window
        //browser.switchToWindow(wh[1])
        await browser.pause(1000)

        //get that page title as verification
        console.log('<----opened child window page title------>')
        console.log(await browser.getTitle()) //o/p is: Frames & windows

        await browser.pause(2000)
        //close child window
       // browser.closeWindow()

       // await browser.pause(2000)
        //switch back to parent window or home window
        browser.switchToWindow(wh)
        console.log('<----opened parent window page title------>')
        console.log(await browser.getTitle()) 
     })
})