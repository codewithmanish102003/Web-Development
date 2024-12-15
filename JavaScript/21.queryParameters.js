// Function to create a query string from an object
function createQueryString(params) {
    const queryString = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    return queryString;
}

// Example usage
const params = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

const queryString = createQueryString(params);
console.log("Query String:", queryString); // Query String: name=John%20Doe&age=30&city=New%20York

const url = `https://example.com/search?${queryString}`;
console.log("URL with Query String:", url); // URL with Query String: https://example.com/search?name=John%20Doe&age=30&city=New%20York
