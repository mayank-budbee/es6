// Run in browser console
var a = 10;
console.log(window.a); // 10

let b = 20;
console.log(window.b); // undefined

// outputs 5 5 times
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// outputs 1 2 3 4 5
for (var i = 0; i < 5; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

// uses let
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// use arrow functioins
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}

var counter = 0;
var counter;
console.log(counter); // 0

let counter = 0;
let counter;
console.log(counter); // Uncaught SyntaxError: Identifier 'counter' has already been declared

// Temporal death zone (TDZ)
{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    log(); // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    //log(); // called outside TDZ
}


function increase() {
    var counter = 10;
}
// cannot access the counter variable here

// 0 to 5
for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

// 0 to 5
for (let i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

// The global object is window on the web browser and global on Node.js
// The let variables have temporal dead zones while the var variables don’t.