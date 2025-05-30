//shallwow copy
let obj1={
    name:"Alice",
    address:{
        city:"Jaipur",
        state:"Rajasthan"
    }
};

//ways of creating a shalllow copy
// 1.using spread(...) operator
//2. object.assign()
//3.Array Methos(slice and concat)

// let obj2={...obj1}
// obj2.name="Bob"
// obj2.address.city="Ajmer"

// console.log(obj1.address.city);
// console.log(obj2.address.city);

//deep copy

//ways to create a deep copy
// 1.JSON.stringify() + JSON.parse()
//2.lodash.cloneDeep()
//3.recursion (manual logic)
let obj3=JSON.parse(JSON.stringify(obj1))
obj3.address.city="Ajmer"
console.log(obj1.address.city);
console.log(obj3.address.city);

