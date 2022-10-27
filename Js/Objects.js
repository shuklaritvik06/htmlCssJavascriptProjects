// Make objects
function hello(name){
    this.name = name;
}

a = new hello("a");

// Assign

b = {
    name: "b"
}

Object.assign({ name: "c" }, b);

// Create

c = Object.create(b);

// defineProperty

Object.defineProperty(b, "name", {
    value: "d",
    writable: false,
    enumerable: true,
    configurable: true
});

// defineProperties

Object.defineProperties(b, {
    name: {
        value: "e",
        writable: false,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 20,
        writable: false,
        enumerable: true,
        configurable: true
    }
});

// getOwnPropertyDescriptor

Object.getOwnPropertyDescriptor(b, "name");

// getOwnPropertyNames

Object.getOwnPropertyNames(b);


// getPrototypeOf

Object.getPrototypeOf(b);


// is

Object.is(b, c); // b===c ?


// isExtensible

Object.isExtensible(b);

// entries

Object.entries(b);

// freeze

Object.freeze(b);

// fromEntries

Object.fromEntries(Object.entries(b));

// getOwnPropertySymbols

Object.getOwnPropertySymbols(b);

// isFrozen

Object.isFrozen(b);