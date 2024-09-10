import { test, expect } from "@playwright/test";

function isEven(x) {
  if (Number.isInteger(x / 2) ) {
    console.log("x is an Even");
 
    return true;
  } else {
    console.log("x is an odd");
 
    return false;
  }
}

test ("is even", async () => {
    const xValue = isEven(8);
    expect(xValue).toBeTruthy();
    

});
test ("is odd", async () => {
    const xValue = isEven(7);
    expect(xValue).toBeFalsy();

})

// Класи еквівалентності
// positive
// negative
// zero

// Граничні значення
// 1
// 0
// -1
// + бескінечність
// - бескінечність
