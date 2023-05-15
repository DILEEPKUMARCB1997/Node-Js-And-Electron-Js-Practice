const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on("New Sale", () => {
  console.log("There was a new Sale");
});

myEmitter.on("New Sale", () => {
  console.log("Customer Name : Jonas");
});

myEmitter.on("New Sale", (stock) => {
  console.log(`There are only ${stock} items left in the Stock`);
});

myEmitter.emit("New Sale", 10);

////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recieved");
  console.log(req.url);
  res.end("Request Recieved");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", (req, res) => {
  console.log("Server Closed");
});

server.listen(8000, () => {
  console.log("Waiting for requests.....");
});
