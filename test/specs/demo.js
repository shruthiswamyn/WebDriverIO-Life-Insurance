import{expect,assert} from "chai"

describe('Sample Testing', () => {
    it('Launch the website', async() => {

         //await browser.url('https://webdriver.io/')
         //await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
   
         await browser.url('https://www.google.com/')
         await $('#hgdfh').click()//INTENTIONAL ERROR TO CHECK SCREESNHOT IN ALLURE REPORTS
         const title = await browser.getTitle()
         console.log(title)
         expect(title).to.be.equal('Google')//when using chai assertion, using await before expect is not mandatory
        
         // await browser.debug()//this statement freezes/pauses the output screen, posts execution 
         //stopped message to the console

        // const header = await $('h3=Test in Real Environments')
        // await expect(header).toHaveText('Real Environments')
        // let str='a3'
        // console.log(str.padStart(3,'#'))//#a3
        
    })
})

//use of async() & await ensures that the session does not close 
//until all the commands/ until browser is launched...

//successful wait until code is executed

