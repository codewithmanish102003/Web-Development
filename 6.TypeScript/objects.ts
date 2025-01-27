// const person1:{firstName:string; lastName:string; age:Number;}={
//     firstName:"Jhon",
//     lastName:"Doe",
//     age:30,
// }

// console.log(person1);


//using objects as function return value

function printUser():{firstName:string; location:string; age:Number;}{
     return{
        firstName:"Alex",
        age:19,
        location:"New York"
     }
}

console.log(printUser());
