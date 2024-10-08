//find
const numbers = [1,2,3,4,5,6,7,820];
const result = numbers.find((value, index) => value<200);
console.log(result);


const students = [{
    name: "Alex", age: 29
},{
    name: "Oles", age: 19,
},
{
    name: "Igor", age: 56
}

];

const student = students.find((value) =>(
    value.age > 30
))

console.log(student);

//вираз має повертати true or false

//push, pop, includes, map

const cars = ["BMW", "Mazda"];
cars.push("Honda");

console.log(cars);

console.log(cars.pop());
console.log(cars);


console.log(cars.includes('BMW', 0));


const newNumbers = numbers.map((value, index, arr) => value + 1);
console.log(numbers);
console.log(newNumbers);

//task1

const cities = ['Kyiv', 'Sumy', 'lviv', 'kharkiv', 'Odesa']
const newArrOfCities = cities.map(city => {
    if (city[0] === city[0].toUpperCase()){
        return city;
    }
})

console.log(newArrOfCities);

//task2

const cities1 = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"
  ]
  const citiesCapitalized = cities1.map(city1 => {
    return city1.charAt(0).toUpperCase()+city1.slice(1).toLowerCase();

  });
  console.log(citiesCapitalized);
   
  //Використовуючи цикл forEach(), console.log записує назви всіх елементів у масиві citiesCapitalized, включаючи число, яке представляє позицію елемента, починаючи з 1 для першого (індексного) елемента.



citiesCapitalized.forEach((value, index, arr) =>{
    index = index + 1;

        
        console.log(value, index);
        

});