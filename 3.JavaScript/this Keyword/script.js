///this keyword in regular function
//regular functions have global scope
const obj={
    name:"Alice",
    greet:function () {
        console.log(this.name);
        
    }
}

obj.greet()

//this keyword in a arrow function
//arrow function have block scope
const obj2={
    name:"Alice",
    greet:()=> {
        console.log(this.name);
        
    }
}

obj2.greet()