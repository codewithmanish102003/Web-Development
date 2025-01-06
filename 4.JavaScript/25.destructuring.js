//1.Destructuring in Arrays

// let arr=[10,20,30,40,50]

// let[a,b,...rest]=arr

// console.log(a,b,rest)

//Skipping elements
// let arr=[10,20,30,40,50]

// let[a,,b,...rest]=arr

// console.log(a,b,rest)

//assigning default values
let arr=[10,20]

let[a,b,c=30]=arr

console.log(a,b,c)

//2.Destructuring in Objects
const person = {
    name: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female

console.log(name,age,gender)
