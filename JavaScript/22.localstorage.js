let key = prompt("Enter the key : ")
let value = prompt("Enter the value : ")

localStorage.setItem(key, value)

console.log(`the value at ${key} is ${localStorage.getItem(key)}`)