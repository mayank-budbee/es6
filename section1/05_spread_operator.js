// The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

// The spread operator (...) unpacks the elements of the odd array.
// The rest parameters must be the last arguments of a function. However, the spread operator can be anywhere:
const odd = [1,3,5];
const combined = [...odd, 2,4,6];
console.log(combined);

// Spread object to be used to expand object
const circle = {
    radius: 10
};

const coloredCircle = {
    ...circle,
    color: 'black'
};

console.log(coloredCircle);

// clone an object
// Note that the cloning is always shallow.
const circle = {
    radius: 10
};

const clonedCircle = {...circle};

console.log(clonedCircle);

// Note that the cloning is always shallow.
const circle = {
    radius: 10,
    style: {
        color: 'blue'
    }
};

const clonedCircle = {
    ...circle
};

console.log(clonedCircle);
clonedCircle.style.color = 'red';

console.log(clonedCircle);

// Object.assign() vs cloning
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set diameter(value) {
        this.radius = value / 2;
        console.log('SET ', value);
    }
    get diameter() {
        return this.radius * 2;
    }
}

let circle = new Circle(100);

let cloneCircle1 = Object.assign(circle, {
    diameter: 200
});

let cloneCircle2 = {
    ...circle
};
console.log(cloneCircle1);
console.log(cloneCircle2);

// Object.defineProperty does not affect the const object
const blueSquare = {
    length: 100,
    color: 'blue'
};

Object.defineProperty(blueSquare, 'color', {
    value: 'blue',
    enumerable: true,
    writable: false

});

console.log(blueSquare);

//
const style = {
    color: 'green'
};

const greenSquare = {
    ...blueSquare,
    ...style
};

console.log(greenSquare);

// VM594:1 Uncaught TypeError: Cannot assign to read only property 'color' of object '#<Object>'
const redSquare = Object.assign(blueSquare, {
    color: 'red'
});

// spread operator with apply
function compare(a, b) {
    return a - b;
}

let result = compare.apply(null, [1, 2]);
console.log(result); // -1

let result = compare(...[1, 2]);
console.log(result); // -1

// Using push
let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

[].push.apply(rivers, moreRivers); // This can be confusing
console.log(rivers);

rivers.push(...moreRivers);
console.log(rivers);

// Constructing array literal
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// Concatenating
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

// copying an array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

// When we applied the spread operator to the 'BC'string, it spreads out each individual character of the string 'BC'
// into individual characters.
let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]