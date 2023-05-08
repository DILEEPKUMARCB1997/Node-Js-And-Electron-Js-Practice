const obj1 = {
  name: "Name",
};

let obj2 = obj1;

// obj2.name = "John";
// obj2.age = 23;
// console.log(obj1);

obj2 = {
  name: "John",
  age: 25,
};

console.log(obj1);
