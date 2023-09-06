import { Key } from 'webdriverio'
describe('Hopestar Login Page',()=>{
    it('Login using credentials',async()=>{

        await browser.url("https://demo.actitime.com/login.do")
        await browser.pause(3000)
        await $('[name="username"]').setValue('admin')
    //     await browser.keys(Key.Ctrl, 'A')
    //     await browser.keys(Key.Ctrl, 'C')
        await $('[class="textField pwdfield"]').setValue('manager')
    //    await browser.keys(Key.Tab)
    //    await browser.keys(Key.Ctrl, 'V')
    //   await browser.keys(Key.Tab)

       await browser.keys(Key.Enter)
    
        //await $("//div[text()='Login ']").click()
        //await browser.keys("Enter")
        
       // await $('#loginButton').click()
        await browser.pause(10000)

        //await $("(//div[@class='popup_menu_icon'])[2]").click()
        //await $("//a[text()='Types of Work']").click()

       
        await $("//span[text()='Add Recent Task']").selectByVisibleText('Sales strategy')

        await browser.pause(10000)

    })
})