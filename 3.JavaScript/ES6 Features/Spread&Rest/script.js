// Spread Operator Examples
console.log("--- Spread Operator Examples ---");

// 1. Spreading arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log("Combined arrays:", combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// 2. Copying an array
const originalArray = [10, 20, 30];
const copyArray = [...originalArray];
console.log("Copied array:", copyArray); // Output: [10, 20, 30]

// 3. Spreading objects
const person = { name: "John", age: 30 };
const personWithAddress = { ...person, address: "123 Main St" };
console.log("Person with address:", personWithAddress);
// Output: { name: "John", age: 30, address: "123 Main St" }

// 4. Spreading in function calls
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [5, 10, 15];
console.log("Sum using spread:", sum(...numbers)); // Output: 30

// Rest Operator Examples
console.log("\n--- Rest Operator Examples ---");

// 1. Rest parameters in functions
function collectArgs(...args) {
  console.log("Collected arguments:", args);
  return args.reduce((total, current) => total + current, 0);
}
console.log("Sum of all arguments:", collectArgs(1, 2, 3, 4, 5)); // Output: 15

// 2. Rest with destructuring arrays
const [first, second, ...restOfItems] = [10, 20, 30, 40, 50];
console.log("First:", first); // Output: 10
console.log("Second:", second); // Output: 20
console.log("Rest of items:", restOfItems); // Output: [30, 40, 50]

// 3. Rest with destructuring objects
const { name, ...restOfProperties } = { name: "Sara", age: 25, job: "Developer", country: "USA" };
console.log("Name:", name); // Output: Sara
console.log("Rest of properties:", restOfProperties); // Output: { age: 25, job: "Developer", country: "USA" }
