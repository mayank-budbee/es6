
// 1st way
function getScores() {
    return [70, 80, 90];
}

let scores = getScores();

let x = scores[0],
    y = scores[1],
    z = scores[2];

// destructuring
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// on mismatch z is undefined
function getScores() {
    return [70, 80];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined

// Another way
let [x, y ,...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]