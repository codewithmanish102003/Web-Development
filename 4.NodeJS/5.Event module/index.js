const EventEmitter = require('events');
const eventEmitter=new EventEmitter()

//creating and Emitting an Event

// eventEmitter.on('greet',(name)=>{
//     console.log(`Hello , ${name}`)
// })

// eventEmitter.emit('greet','Alice')

//Adding and removing  event listeners
// eventEmitter.once("start",()=>{
//     console.log("This will logged once only")
// })

// eventEmitter.emit("start")

const onGreet=(name)=>{
    console.log(`Hello ,${name}`)
}

eventEmitter.on('greet',onGreet)
eventEmitter.emit('greet',"Bob")
eventEmitter.off("greet",onGreet)

eventEmitter.emit('greet',"Bob") // not called again since eventEmitter is off now

