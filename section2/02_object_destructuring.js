// old way
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let firstName = person.firstName;
let lastName = person.lastName;

// es6 way
let { firstName: fname, lastName: lname } = person;
// firstName and lastName properties are assigned to the fName and lName variables respectively

// If the variables have the same names as the properties of the object, you can make the code more concise as follows
let { firstName, lastName } = person;

console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// It’s possible to separate the declaration and assignment. However, you must surround the variables in parentheses
({firstName, lastName} = person);

// When you assign a property that does not exist to a variable using the object destructuring, the variable is set to undefined
let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined

// You can assign a default value
let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = 'no middle', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

// Destructuring a null object
function getPerson() {
    return null;
}
let { firstName, lastName } = getPerson();

console.log(firstName, lastName);  // TypeError: Cannot destructure property 'firstName' of 'getPerson(...)' as it is null.

// To avoid this, you can use the OR operator (||) to fallback the null object to an empty object
// Now, no error will occur. And the firstName and lastName will be undefined
let { firstName, lastName } = getPerson() || {};

// Nested object
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    }
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe

// It’s possible to do multiple assignement of a property to multiple variables
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

// Destructuring function arguments
// old way
let display = (person) => console.log(`${person.firstName} ${person.lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);

// es6 way
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);