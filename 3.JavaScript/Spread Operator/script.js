//Spread Operator in javascript

//Array

let fruits = ["apple", "banana", "cherry"];
let fruits2 = ["orange", "pineapple", "mango"];

let fruits3 = [...fruits, ...fruits2];

console.log(fruits3);

//Object

let person = {
    name: "John",
    age: 20,
    city: "New York"
};

let person2 = {
    ...person,
    country: "USA"
};

console.log(person2);

//Spread Operator in function

let numbers = [1, 2, 3, 4, 5];

let max = Math.max(...numbers);

console.log(max);


//Spread Operator in object

let person3 = {
    name: "John",
    age: 20,
    city: "New York"
};

let person4 = {
    ...person3,
    country: "USA"
};

console.log(person4);

//Spread Operator in function

let numbers2 = [1, 2, 3, 4, 5];

let max2 = Math.max(...numbers2);

console.log(max2);

//Spread Operator in array

let numbers3 = [1, 2, 3, 4, 5];

let numbers4 = [...numbers3, 6, 7, 8, 9, 10];

console.log(numbers4);


//clone arrays using spread operator

let numbers5 = [1, 2, 3, 4, 5];

let numbers6 = [...numbers5];

console.log(numbers6);

//clone objects using spread operator

let person5 = {
    name: "John",
    age: 20,
    city: "New York"
};

let person6 = {
    ...person5
};

console.log(person6);
