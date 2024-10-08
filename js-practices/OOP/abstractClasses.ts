abstract class BasePage1 {
    abstract click() 

    type() {
        console.log("type");
    }
}

class Page1 extends BasePage1 {
    click(){

    }
};