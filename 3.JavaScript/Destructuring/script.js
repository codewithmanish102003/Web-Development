//Destructuring in javascript

//Array Destructuring

let fruits = ["apple", "banana", "cherry"];
let [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//Object Destructuring

// let person = {
//     name: "John",
//     age: 20,
//     city: "New York"
// };

// let {name, age, city} = person;

// console.log(name);

//Destructuring with default values

// let person = {
//     name: "John",
//     age: 20,
//     city: "New York"
// };

// let {name, age, city, country = "USA"} = person;

//Destructuring with rest operator

let person = {
    name: "John",
    age: 20,
    city: "New York"
};

let {name, age, ...rest} = person;

console.log(name);
console.log(age);
console.log(rest);
