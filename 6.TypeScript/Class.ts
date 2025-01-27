// class User{
//     name:string;
//     age:number;

//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;

//         console.log("Constructor is called!");
        
        
//     }
// }

// const user=new User("Jhon",20)
// console.log(user);


//Inheritance And Access Modifiers

class Animal{
    public name:string;
    private age:number;
    protected species:string;

    constructor(name:string,age:number,species:string){
        this.name=name;
        this.age=age;
        this.species=species;
    }

    public getName():string{
        return this.name;
    }

    public getAge():number{
        return this.age;
    }

    public getSpecies():string{
        return this.species;
    }
}


class Dog extends Animal{
    constructor(name:string,age:number){
        super(name,age,"Cannie")
    }

    public getInfo():string{
        return `${this.getName()} is a ${this.getAge()} and is ${this.getAge()} years old..`
    }
}

const dog=new Dog("Kitti",3);
console.log(dog);
