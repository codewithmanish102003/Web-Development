//1.typeof operator
 type MyType=string|number

 function exampleFunc(value:MyType):void{
     if(typeof value ==='string'){
         console.log(`The value is a string: ${value}`);
     }else if(typeof value ==='number'){
         console.log(`The value is a number: ${value}`);
     }
 }

 exampleFunc("Hello World");
 exampleFunc(10);

 //2.instanceof operator
 class Dog_Animal{
     bark():void{
         console.log("Woof");
     }
 }

 class Cat_Animal{
     meow():void{
         console.log("Meow");
     }
 }

 function animalSound(animal:Dog_Animal|Cat_Animal):void{
     if(animal instanceof Dog_Animal){
         animal.bark();
     } else if(animal instanceof Cat_Animal){
         animal.meow();
     }
 }

 const dog2=new Dog_Animal();
 const cat=new Cat_Animal();

 animalSound(dog2);
 animalSound(cat);

 //3. Intersection Types
type Employee={
     id:number;
     name:string;
}

type Manager={
     department:string;
     title:string;
}

type FullTimeEmployee=Employee&Manager;

const john:FullTimeEmployee={
     id:1,
     name:"John",
     department:"HR",
     title:"Manager"
 }
 console.log(john);
 console.log(john.department);
 console.log(john.title);
 console.log(john.id);
 console.log(john.name);


 //4. Union Types

 function getLength(value: string|number): number {
     if(typeof value === 'string'){
         return value.length;
     }
     return value.toString().length;
 }
 console.log(getLength("Hello World"));
 console.log(getLength(12345));
 