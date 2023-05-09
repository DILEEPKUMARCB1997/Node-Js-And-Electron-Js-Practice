// ES Modules
// import math from "./math-esm.mjs"; // Default Import

// import * as math from "./math-esm.mjs"; // Named Imports - type 1
// console.log(math.add(4, 4));
// console.log(math.sub(4, 4));

import { add, sub } from "./math-esm.mjs"; // Named Imports - type 2
console.log(add(4, 4));
console.log(sub(4, 4));
