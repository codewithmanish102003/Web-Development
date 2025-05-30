// Closure Function Example
console.log("Closure Function Example");

// A closure is a function that has access to its outer function's variables
// even after the outer function has returned

// Example 1: Basic Closure
function createCounter() {
  let count = 0;  // This variable is enclosed in the returned function
  
  return function() {
    count++;  // This inner function has access to the count variable
    console.log(count);
    return count;
  };
}

const counter = createCounter();
counter();  // Outputs: 1
counter();  // Outputs: 2
counter();  // Outputs: 3

// Example 2: Closure with parameters
function createGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");

sayHello("John");  // Outputs: "Hello, John!"
sayGoodbye("Jane");  // Outputs: "Goodbye, Jane!"

// Example 3: Practical use case - private variables
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited ${amount}. New balance: ${balance}`);
    },
    withdraw: function(amount) {
      if (amount > balance) {
        console.log("Insufficient funds");
        return;
      }
      balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${balance}`);
    },
    getBalance: function() {
      console.log(`Current balance: ${balance}`);
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);  // Outputs: "Deposited 50. New balance: 150"
account.withdraw(30);  // Outputs: "Withdrew 30. New balance: 120"
account.getBalance();  // Outputs: "Current balance: 120"
 