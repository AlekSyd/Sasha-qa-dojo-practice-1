import { test, expect } from "@playwright/test";

function isGreate(x, y) {
  if ( (x > y) == true)  {
    console.log("x is greater then y");
 
    return true;
  } else if ((x === y)) {
    console.log("x is equal to y");
 
    return false;
  } else {
    console.log("x less then y");
 
    return false;
  }
}

test ("x is greater", async () => {
  const result = isGreate(3, 2);
  expect(result).toBeTruthy();
});

test('equal', async() => {
 const result = isGreate(55, 55);
 expect(result).toBeFalsy();
});

test("x is less", async () => {
  const result = isGreate(-1, 3)
  expect(result).toBeFalsy();
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
