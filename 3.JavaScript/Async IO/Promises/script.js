// Basic Promise example
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = true; // Change to false to simulate failure
    
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }
  }, 2000); // 2 seconds delay
});

// Using the Promise
console.log("Promise started...");

myPromise
  .then((result) => {
    console.log("Success:", result);
    return "Next step";
  })
  .then((nextResult) => {
    console.log("Chained then:", nextResult);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed (regardless of success or failure)");
  });

// Promise.all example - wait for multiple promises
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 1000));
const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json());

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log("All promises resolved:", values);
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });

// Promise.race example - resolves or rejects as soon as one promise resolves/rejects
Promise.race([
  new Promise(resolve => setTimeout(() => resolve("Fast promise won"), 500)),
  new Promise(resolve => setTimeout(() => resolve("Slow promise"), 1500))
])
  .then(result => console.log(result));
