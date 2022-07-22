// JavaScript classes are syntactic sugar over the prototypal inheritance.
// In other words, ES6 classes are just special functions.

// Prior to ES6, JavaScript had no concepts of classes.
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// ES6 way
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let john = new Person("John Doe");

let name = john.getName();
console.log(name); // "John Doe"
console.log(typeof Person); // function
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// 1. class declarations are not hoisted like function declarations.
// 2. all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
// 3. class methods are non-enumerable. If you use a constructor/prototype pattern, you have to use the Object.defineProperty() method to make a property non-enumerable
// 4. Finally, calling the class constructor without the new operator will result in an error as shown in the following example

// Uncaught TypeError: Class constructor Person cannot be invoked without 'new'
let john = Person("John Doe");

