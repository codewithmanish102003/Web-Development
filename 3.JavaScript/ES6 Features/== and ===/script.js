// Loose Equality (==)
console.log("Losse Equality")
console.log(5 == "5");        // ✅ true (string "5" is coerced to number 5)
console.log(false == 0);      // ✅ true (false coerced to 0)
console.log(null == undefined); // ✅ true (both treated as empty)
console.log([] == 0);         // ✅ true (empty array coerced to 0)
console.log([1, 2] == "1,2"); // ✅ true (array coerced to string)

// Strict Equality
console.log("Strict Equality");
console.log(5 === "5");       // ❌ false (different types)
console.log(false === 0);     // ❌ false (boolean vs number)
console.log(null === undefined); // ❌ false (different types)
// console.log([] === 0);        // ❌ false (array vs number)
// console.log([1, 2] === "1,2");// ❌ false (array vs string)
console.log(5 === 5);         // ✅ true (same type and value)