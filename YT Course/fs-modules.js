const fs = require("fs");

console.log("first");

const fileData = fs.readFileSync("./file.txt", "utf-8");
console.log(fileData);

console.log("second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log("third ");

fs.writeFileSync("./newfile.txt", "Hello World! ");

fs.writeFile("./newfile.txt", "\n Hello Dileep", { flag: "a" }, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File is written");
  }
});
