// Basic async/await example
async function fetchData() {
    try {
        console.log("Fetching data...");
        
        // Simulate API call with a promise
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data successfully retrieved");
                // Uncomment to test error handling:
                // reject("Error fetching data");
            }, 2000);
        });
        
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error caught:", error);
        throw error;
    } finally {
        console.log("Fetch operation completed");
    }
}

// Using the async function
console.log("Program started");

fetchData()
    .then(data => {
        console.log("Processed data:", data);
        return "Processing complete";
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("Error in main flow:", error);
    });

console.log("Program continues execution while fetchData runs asynchronously");

// Multiple async operations in parallel
async function fetchMultipleData() {
    try {
        console.log("Fetching multiple data sources...");
        
        // Run multiple async operations in parallel
        const results = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve("Data from source 1"), 1500)),
            new Promise(resolve => setTimeout(() => resolve("Data from source 2"), 1000)),
            new Promise(resolve => setTimeout(() => resolve("Data from source 3"), 2000))
        ]);
        
        console.log("All data fetched:", results);
    } catch (error) {
        console.error("Error fetching multiple data:", error);
    }
}

fetchMultipleData();
