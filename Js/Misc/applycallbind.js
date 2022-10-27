a= {
    name: 'foo',
    printName: function() {
        console.log(this.name);
    }
}

b = {
    name: 'bar',
}


a.printName.call(a); // foo

a.printName.call(b); // bar

a.printName.apply(a); // foo

a.printName.bind(a)(); // foo

// apply() and call() are used to call a function with a given this value and arguments provided as an array (or an array-like object).