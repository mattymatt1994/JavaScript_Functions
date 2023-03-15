console.log("Hello World!\n==========\n");

//Making a function
/**
 * 1. Use the function keyword
 * 2. Give it a name
 * 3. Give it a parameter list
 * 4. Open up the body
 * 5. Inside the body, write your code
 * 5.5 Think about what the function should return
 */

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i <= 100; i++) {
    console.log(i);
  }
}

// Exercise 2 Section
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}`;
  let belowSixteen = `Sorry ${userName},you can not drive`;
  if (16 <= age) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixteen);
  }
}
checkAge("Casey", 15);

//Exercise 3
function checkQuadrant(x, y) {
  if (x == 0 && y == 0) return "Origin";
  else if (x == 0 && typeof y == "number") return "Point is on the Y axis";
  else if (typeof x == "number" && y == 0) return "Point is on the X axis";
  else if (x > 0 && y > 0) return "Quadrant 1";
  else if (x < 0 && y < 0) return "Quadrant 3";
  else if (x > 0 && y < 0) return "Quadrant 4";
  else if (x < 0 && y > 0) return "Quadrant 2";
}
console.log(checkQuadrant);

//Exercise 4
function checkTriangle(a, b, c) {
  if (a + b < c || b + c < a || c + a < b) return "Invalid Triangle";
  else if (a == b || b == c) return "Equilateral Triangle";
  else if (a + c > b || b + c > a) return "isosceles triangle";
}
console.log(checkTriangle)
