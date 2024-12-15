const jsonString = `{
    "name": "Manish",
    "age": 25,
    "city": "Delhi",
    "country": "India",
    "isMarried": false,
    "children": ["Rahul", "Rahul", "Rahul"],
    "cars": ["BMW", "Maclaren"]
}`;
let myobj=JSON.parse(jsonString)

console.log(myobj)

console.log(JSON.stringify(myobj))


