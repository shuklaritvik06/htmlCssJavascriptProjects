class myClass{
    constructor(){
        this.name = "myClass";
    }
    getName(){
        return this.name;
    }
}

const a = new myClass();
console.log(a.getName());

class mySubClass extends myClass{
    constructor(){
        super();
        this.name = "mySubClass";
    }
}

const b = new mySubClass();
console.log(b.getName());

class Hello{
    constructor(){
        this.fname = "Hello";
    }
    static getName(){
        return this.fname;
    }
}

console.log(Hello.getName());

class Inheritance extends Hello{
    constructor(){
        super();
        this.name = "Inheritance";
    }
    getName(){
        return this.name+this.fname;
    }
}

const c = new Inheritance();
console.log(c.getName());

