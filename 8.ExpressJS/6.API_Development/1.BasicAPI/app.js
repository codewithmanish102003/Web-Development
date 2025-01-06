const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// JSON file path
const dataFilePath = path.join(__dirname, 'data', 'data.json');

// Middleware to parse JSON
app.use(express.json());

// GET: Fetch all items
app.get('/items', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data' });
        }
        res.json(JSON.parse(data));
    });
});

// GET: Fetch single item by ID
app.get('/items/:id', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data' });
        }
        const items = JSON.parse(data);
        const item = items.find(i => i.id === parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    });
});

// POST: Create new item
app.post('/items', (req, res) => {
    const { name } = req.body; // Change res.body to req.body

    // Read the existing items from the JSON file
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data' });
        }
        const items = JSON.parse(data); // Parse the existing items

        const newItem = { id: items.length + 1, name }; // Create new item
        items.push(newItem); // Add new item to the array

        // Write the updated items back to the JSON file
        fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving data' });
            }
            res.status(201).json(newItem); // Respond with the new item
        });
    });
});


// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
