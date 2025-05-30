//Code Execution : Synchronous Code --> Web API --> Microtasks --> Callback Queue 

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");