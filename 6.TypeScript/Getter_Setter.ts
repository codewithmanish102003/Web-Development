class MyProperty{

    private _myProperty:number=0;

    ///setter
    set myProperty(value:number){
        this._myProperty=value
    }
    
    // getter
    get myProperty():number{
        return this._myProperty
    }
}

const myInstance=new MyProperty();

console.log(`Current Value : ${myInstance.myProperty} `);

myInstance.myProperty=10-2

console.log(`New Value : ${myInstance.myProperty} `);
