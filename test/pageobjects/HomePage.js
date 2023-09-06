//import { $ } from '@wdio/globals'
//import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    
    //general usage methods
   
    provideUrl()
    {
        return browser.url("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
    }
    
   //getters and setters for webpage elements only

   
    get clickOnClientLinkInLeftPane () {
         return $("//a[@href='client.php']")
        
    }

    get enterClientId () {
        //return $("//input[@name='key']");
        return $("//input[@type='text']");
    }

    get btnSubmit () {
        return $("//input[@class='searchBtn']");
    }

    get checkStatusUsingNomineeStatusLink(){
        return $("//table[@class='table']/following-sibling::table//a[.='Client Status']")
    }

   //business logic only

    async clickOnClientModule() {

        await this.clickOnClientLinkInLeftPane.click();
    }
    async searchClient(clientId)
    {
        await this.enterClientId.setValue(clientId)
        await this.btnSubmit.click()
        await this.checkStatusUsingNomineeStatusLink.click()
    }

}

export default new HomePage()