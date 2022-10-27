a = [1,2,3,4,5,6,7,8,9]
console.log(a.concat([10,11,12])); // [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(a.entries()); // Array Iterator {}

console.log(a.every((x) => x > 0)); // true

console.log(a.fill(0)); // [0,0,0,0,0,0,0,0,0]

console.log(a.filter((x) => x > 5)); // [6,7,8,9]

console.log(a.find((x) => x > 5)); // 6

console.log(a.findIndex((x) => x > 5)); // 5

console.log(a.forEach((x) => console.log(x))); // 1 2 3 4 5 6 7 8 9

console.log(a.includes(5)); // true

console.log(a.indexOf(5)); // 4

console.log(a.join()); // 1,2,3,4,5,6,7,8,9

console.log(a.keys()); // Array Iterator {}

console.log(a.lastIndexOf(5)); // 4

console.log(a.map((x) => x * 2)); // [2,4,6,8,10,12,14,16,18]

console.log(a.pop()); // 9

console.log(a.push(10)); // 10

console.log(a.reduce((x, y) => x + y)); // 55

console.log(a.reduceRight((x, y) => x + y)); // 55

console.log(a.reverse()); // [10,8,7,6,5,4,3,2,1]

console.log(a.shift()); // 10

console.log(a.slice(0, 3)); // [8,7,6]

console.log(a.some((x) => x > 5)); // true

console.log(a.sort()); // [1,2,3,4,5,6,7,8]

console.log(a.splice(0, 3)); // [1,2,3]

console.log(a.toString()); // 4,5,6,7,8

console.log(a.unshift(1, 2, 3)); // 8

console.log(a.values()); // Array Iterator {}

console.log(a.copyWithin(0, 3)); // [7,8,6,7,8,6,7,8,6]
