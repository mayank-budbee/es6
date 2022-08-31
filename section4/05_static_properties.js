class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;
    static getCount() {
        return Item.count++;
    }
}

console.log(Item.count); // 0

// Item class ...

let pen = new Item("Pen", 5);
let notebook = new Item("notebook", 10);

console.log(pen.constructor.getCount()); // 2
notebook.constructor.count++
console.log(notebook.constructor.count); // 4