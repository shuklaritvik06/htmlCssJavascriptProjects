const a = new Map();
a.set('a', 1);
a.set('b', 2);
console.log(a);
a.get('a'); // 1
a.get('c'); // undefined
a.delete('a');
console.log(a.size);
a.clear();
console.log(a.size);

const b = new WeakMap();
const c= {};
b.set(c, 1);
console.log(b);
console.log(b.get(c));