//Accessing array using Arrow Function
const fruits=["Apple","Banana","Mango"];

fruits.forEach(element => console.log(element));


//Accessing Index And Array
const fruit=["Apple","Banana","Mango"];

fruits.forEach(function(fruit,index){
    console.log(index,fruit);
});