// node 04_static_methods.js
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

// Static function
Person.createAnonymous = function (gender) {
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name);
};

var anonymous = Person.createAnonymous();
console.log(anonymous.getName())

// In ES6, you define static methods using the static keyword.
class Person1 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static createAnonymous(gender) {
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new Person(name);
    }
}


let person = new Person1('James Doe');

// TypeError: person.createAnonymous is not a function
// let anonymous1 = person.createAnonymous("male");

let anonymous2 = Person1.createAnonymous("male");
console.log(anonymous2.getName())

// or
let anonymous3 = person.constructor.createAnonymous("male");
console.log(anonymous3.getName())