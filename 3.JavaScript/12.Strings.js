let name="Manish";//Double quote String
console.log(name)

let name1='Shubham';//Single quote string
console.log(name1)

//Using template  literals

let sentence=`${name1} is friend of ${name}`;
console.log(sentence);

//Escape Sequence charaters

console.log("Vi\'Kings") //single quote
console.log("Vi\"Kings") //double quote
console.log("Vi\nKings") //new line 
console.log("Vi\tKings") //tab space
console.log("Vi\rKings") //carrige return

//String Methods

//1.length method

let str="Hello, World"
console.log(str.length)

//2.Accessing Characters
console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])

//3.To UpperCase
console.log(str.toUpperCase())

//4.To lowercase
console.log(str.toLowerCase())

//5.Slice
console.log(str.slice(2,5))
console.log(str.slice(1))

//6.replace
console.log(str.replace("llo","ro"))

//7.indexof
console.log(str.indexOf("World"))
console.log(str.lastIndexOf("World"))

//8.includes
console.log(str.includes("Hello"))

//9.Substring
console.log(str.substring(0,5))

//10.trim
console.log(str.trim())

//11.split
console.log(str.split(","))

//12.Seaarch
console.log(str.search("World"))

//13.Concatenation