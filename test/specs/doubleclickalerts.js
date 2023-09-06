//const assert = require("assert")

describe('Sample and Understand frame switching',()=>{
    it('multiple frames',async()=>{
        
        await browser.url('https://chercher.tech/practice/popups')
        //const elem = await $('#checkbox')
        const elem = await $('#radio')
        elem.click()
        // await expect(elem).toBeChecked()
        // await expect(elem).toBeSelected()
        // await expect(elem).toBeEnabled()
        //await expect(elem).toBeDisabled()

        //await $('#double-click').doubleClick()

        // await $("//input[@name='alert']").click()
        // browser.acceptAlert()
       
        // await $("//input[@name='confirmation']").click()
        // let text = browser.getAlertText()
        // console.log(text)
       
        // //expect(text).toEqual("I am confirm")
        // if(text)
    

        // await browser.pause(5000)
        // //await $("//input[@name='prompt']").click()
        // //await browser.sendAlertText("<----Try again--->")
        // await browser.acceptAlert()
        // // console.log(await browser.isAlertOpen())
        // //  await browser.saveScreenshot('screenshot.png');
        

        // // await browser.url('https://jqueryui.com/droppable/')
        // // browser.switchToFrame(0)
        // // await $('#draggable').dragAndDrop('#droppable')


        await browser.pause(6000)



    })
})