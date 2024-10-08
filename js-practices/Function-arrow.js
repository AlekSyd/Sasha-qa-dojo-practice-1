
 const someVar = 'Hello'; // global variable
function someFunc (par1, par2 = 'this is default value' ){
   
    console.log(par2);
    return '' + someVar;
    

}
console.log(someFunc());



function someFunc2 (par1, par2 ){
   const someVar2 = 'Hello world';
    return '' + someVar2;
}
console.log(someFunc2());



// func(param, param2){} OR

let sum = (param, param2) => param + param2;

console.log(sum(1, 2));

/* function types:
function declaration: function name(){return ''}
arrow function () => {} ()=> ...
function expression const someExpression = function(){}
*/


//тернарний оператор
// expression & if true : else false

10 > 5 ? console.log("10 more then 5"): console.log("10 less then 5");

