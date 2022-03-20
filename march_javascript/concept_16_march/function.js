// addition
// function sum(num1, num2) {
//   let sumResult = num1 + num2;
//   console.log("This is inside the function = " + sumResult);
//   return sumResult;
// }
// let result = sum(433, 77);
// --------------------------------------------------------------------------------------------------
//  subtraction

// function sub(num1, num2) {
//   let subResult = num1 - num2;
//   console.log(subResult);
// }
// sub(345, 665);

// ---------------------------------------------------------------------------------------------------
// // multiplication

// function multi(num1, num2) {
//   let multiResult = num1 * num2;
//   console.log(multiResult);
//   //   multi(344, 5);
// }
// multi(344, 5);
// -----------------------------------------------------------------------------------------------------
// division

// function div(num1, num2) {
//   let divResult = num1 / num2;
//   console.log(divResult);
// }
// div(22, 5);

// _______________________________________________________________________________________________________

// Arrow function

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };
// let result = multiply(4, 60);
// console.log(result);
// ---------------------------------------------------------------------------------------------------
// function sum(num1, num2) {
//   let sumResult = num1 + num2;
//   console.log("This is inside the function = " + sumResult);
//   return sumResult;
// }
// let result = sum(433, 77);
// let even = checkEven(result);
// console.log(even);

// function checkEven(result) {
//   if (result % 2 == 0) {
//     console.log("even");
//     return "Even";
//   } else {
//     console.log("odd");
//     return "odd";
//   }
// }

// -------------------------------------------------------------------------------------------

function sum(num1, num2) {
  let sumResult = num1 + num2;
  console.log("This is inside the function = " + sumResult);
  return checkEven(sumResult);
}
let result = sum(433, 707);
// let even = checkEven(result);
console.log(result);

function checkEven(result) {
  if (result % 2 == 0) {
    // console.log("even");
    return "Even";
  } else {
    // console.log("odd");
    return "odd";
  }
}
