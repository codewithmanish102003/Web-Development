const express = require('express');
const app = express();

app.use(express.static("public"))

// GET request
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});

// post , delete , put not working  since by default it is get
// POST request 
app.post('/', (req, res) => {
    console.log("hey its a post request")
    res.send('hello from post request,Data submitted successfully');
});

// PUT request
app.put('/update', (req, res) => {
    res.send('Data updated successfully');
});

// DELETE request
app.delete('/delete', (req, res) => {
    res.send('Data deleted successfully');
});

//Using Multiple methods together
// app.route('/user')
//     .get((req, res) => res.send('Get User'))
//     .post((req, res) => res.send('Create User'))
//     .put((req, res) => res.send('Update User'))
//     .delete((req, res) => res.send('Delete User'));


//Route Parameters
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

//Search Query
app.get('/search', (req, res) => {
    const { q } = req.query; // Extract `q` from the query string
    res.send(`Search query: ${q}`);
});



// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
