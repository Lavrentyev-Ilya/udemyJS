'use strict';

// Scoping
// function calcAge(birthYear) {
//    const age = 2021 - birthYear;
//    function  printAge() {
//       let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//       console.log(output);
//       if (birthYear >= 1981 && birthYear <= 1996) {
//          var millenial = true;
//          const firstName = 'Bill';
//          const str = `Oh, and you're a millenial, ${firstName}`;
//          console.log(str);
//
//          function add(a, b) {
//             return a + b;
//          }
//          output = 'NEW OUTPUT';
//       }
//       console.log(add(2,3));
//    }
//    printAge();
//    return age
// }
// const firstName = 'Ilya';
// calcAge(1981);
// console.log();

// Hoisting and TDZ
// Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ilya';
let job = 'Developer';
const year = 1981;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3));

function addDecl(a, b) {
   return a + b;
}

const addExpr = function (a, b) {
   return a + b;
}

var addArrow = (a, b) => a + b;

// Example

console.log(numProducts)
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
   console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);