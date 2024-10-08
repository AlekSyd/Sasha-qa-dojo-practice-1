const arr = [1, 2, "test", null, true, undefined, {}];
console.log(arr);


//index

console.log(arr.indexOf("test"))

console.log(arr.length);

console.log(new Array(10));
console.log(new Array(1,2,"var", false));

console.log(new Array("apple", "peach", "melon"));

const birthDate = [1987, 28, 4];

const fruits = ["apple", "peach", "melon"];

//concat join the arrays
const birthFruitsArr = birthDate.concat(fruits, arr);
console.log(birthFruitsArr);



//for( of )

for(const fruit of fruits){
    console.log(fruit + 10);
};

console.log(fruits);

for(const [index, fruit] of fruits.entries()){

    if (index % 2 === 0){
        console.log(index);
        console.log(fruit);
    }
    console.log(index);
    console.log(fruit + 10);
}

