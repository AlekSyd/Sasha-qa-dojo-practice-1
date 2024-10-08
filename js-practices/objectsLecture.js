

const someObj = {
    key: true,
    someKey: "yes"
}

console.log(someObj.someKey);

const otherObj = {}
const otherArr = []

console.log (typeof otherObj);
console.log (typeof otherArr);

const myName = {

    firstName : "Oleksandra",
    second_Name : "Sydorets",
    age: 37,
    getFullInfo: function(){
        console.log(`My full name is ${myName.firstName + " " + this.second_Name} and I'm ${this.age} years old`)
    }
}

console.log(myName)

myName.getFullInfo();

//add and delete object key

const someColor = "color"
const car = {
    brand1: "Toyota",
    brand2: "Toyota",
    brand3: "Toyota"
};


car[someColor] = "red";

console.log(car.color);
console.log(car)


// delete car.brand;

// for (const key in car){
//     delete car[key]
// } 

// console.log(car)


console.log("brand4" in car);

// const someJson = {
//     "AuthTocken" : ";kyhqpi4w7yf7wery",
//     charAt""
// }


//prototype

const student = {
    fill_name: 'Pavlo Safonov',
    isActive : true
};

const studentQA = Object.create(student);

student["budget"] = true


student ["programm"] = "Test automation";
console.log(studentQA);
console.log(student)

studentQA["employee"] = "Google";
console.log(studentQA);
console.log(student)

