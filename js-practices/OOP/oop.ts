class Car {

   public brand: string;
   public color: string;

    constructor(color: string, brand: string){
        
        this.color = color;
        this.brand = brand;
    }
    drive(where: string) {
        console.log(`The car ${this.brand}, ${this.color} drived to Kyiv`)
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






