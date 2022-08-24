// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result
const addNumbers = function (a, b) {
    return a + b;
}
// console.log(addNumbers(3, 5));

//2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

const lastCharacters = function (string) {
    return string.slice(-3);
}
// console.log(lastCharacters("sometext"));

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

// function splitNumbers(a){
//     return String(a).split("1234567").map(Number);
//     }

const splitNums = function (a) {
    return String(a).split("1234567").map(Number);
}
console.log(Number);