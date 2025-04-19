let mytimeout=setTimeout(()=>{
    console.log("Hello World!")
},3000)

//stop the execution of setTimeout
// clearTimeout(mytimeout)

// Example of setInterval
let counter = 0;
let myInterval = setInterval(() => {
    console.log("This message appears every 2 seconds");
    counter++;
    
    // Stop after 5 executions
    if (counter >= 5) {
        clearInterval(myInterval);
        console.log("Interval stopped after 5 executions");
    }
}, 2000);

// To stop the interval execution manually:
// clearInterval(myInterval)
