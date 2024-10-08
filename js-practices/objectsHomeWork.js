// task 1
const user = {};

console.log(typeof user);

const name = 'name';
user[name] = "senpai";

console.log(user);


user["surname"] = "qa";
console.log(user);

user[name] = "Oleksandra";
console.log(user);

delete user.name;

console.log(user);

//task 2: Напишіть функцію isEmpty(obj), яка повертає true, якщо об’єкт не має властивості, інакше false.

let emptyObj = {
    isEmpty: function(){
        for (let key in this){
            if (this.hasOwnProperty(key) && key != 'isEmpty'){
                return false;
            }
            
        }
        return true;
    }
};

console.log(emptyObj.isEmpty());

emptyObj["key"] = "value";
console.log(emptyObj.isEmpty())




//task 3 Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.


let multyObj = {
    number1: 35,
    number2: 88,
    date: '2024-12-17',
    text: 'text',
    multyFunc: function(){
        for(let key in multyObj){
            if (typeof multyObj[key] === 'number'){
                multyObj[key] *= 2;
            }
        }
    }
};
multyObj.multyFunc();
console.log(multyObj)


