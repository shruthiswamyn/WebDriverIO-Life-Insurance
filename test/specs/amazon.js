describe('Hopestar Login Page',()=>{
    it('Login using credentials',async()=>{

        await browser.url("https://www.amazon.in/")
        await browser.pause(3000)
        
        // //for dropdown using select - id is "searchDropdownBox", visible text='Amazon Devices'
        //const elem = await $('#searchDropdownBox')
        // elem.selectByVisibleText('Amazon Devices')
        // console.log('<------------------------------------------------------------------------>')
        // console.log(await expect(elem).toHaveTextContaining("Amazon Devices"))

        //const elem = await $("//span[@id='nav-link-accountList-nav-line-1']")
        // const elem = await $("//span[text()='Hello, sign in']")
        // await expect(elem).toHaveTextContaining('Hello')
        
        // const ele = await $(" //a[text()='Mobiles']")
        // console.log(await expect(ele).toBeClickable())
       


        // //mouse hover using xpath --> 
        // let p = $("//span[@id='glow-ingress-line2']")
        // await p.moveTo(30,60)
        // await browser.pause(3000)

      

        // //linked text accessed as = theText
        // await $('=Mobiles').click()

        // //find mulitple elements uing xpath - use "map" to access each element in the obtained list
        // const catList=[]
        // await $$("div[class='a-section a-spacing-none'] ul li").map(element=>{
        //     catList.push(element.getText()),
        //     console.log(catList)
        // })
            
        // const data = await $("//input[@id='twotabsearchtextbox']")
        // await data.setValue("mobiles")
        // await expect(data).toHaveValueContaining("mobiles")

        const data = await $("//a[.='Sell']")
        await expect(data).toHaveLinkContaining("/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3")

        await browser.pause(10000)

    })
})