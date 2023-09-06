describe('Search Google',()=>{
    it('type in search box',async()=>{
        await browser.url("https://www.google.com/")

        await $('[class="gLFyf"]').setValue('iphone')
        await browser.pause(5000)
        console.log("done!!")
    })
})