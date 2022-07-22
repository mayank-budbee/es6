// JavaScript class expressions
// A class expression provides you with an alternative way to define a new class.

// A class expression doesn’t require an identifier after the class keyword. And you can use a class expression
// in a variable declaration and pass it into a function as an argument.
let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

let person = new Person('John Doe');
console.log(typeof Person); // function

// JavaScript classes are first-class citizens. It means that
// you can pass a class into a function, return it from a function, and assign it to a variable.
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi'); }
});

greeting.sayHi(); // 'Hi'

// Singleton
// To do that, you use the new operator with a class expression and
// include the parentheses at the end of class declaration
let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App');

app.start(); // Starting the Awesome App...