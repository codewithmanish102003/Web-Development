const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// In-memory user database (use a real database in production)
const users = [];

// User Registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Save user to the database
    users.push({ username, password: hashedPassword });
    res.status(201).send("User registered successfully");
});

// User Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Find the user
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).send("Invalid username or password");
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid username or password");
    }

    res.send("Login successful");
    console.log("login successfully");
    
});

// Start the server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
