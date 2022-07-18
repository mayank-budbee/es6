// A rest parameter allows you to represent an indefinite number of arguments as an array.
// Notice that the rest parameters must appear at the end of the argument list.
// SyntaxError: Rest parameter must be last formal parameter

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

sum(1, 2, 3);

// Assuming that the caller of the sum() function may pass arguments with various kinds of data types such as
// number, string, and boolean, and you want to calculate the total of numbers only
function sum(...args) {
    return args
        .filter(function (e) {
            return typeof e === 'number';
        })
        .reduce(function (prev, curr) {
            return prev + curr;
        });
}

let result = sum(10,'Hi',null,undefined,20);
console.log(result);

// arguments object itself is not an instance of the Array type. Therefore, you cannot use the filter() method directly.
// In ES5, you have to use Array.prototype.filter.call()
function sum() {
    return Array.prototype.filter
        .call(arguments, function (e) {
            return typeof e === 'number';
        })
        .reduce(function (prev, curr) {
            return prev + curr;
        });
}

// An arrow function does not have the arguments object. Therefore, if you want to pass some arguments to the arrow function,
// you must use the rest parameters
const combine = (...args) => {
    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};

let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters

// JavaScript allows you to create dynamic functions through the Function constructor
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);
// Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script
// in the following Content Security Policy directive: "script-src github.githubassets.com"