//regular function
function addOne(num: number) {
  return num + 1;
}

const result = addOne(3);

console.log(result); 

//Arrow function

const multipy = (x: number, y: number) => {
  return x * y;
};

const res = multipy(2, 10);

console.log(res);


//default Params

function greet1(person:string="Ts"){
  return `Hello ${person}`;
}

const res1=greet1("Huxn");
const res2=greet1();
console.log(res1);
console.log(res2);

//Return Annotations

const func1=(x:number):number =>{
  return x*x;
}

const res3=func1(2);
console.log(res3);
