a = "Hello World";

a.charAt(0); // H
a.charCodeAt(0); // 72
a.concat("Hi"); // Hello WorldHi
a.endsWith("World"); // true
a.includes("World"); // true
a.indexOf("World"); // 6
a.lastIndexOf("World"); // 6
a.localeCompare("Hello World"); // 0
a.match(/World/g); // ["World"]
a.normalize(); // Hello World
a.padEnd(20, "Hi"); // Hello WorldHiHiHiHiHi
a.padStart(20, "Hi"); // HiHiHiHiHiHello World
a.repeat(3); // Hello WorldHello WorldHello World
a.replace("World", "Hi"); // Hello Hi
a.search("World"); // 6
a.slice(0, 5); // Hello
a.split(" "); // ["Hello", "World"]
a.startsWith("Hello"); // true
a.substr(0, 5); // Hello
a.substring(0, 5); // Hello
a.toLocaleLowerCase(); // hello world
a.toLocaleUpperCase(); // HELLO WORLD
a.toLowerCase(); // hello world
a.toUpperCase(); // HELLO WORLD
a.trim(); // Hello World
a.trimEnd(); // Hello World
a.trimStart(); // Hello World
a.valueOf(); // Hello World
