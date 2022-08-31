class MyClass {
    #privateMethod() {
        //...
    }

    static #privateStaticMethod() {
        //...
    }

    // #field;
    // get #myField() {
    //     return #field;
    // }
    // set #myField(value){
    //     #field = value;
    // }
}

// this.#privateMethod();
// MyClass.#privateStaticMethod();

class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
        // this.#firstName = firstName;
        // this.#lastName = lastName;
        this.#firstName = Person.#validate(firstName);
        this.#lastName = Person.#validate(lastName);
    }
    getFullName(format = true) {
        return format ? this.#firstLast() : this.#lastFirst();
    }

    #firstLast() {
        return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
        return `${this.#lastName}, ${this.#firstName}`;
    }

    static #validate(name) {
        if (typeof name === 'string') {
            let str = name.trim();
            if (str.length === 3) {
                return str;
            }
        }
        throw 'The name must be a string with 3 characters';
    }
}

let person = new Person('Joh', 'Doe');
console.log(person.getFullName());

person = new Person('John', 'Doe');
console.log(person.getFullName());