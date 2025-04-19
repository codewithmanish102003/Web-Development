// Function to display a message
function myDisplayer(greet) {
    console.log(greet); // Logs the message to the console
}

// Function to display "Hello"
function myfirst() {
    myDisplayer("Hello"); // Calls myDisplayer with "Hello"
}

// Function to display "Good Bye!" after a delay
function mySecond() {
    setTimeout(() => {
        myDisplayer("Good Bye!"); // Calls myDisplayer with "Good Bye!" after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the functions
myfirst();  // Executes myfirst, which logs "Hello"
mySecond(); // Executes mySecond, which logs "Good Bye!" after a delay