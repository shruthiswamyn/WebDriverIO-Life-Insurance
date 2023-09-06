//import { $ } from '@wdio/globals'
//import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    
    //general usage methods
   
    provideUrl()
    {
        return browser.url("http://rmgtestingserver/domain/Life_Insurance_Management_System/")
    }
    
   //getters and setters for webpage elements only

   
    get inputUsername () {
         return $("//input[@name='username']");
        
    }

    get inputPassword () {
        return $("//input[@name='password']");
    }

    get btnSubmit () {
        return $("//button[text()='login']");
    }

   //business logic only

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

}

export default new LoginPage()