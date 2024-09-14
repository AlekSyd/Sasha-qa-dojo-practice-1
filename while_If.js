//- Виведіть в консоль числа від 1 до 345 (while)

let n=0

while (n<345){
    n++
    console.log(n);
}
    
//- Знайти суму чисел від 1 до 100 (тобто  1 + 2 + 3 + 4 + 5 + 6....)

let n1=1;
let sum=0;
while (n1<100){
    n1++
    sum +=n1;
    console.log(sum);

}

// Виведіть в консоль числа від 241  до 1 (do while)

let num=241
do{ num--;
 console.log(num);

} while(num>1);

//Напишіть програму  яка відображає найбільше ціле число з двох цілих чисел. (if.. + покрийте тестами)

let a = 3;
let b = 5;
let max=a;

for (let i=0; i<1; i++){
    if (b>max) {
        max = b;
        
    }
}
console.log("The max value is", max);


//OR

const someNum = 1
const someNumFloat = 1.0

function isPrime(num1, num2){
    if(typeof num1 ==='number' && typeof num2 === 'number'){
        if(num1 > num2)
            {
                console.log(`${num1} is prime`)
            }
        else if (num1 === num2){
                console.log(`${num1} and ${num2} are even`)
            }
            else{
                console.log(`${num2} is prime`)
            }
    
    }
    else console.log(`please type the number for ${num1} and ${num2}`)
    
}