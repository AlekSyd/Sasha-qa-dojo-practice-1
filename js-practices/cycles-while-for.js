let someVar = 'qwerty';


console.log(someVar);


// while

let num = 0

while(num < 10){
    num++;
console.log(num);

}


do{
    ++num;
    console.log(num);
} while(num < 10);


for(let i = 0; i < 10; i++){
    console.log(i);
}

for (let i=0; i<100; i++){
    if(i==50){
        break
    }
    console.log(i); 

}


for (const i of [1,2,3,4]) {
    console.log(i);
}

for (const i in {x: 1, y: 2}){
    console.log(i);
}