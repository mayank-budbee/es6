// By convention, the constant identifiers are in uppercase.
// const keyword declares blocked-scope variables. However, the block-scoped variables declared by the const keyword can’t be reassigned.
const CONSTANT_NAME = value;

// let keyword are mutable
let a = 10;
a = 20;
a = a + 5;
console.log(a); // 25

const RATE = 0.1;
RATE = 0.2; // TypeError

// person variable is a constant, you can change the value of its property
const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

person = { age: 40 }; // TypeError

// If you want the value of the person object to be immutable, you have to freeze it by using the Object.freeze() method
// Object.freeze() is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties
const person = Object.freeze({age: 20});
person.age = 30; // TypeError, but worked on browser

// const array
const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError

// for .. of loop
let scores = [75, 80, 95];

for (let score of scores) {
    console.log(score);
}