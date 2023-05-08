/* Import Export Patterns */
const math = require("./math");

const { add, sub, mul, div } = math;

console.log(math.add(10, 5));
console.log(math.mul(10, 5));
console.log(math.div(10, 5));
console.log(math.sub(10, 5));

console.log("....................");

console.log(add(10, 5));
console.log(mul(10, 5));
console.log(div(10, 5));
console.log(sub(10, 5));

//.............................................................

/*Module Caching*/
// const Files = require("./files");

// const file1 = new Files("File no 1");
// console.log(file1.getName());
// file1.setName("First File");
// console.log(file1.getName());

// const file2 = new Files("File no 2");
// console.log(file2.getName());

// const files = require("./files");
// console.log(files.getName());
// files.setName("File number 2");
// console.log(files.getName());

// const newFiles = require("./files");
// console.log(newFiles.getName());

//...................................................................

/*Modules, Local Modules, Module Exports*/
// require("./file1");
// require("./file2");
// const addition = require("./addition");
// console.log("Hello from index.js");
// const sum = addition(1, 2, 3);
// console.log(sum);
// console.log(addition);
