class Animal {
    makeSound(){
        console.log('Make some sound!!!');
    }
}

class Dog extends Animal {
    makeSound(): void{
        console.log('Bark Bark')
    }
}

class Cat extends Animal {
    makeSound(): void{
        console.log('Mew Mew')
    }
}

const cat = new Cat();
const dog = new Dog();
const animal = new Animal();

cat.makeSound();
dog.makeSound();
animal.makeSound();


function test1(a: unknown, b: unknown) {
    if (typeof a === 'string' && typeof b === 'string'){

    }
    if (typeof a === 'number' && typeof b === 'number'){}
}

function test(a: number, b: number){
    console.log(a*b);
}