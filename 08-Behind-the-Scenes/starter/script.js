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
// -----------------------


// HOISTING AND TDZ

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Ilya';
// let job = 'Developer';
// const year = 1981;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//    return a + b;
// }
//
// const addExpr = function (a, b) {
//    return a + b;
// }
//
// var addArrow = (a, b) => a + b;

// Example

// console.log(numProducts)
// if (!numProducts) deleteShoppingCart();
//
// var numProducts = 10;
//
// function deleteShoppingCart() {
//    console.log('All products deleted!');
// }
//
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// THIS

// console.log(this);
//
// const calcAge = function (birthYear) {
//    console.log(2022 - birthYear);
//    console.log(this);
// }
// calcAge(1981);

// const calcAgeArrow = birthYear => {
//    console.log(2022 - birthYear);
//    console.log(this);
// }
// calcAgeArrow(1980);

// const elias = {
//    year: 1981,
//    calcAge: function(){
//       console.log(this);
//       console.log(2022 - this.year)
//    }
// }
// elias.calcAge();
//
// const matilda = {
//    year: 2017,
// };
//
// matilda.callAge = elias.calcAge;
// matilda.callAge();
//
// const f = elias.calcAge;
// f();
//----------------------


// REGULAR FUNCTIONS VS ARROW FUNCTIONS
// var firstName = 'Dasha';
//
// const elias = {
//    firstName: 'Elias',
//    year: 1981,
//    calcAge: function(){
      // console.log(this);
      // console.log(2022 - this.year);

      // Solution 1. Pre-ES6 solution!
      // const self = this; // Pre-ES6 solution! self or that. Reserve "this".
      // const isMillenial = function () {
      //    console.log(self);
      //    console.log(self.year >= 1981 && self.year <= 1996);
      // };
      // isMillenial();

//       // Solution 2. ES6 solution!
//       const isMillenial = () => {
//          console.log(this);
//          console.log(this.year >= 1981 && this.year <= 1996);
//       };
//       isMillenial();
//    },
//
//    greet: () => { // Never use an arrow function as a method
//       console.log(this);
//       console.log(`Hey ${this.firstName}`);
//    },
// }
// elias.greet();
// elias.calcAge();
//
// // arguments keywords
// const addExpr = function (a, b) {
//    console.log(arguments);
//    return a + b;
// }
// addExpr(2, 5);
// addExpr(2, 5, 8, 9);
//
// var addArrow = (a, b) => {
//    console.log(arguments);
//    return a + b;
// }
// addArrow(2, 5, 6);

// PRIMITIVES VS OBJECTS

let lastName = 'Lavrentyev';
let oldLastName = lastName;
lastName = 'Petrov';

console.log(lastName, oldLastName);

const dasha = {
   firstName: 'Dasha',
   lastName: 'Kourochka',
   age: 35,
};
const marriedDasha = dasha;
marriedDasha.lastName = 'Lavrentyeva';
console.log('Before marriage:', dasha);
console.log('After marriage:', marriedDasha);


