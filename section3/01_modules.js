// An ES6 module is a JavaScript file that executes in strict mode only. It means that any variables or functions
// declared in the module won’t be added automatically to the global scope.

// cd section3
// static-server
// http://localhost:9080/hello.html


// It’s important to keep in mind that the imported module executes only once even import it multiple times.
import { a } from './cal.js';
import { b } from './cal.js';
import {result} from './cal.js';

// Import an entire module as an object
import * as cal from './call.js';

// Note that you must use the import or export statement outside other statements and functions

// math.js
function add( a, b ) {
    return a + b;
}

// JavaScript allows you to create aliases for variables, functions, or classes when you export and import.
export { add as sum };
// OR
// import {sum as total} from './math.js';

// Re-exporting a binding
import { sum } from './math.js';
export { sum };
// or
export {sum} from './math.js';
// or
export { sum as add } from './math.js';
// If you want to export all the bindings from another module
export * from './cal.js';

// you may want to add a new method to a built-in object such as the Array
if (!Array.prototype.contain) {
    Array.prototype.contain = function(e) {
        // contain implementation
        // ...
    }
}

import './array.js';
[1,2,3].contain(2); // true

// A module can have one and only one default export. The default export is easier to import.
// The default for a module can be a variable, a function, or a class.
// sort.js
export default function(arr) {
    // sorting here
}

import sort from './sort.js';
sort([2,1,3]);
// Notice that we didn’t use the curly brace {} surrounding the  sort identifier.

// both default and non default
// sort.js
export default function(arr) {
    // sorting here
}
export function heapSort(arr) {
    // heapsort
}

// imported as
import sort, {heapSort} from './sort.js';
sort([2,1,3]);
heapSort([3,1,2]);

// or
import { default as quicksort, heapSort} from './sort.js';