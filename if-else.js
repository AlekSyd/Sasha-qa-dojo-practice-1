// if else


if(2>1){
    // 1 block
    } else {
    // 2 block
    }
    
    
    /*
    > - більше
    < - менше
    = - присвоїти значення
    == - порівняння
    === - порівнює з уразування типу даних
    >=
    <=
    != - not equal
    !== - not equal without data type counting
    */
    
    let var1 = 1;
    const var2 = true;
    
    console.log(var1 == var2);
    console.log(var1);
    
    
    console.log(10>1);
    console.log(1>10);
    console.log(11>=11);
    
    const firstNumber = 10;
    const secontNumber = 12;
    let result = firstNumber > secontNumber;
    
    console.log(result);
    
    const someNumber = Number('12343');
    const someString = String(12343);
    
    console.log(someNumber);
    console.log(someString);
    

    console.log('02' > 1);

    console.log('1' === true);

    // null and undefined

    console.log(undefined === null);
    console.log(false == 0);

    
    /*
    with toBeFalsy:
    false
    0
    null - doesn't worth in JS
    undefined -  - doesn't worth in JS
    NaN -  - doesn't worth in JS
    ''
    */

    if(10 + 1 > 11){
        console.log('this is false');
    }
    else  {
        console.log('this is true');
    }


    