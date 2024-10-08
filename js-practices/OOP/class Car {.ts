class Car {

    public brand: string;
    public color: string;
 
     constructor(color: string, brand: string){
         
         this.color = color;
         this.brand = brand;
     }
     drive(where: string) {
         console.log(`The car ${this.brand}, ${this.color} was driven to Kyiv`)
     }
 }
 
 const someCar = {
     brand: "BMW",
     color: "Green",
 };
 
 const someCarAudi = {
     brand: "Audi",
     color: "Black",
 };
 
 const newCar = new Car("Mazda", "Black");
 
 console.log(newCar);
 newCar.drive("Kyiv");
 

 class SomePage {
    page

    constructor(page ){
        this.page = page;
    
    }
    click(){
        this.page;

    }
 }

 const somePage = new SomePage("page");
 somePage.click()
 somePage.page


 class BasePage {
    private page: Page;
    public someElementXpath: string = "//*";
    protected someElementXpath2: string = "//*";

    constructor(page: Page) {
        this.page = page;
    }
    public click() {
        this.page.locator("").click()
    }

    public navigate(url: string) {
        this.page.goto(url);
    }
//  }

 class LoginPage extends BasePage {};

 test ("some test", async ({page}) => {
    const LoginPage = new LoginPage(page);
    LoginPage.clickOnLoginButton()
 });

 