

function divide(num1, num2) {
    if(num2==0){
        throw TypeError("Division by Zero")
    }
    return num1/num2
}
  
  const result = divide(10, 2);
  console.log(result); // Output: 5

  try{
  const result2 = divide(10, 0);
  console.log(result2); // Output: "Division by zero is not allowed."
  }catch(error){
    console.error(error.message); // Output: "Division by zero is not allowed."
  }