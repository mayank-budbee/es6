// The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity

// Object property initializer shorthand
function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}

// ES6 allows you to eliminate the duplication when a property of an object is the same as the local
// variable name by including the name without a colon and value.

// Internally, when a property of an object literal only has a name, the JavaScript engine searches for a variable
// with the same name in the surrounding scope. If the JavaScript engine can find one,
// it assigns the property the value of the variable.
function createMachine(name, status) {
    return {
        name,
        status
    };
}

// you can construct an object literal from local variables
let name = 'Computer',
    status = 'On';

let machine = {
    name,
    status
};

//Prior to ES6, computed property names
// both properties of the machine object contains a space, you can only reference them using the square brackets.
let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};

console.log(machine[name]); // server
console.log(machine['machine hours']); // 10000

//In ES6, you can use an expression as a property name
let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000

// Prior to ES6, when defining a method for an object literal, you need to specify the name and full function definition
let server = {
    name: "Server",
    restart: function () {
        console.log("The" + this.name + " is restarting...");
    }
};

// ES6: removing the colon (:) and the function keyword.
// concise method syntax
let server = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    }
};

// It’s valid to have spaces in the property name
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();