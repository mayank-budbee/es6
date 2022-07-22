// backticks



// template literals allow you to define multiline strings more easily

let p =
    `This text
can
span multiple lines`;

// string interpolation
let price = 8.99,
    tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

console.log(netPrice); // netPrice:$9.89

// Tagged templates
function format(literals, ...substitutions) {
    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result;
}

let quantity = 9,
    priceEach = 8.99,
    result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;

console.log(result); // 9 items cost $80.91.