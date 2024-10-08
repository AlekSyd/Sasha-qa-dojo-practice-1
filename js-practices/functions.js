// functions

function foo(){
    console.log('this is function console log')

}

foo();

function welcome(name, lastname){

    return console.log(`hi!, my name is ${name} ${lastname}`)
}

welcome("Sasha", "Sydorets")

function bannerLocator(bannerId){
    return `a[class*= 'active']:not(.swiper-slide-duplicate)[data-banner-id = '${bannerId}']`;
};

console.log(bannerLocator(121455));

