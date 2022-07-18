// The Function.prototype.apply() method allows you to call a function with a given this value and
// arguments provided as an array.
const person = {
    firstName: 'John',
    lastName: 'Doe'
}

function greet(greeting, message) {
    return `${greeting} ${this.firstName}. ${message}`;
}

let result = greet.apply(person, ['Hello', 'How are you?']);

console.log(result);

// If you use the call() method, you need to pass the arguments of the greet() function separately as follows:
let result = greet.call(person, 'Hello', 'How are you?');
console.log(result)

// The apply() method allows an object to borrow the method of another object without duplicating the code.
const computer = {
    name: 'MacBook',
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `The ${this.name} is On`;
    },
    turnOff() {
        this.isOn = false;
        return `The ${this.name} is Off`;
    }
};

const server = {
    name: 'Dell PowerEdge T30',
    isOn: false
};

let result = computer.turnOn.apply(server);
console.log(result);

let result = computer.turnOff.apply(server);
console.log(result);

// The apply() method allows you to append elements of an array to another
let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr);

// The apply() method is similar to the call() method excepts that it accepts the arguments of the
// function as an array instead of individual arguments.