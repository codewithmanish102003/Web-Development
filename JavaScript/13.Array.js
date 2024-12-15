//Array Literal Meathod
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

//Array Constructor method
let fruits2 = new Array("Apple", "Banana", "Cherry");
console.log(fruits2);
console.log(fruits2[0]);
console.log(fruits2[1]);
console.log(fruits2[2]);


//Array Methods
console.log(fruits.length)

//Using Loops with Array

let num=[1,34,56,78,5,34,78]

// for (let index = 0; index < num.length; index++) {
//     console.log(num[index])
// }


// //for each loop
// num.forEach(element => {
//     console.log(element)
// });

// //for...of
// for (const i of num) {
//     console.log(i)
// }

//for....in
for (const item in num) {
        const element = num[item];
        console.log(element)
}

//ArrayFrom 
let str="Manish"
let str1=Array.from(str)
console.log(str1)

//map reduce and filter

//1.Map
let arr=[45,34,21]

let newarr=arr.map((value)=>{
        console.log(value)
        return value+1
})

console.log(newarr)

//2.filter

let arr1=[0,2,5,10,3,20]

let newarr1=arr1.filter(value=>{
        return value<10
})
console.log(newarr1)

//3.reduce
let arr2=[0,2,5,10,3,20]

const func=(i,j)=>{
        return i+j
}
let newarr2=arr2.reduce(func)
console.log(newarr2)