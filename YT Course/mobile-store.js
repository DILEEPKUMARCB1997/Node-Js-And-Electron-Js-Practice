const EventEmitter = require("events");

class MobileStore extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(RAM, storage) {
    this.orderNumber++;
    this.emit("order", RAM, storage);
  }

  displayOrderNumber() {
    console.log(`Current order number : ${this.orderNumber}`);
  }
}

module.exports = MobileStore;
