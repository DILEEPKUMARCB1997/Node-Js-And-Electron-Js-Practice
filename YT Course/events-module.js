//Events Modules

console.log("Without Inheritance");
console.log(".............................................");

const EventEmitter = require("events");

const emitter = new EventEmitter();

//Listening to an event (Event listener)
emitter.on("Ordering Phone", (RAM, storage) => {
  console.log(
    `Order Confirmed! Shipping your phone having ${RAM}GB RAM and ${storage}GB Storage`
  );
});

console.log("print this before event occurs");

//Emitting an event (event emitter)
emitter.emit("Ordering Phone", 4, 64);

console.log(".............................................");
console.log("With Inheritance");
console.log(".............................................");

//With inheritance (extending EventEmitter class)
const MobileStore = require("./mobile-store");
const PhoneStorage = require("./phone-storage");

const mobileShop = new MobileStore();
const phoneStorage = new PhoneStorage();

mobileShop.on("order", (RAM, storage) => {
  console.log(
    `Order Confirmed! Shipping your phone having ${RAM}GB RAM and ${storage}GB Storage`
  );
  phoneStorage.ramDetails(RAM);
});
mobileShop.order(8, 124);
mobileShop.displayOrderNumber();
