console.log("Streams and Buffers");

const buffer = new Buffer.from("Dileep Kumar");

console.log(buffer);
console.log(buffer.toJSON());
console.log(buffer.toString());
buffer.write("Vishwas");
console.log(buffer.toString());
