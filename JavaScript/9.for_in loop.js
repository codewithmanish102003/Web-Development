var person={
    firstName:"Manish",
    lastname:"Prajapati",
    age:30
};

for (const key in person) {
    const element = person[key];
    console.log(key,element);
}


var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  for (var key in person) {
    console.log(key + ": " + person[key]);
  }
  