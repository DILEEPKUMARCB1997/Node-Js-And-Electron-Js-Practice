/* Import Export Patterns */

// 2nd Method
// module.exports = (a, b) => {
//   return a + b;
// };

//4th
module.exports.add = (a, b) => {
  return a + b;
};

module.exports.sub = (a, b) => {
  return a - b;
};

/* 5th */
exports.mul = (a, b) => {
  return a * b;
};

exports.div = (a, b) => {
  if (b === 0) return "inavlid number";
  else return a / b;
};

// module.exports = add;  /* First Method */
// module.exports = { add, sub, mul, div }; /* Third Method */
