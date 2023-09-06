describe('Uploading files',()=>{
    it('Upload an external file',async()=>{

       
       //get file path into a variable
       const filePath = "C:\\Users\\ckvin\\OneDrive\\Desktop\\Plant01.jpg"
     
       await browser.url('https://the-internet.herokuapp.com/upload')
       await browser.pause(2000)

       //uploading the required file
       await $("//input[@id='file-upload']").setValue(filePath)

       //click on submit button to complete file uploading process
       await $("//input[@id='file-submit']").click()
       
       console.log('<--------file uploaded successfully------>')
       
        await browser.pause(2000)

    })
})