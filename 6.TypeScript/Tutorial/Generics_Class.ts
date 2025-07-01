class Box<T>{
    private content:T;

    constructor(initial_content:T){
        this.content=initial_content;
    }

    getContent():T{
        return this.content;
    }

    setContent(newContent:T):void{
        this.content=newContent;
    }
}

const stringBox=new Box<string>("Hello, Typescript");
console.log(stringBox.getContent());
stringBox.setContent("New content");
console.log(stringBox.getContent());
