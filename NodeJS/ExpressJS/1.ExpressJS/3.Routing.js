const express = require('express');
const app = express();
const router = express.Router();
app.use(express.static('public')); // Serve static files from "public" folder


// Define routes
router.get('/', (req, res) => res.sendFile('route/index.html',{root:__dirname}));
router.get('/about', (req, res) => res.send('About Page'));

// Use the router
app.use('/', router);

// Start the server
app.listen(3030, () => {
    console.log('Server is running on http://localhost:3030');
});
