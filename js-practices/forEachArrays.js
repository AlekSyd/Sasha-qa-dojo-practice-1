// forEach
const numbers = [1,2,3,4,5,6,7,820];

numbers.forEach((value, index, arr) =>{
    arr[index] = value + 100;

        console.log(value);
        console.log(index);
        

});

for(const[index, value] of numbers.entries()){

    console.log(value);
    console.log(index);
};
        
const newNumbers = numbers.map((value, index, arr) => value + 1);
console.log(numbers);
console.log(newNumbers);
