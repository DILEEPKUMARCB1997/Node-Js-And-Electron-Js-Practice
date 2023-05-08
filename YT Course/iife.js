//Module Wrapper and Module Scope

(function (message, page) {
  const file = "File No 1";
  console.log(file);
  console.log(message, file + " has " + page + " number of pages");
})("Hai, ", 123);
(function (message, page) {
  const file = "File No 2";
  console.log(file);
  console.log(message, file + " has " + page + " number of pages");
})("Hello, ", 321);
