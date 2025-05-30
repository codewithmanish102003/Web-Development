//Without Currying
// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(2, 3));

// with Currying
function add(a) {
    return function (b) {
      return a + b;
    };
  }
  
  const add2 = add(2); // add2 is now a function that remembers '2'
  console.log(add2(3)); // Output: 5
  console.log(add(2)(3)); // Output: 5 (Another way)