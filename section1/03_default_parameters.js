function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

// default undefined
function say(message) {
    console.log(message);
}

say(); // undefined

// assign default
function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say(); // 'Hi'

// default assignment
function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'

function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}

createDiv();
createDiv(undefined,undefined,'solid 5px blue');

// evaluating default params
function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']


// function as parameter
function date(d = today()) {
    console.log(d);
}
function today() {
    return (new Date()).toLocaleDateString("en-US");
}
date();

// We can use above feature to make arguments are mandatory.
function requiredArg(arg='') {
    throw new Error(`The argument ${arg} is required'`);
}
function add(x = requiredArg('x'), y = requiredArg('y')){
    return x + y;
}

add(10); // error
add(10,20); // OK

// Using other parameters in default values
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4

// Uncaught ReferenceError: Cannot access 'y' before initialization
function subtract( x = y, y = 1 ) {
    return x - y;
}
subtract(10);


// return value of a function as a default value for a parameter
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); // 110

// The arguments object
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3