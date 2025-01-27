// //1.Object Interface

// interface MyPerson{
//     firstname:string;
//     lastname:string;
//     age:number;
// }

// //usage
// const examplePerson:MyPerson={
//      firstname:"Manish",
//      lastname:"Prajapati",
//      age:21,
// }

// console.log(`My name is ${examplePerson.firstname} And I am ${examplePerson.age} years old..`);

// //2.Function Interface

// interface MathOperation{
//     //(parameters):return value
//     (x:number,y:number):number
// }

// //usage

// const add:MathOperation=(a,b)=>a+b
// const subtract:MathOperation=(a,b)=>{
//      return a-b
// }

// console.log(add(5,3))
// console.log(subtract(7,2));

// //3.Class interface
// interface Vehicle{
//     start():void;
//     stop():void;
// }

// class Car implements Vehicle{
//     start(): void {
//         console.log("Car Started");
//     }

//     run():void{
//         console.log("Car is running")
//     }

//     stop(): void {
//         console.log("Car Stopped");
//     }
// }


// const myCar=new Car();

// myCar.start();
// myCar.run();
// myCar.stop();

//Declaration Merging


//original interface
interface Vehicle{
    Brand:string;
    start():void;
}

//deaclartion merging(extended interface)
interface Vehicle{
    Model:string;
    stop():void;
}

const myCar:Vehicle={
    Brand:"BMW",
    Model:"",
    start() {
        console.log("Start")
    },
    stop() {
        console.log("Stop")
    },
}

myCar.start()
myCar.stop()