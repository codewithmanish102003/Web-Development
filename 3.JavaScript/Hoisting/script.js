// Example of Hoisting in JavaScript

// 1. Variable Hoisting with var
console.log("Example 1: Variable Hoisting with var");
console.log(hoistedVar); // Outputs: undefined (variable is hoisted but not initialized)
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Outputs: "I am hoisted"

// 2. Function Declaration Hoisting
console.log("Example 2: Function Declaration Hoisting");
hoistedFunction(); // This works because function declarations are fully hoisted
function hoistedFunction() {
  console.log("This function is hoisted");
}

// 3. Function Expression Hoisting (not hoisted as a function)
console.log("Example 3: Function Expression Hoisting");
try {
  functionExpression(); // Error: functionExpression is not a function
} catch (error) {
  console.log("Error caught: functionExpression is not a function yet");
}
var functionExpression = function() {
  console.log("This function expression is not hoisted as a function");
};
functionExpression(); // Now it works

// 4. Temporal Dead Zone (TDZ) with let and const
console.log("Example 4: Temporal Dead Zone with let and const");
try {
  console.log(tdz); // ReferenceError: Cannot access 'tdz' before initialization
} catch (error) {
  console.log("Error caught: Cannot access variable before initialization");
}

let tdz = "I am in the TDZ before initialization";
console.log(tdz); // Outputs: "I am in the TDZ before initialization"

// 5. Class Hoisting (similar to let and const - they exist in TDZ)
console.log("Example 5: Class Hoisting");
try {
  const instance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
} catch (error) {
  console.log("Error caught: Cannot access class before initialization");
}

class MyClass {
  constructor() {
    this.name = "My Class Instance";
  }
}

const instance = new MyClass();
console.log(instance.name); // Outputs: "My Class Instance"
