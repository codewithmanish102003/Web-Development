// Parent Class
class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    Shout() {
        console.log(`${this.name} is shouting`)
    }

    run() {
        console.log(`${this.name} is running`)
    }
}

//Child Class
class Monkey extends Animal {

    Eatbanana() {
        console.log(`${this.name} is eating`)
    }

    run() {
        console.log(`${this.name} is running`)
    }
}
let Animal1 = new Animal("Bruno", "White")
let Monkey1=new Monkey("Chimpu","Brown")

Animal1.Shout()
Monkey1.Shout()