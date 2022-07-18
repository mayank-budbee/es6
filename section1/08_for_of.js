// ES6 introduced a new statement for...of
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}

// If you don’t change the variable inside the loop, you should use the const keyword instead of the let

// To access the index of the array elements inside the loop, you can use the for...of statement
// with the entries() method of the array
let colors = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors.entries()) {
    console.log(`${color} is at index ${index}`);
}

// In-place object destructuring with for…of
// The expression const {score} of ratings uses object destructing to assign the
// score property of the current iterated element to the score variable.
const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
for (const {score} of ratings) {
    sum += score;
}

console.log(`Total scores: ${sum}`); // 14

// Iterating over strings
let str = 'abc';
for (let c of str) {
    console.log(c);
} // a b c

// Iterating over Map objects
let colors = new Map();

colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for (let color of colors) {
    console.log(color);
}

// Iterating over set objects
let nums = new Set([1, 2, 3]);

for (let num of nums) {
    console.log(num);
}

// The for...in iterates over all enumerable properties of an object. It doesn’t iterate over a collection
let scores = [10,20,30];
scores.message = 'Hi';

console.log("for...in:");
for (let score in scores) {
    console.log(score);
} // 0 1 2

console.log('for...of:');
for (let score of scores) {
    console.log(score);
} // 10 20 30

