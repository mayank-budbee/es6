class Circle {
    #radius;

    // Static private fields
    static #count = 0;

    constructor(value) {
        this.#radius = value;
        Circle.#count++;
    }
    get area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    set radius(value) {
        if (typeof value === 'number' && value > 0) {
            this.#radius = value;
        } else {
            throw 'The radius must be a positive number';
        }
    }
    get radius() {
        return this.#radius;
    }

    static hasRadius(circle) {
        // return #radius in circle;
    }

    static getCount() {
        return Circle.#count;
    }
}

let circle = new Circle(10);
console.log(circle.area); // 314.1592653589793

// Works without set and get methods above
circle.radius = 11;
console.log(circle.area); // 380.132711084365
console.log(circle.radius);

// use of 'in' operator
let circle1 = new Circle(10);

// return #radius in circle;
// SyntaxError: Unexpected identifier
console.log(Circle.hasRadius(circle1));

let circles = [new Circle(10), new Circle(20), new Circle(30)];
console.log(Circle.getCount());

class Cylinder extends Circle {
    #height;
    constructor(radius, height) {
        super(radius);
        this.#height = height;

        // cannot access the #radius of the Circle class here
    }
}