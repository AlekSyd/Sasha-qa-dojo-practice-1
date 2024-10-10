import{test} from '@playwright/test';
import { HomePage } from './HomePage';
import { SignUpPage } from './SignUp';


test("OLSY-010 New user register", async({page}) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);

    await homePage.navigateTo("https://demo.learnwebdriverio.com/");
    await homePage.clickSignUp();

    await signUpPage.fillInCreds();
    await signUpPage.clickSignUpButton();
    await signUpPage.verifyProfileUrlByUser('Sasha');
 
})