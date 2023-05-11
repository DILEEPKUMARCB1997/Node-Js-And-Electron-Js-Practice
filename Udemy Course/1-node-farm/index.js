const fs = require("fs");
const http = require("http");
const url = require("url");
const slugify = require("slugify");
const replaceTemplate = require("./modules/replaceTemplate");

//-------------FileSystem Module (Files)-------------------------------//

//Synchronous way of reading and writing file - Blocking
// console.log("<---------------Synchronous---------------->");
// const inputText = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(inputText);
// console.log(inputText.toString());
// console.log("Reading File...");

// const outputText = `This is what we know about the avocado : ${inputText} .\n \n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", outputText);
// console.log("File is Written");

// console.log("<-------------Asynchronous----------------->");

// //Asynchronous way of reading and writing file - Non-Blocking
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2} \n\n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your File has been written");
//         }
//       );
//     });
//   });
// });

// console.log("Will read the File");

//-------------FileSystem Module (Files)-------------------------------//

//-------------HTTP Module (Server)-------------------------------//

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);

const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);

const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const slugs = dataObject.map((element) =>
  slugify(element.productName, { lower: true })
);

console.log(slugs);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const cardsHtml = dataObject.map((element) =>
      replaceTemplate(tempCard, element)
    );
    const output = tempOverview.replace("{%PRODUCTS_CARDS%}", cardsHtml);
    res.end(output);

    //Products Page
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    // res.end(
    //   "<h1><i>This is the <span style='color:red'>PRODUCTS PAGE</span></i></h1>"
    // );
    res.end(output);

    //API Page
  } else if (pathname === "/api") {
    // res.end("<h1>API</h1>");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);

    //Page Not Found
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "dileep",
    });
    res.end("<h3><span style='color:red'>Could not find the Page</span></h3>");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server is accepting requests on port number 5000");
});
//-------------HTTP Module (Server)-------------------------------//
