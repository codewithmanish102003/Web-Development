//Normal function
function greet() {
    console.log("Hello!")
}

greet();

//Arrow function
const greet1 = (name) => {
    return `Hello, ${name}!`;
  };

 console.log(greet1('friday'));

 //parameterized functions
function Sum(a,b,c=8) {
    return a+b+c;
}
console.log("Sum = "+Sum(3,4,5));
console.log("Sum = "+Sum(3,4));
console.log("Sum = "+Sum(3));

//Function used as variable
let x = Sum(77,3);
let text = "The value of x is = " + x;
console.log(text);

//immediate invoked function
(function() {
    console.log('This function runs immediately');
  })();
  