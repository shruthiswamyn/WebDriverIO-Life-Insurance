import excel from 'exceljs'

describe('Excel utility', ()=>{
    it('Read data', async()=>{

        const book = new excel.Workbook()
        await book.xlsx.readFile("C:/Users/ckvin/OneDrive/Desktop/WebDriverIO Life Insurance/data.xlsx")
        const sheetName = book.getWorksheet('Sheet1')
        let rowNum = sheetName.rowCount//gets number of rows
        let colNum = sheetName.getRow(1).cellCount//get number of columns
        
        for(let index=1;index<=rowNum;index++)
        {
            for(let index1=1;index1<=colNum;index1++)
            {
                console.log(sheetName.getRow(index).getCell(index1).toString())
            }
              
        }
        
        
    })

    xit('Write data',async()=>{
        const book = new excel.Workbook()
        //await book.xlsx.readFile("C:/Users/ckvin/OneDrive/Desktop/WebDriverIO Life Insurance/data.xlsx")
        //const sheetName1 = book.getWorksheet('Sheet1')
        const sheetNameNewWorksheet = book.addWorksheet('SheetNew')
        sheetNameNewWorksheet.addRow(4).getCell(1).value='welcome'
        await book.xlsx.writeFile("C:/Users/ckvin/OneDrive/Desktop/WebDriverIO Life Insurance/dataNew.xlsx")
        
    })
})