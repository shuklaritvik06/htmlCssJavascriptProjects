const a = new Set();
a.add(1);
a.add(2);
a.has(1); // true
a.has(3); // false
a.delete(1);
console.log(a.size);
a.clear();
console.log(a.size);

const b = new WeakSet();
const c = {name: 'foo'};
b.add(c);
console.log(b.has(c));