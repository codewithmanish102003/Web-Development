const person={
    name:"Alice"
}

function greet(age,city){
    console.log(`Hello,My name is ${this.name}, I am ${age} years old and live in ${city}`)
}

//immediately invoked a function
greet.call(person,21,"Jaipur")
//immediately invoked a function byt takes array as argument
greet.apply(person,[21,"Jaipur"])
//does not immediately invoked a function and resturns a new function
const foundGreet=greet.bind(person,21,"Jaipur")
foundGreet()
