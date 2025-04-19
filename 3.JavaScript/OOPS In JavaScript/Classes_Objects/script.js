class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`The age of ${this.name} is ${this.age}`);
    }
}

let Person1 = new Person("Manish", "21");
Person1.getDetails();