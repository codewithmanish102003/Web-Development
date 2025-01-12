const express = require('express');
const session = require('express-session');

const app=express()

app.get('/',(req,res)=>{
    res.send("Hello from Sessions")
})

// Configure session middleware
app.use(session({
    secret: 'mySecretKey', // Secret key to sign the session ID cookie
    resave: false, // Do not save session if unmodified
    saveUninitialized: true, // Save new sessions that are uninitialized
    cookie: { maxAge: 3600000 } // Session expires after 1 hour
}));

// Set session data
app.get('/set', (req, res) => {
    req.session.username = 'JohnDoe';
    res.send('Session data has been set');
});

// Get session data
app.get('/get', (req, res) => {
    const username = req.session.username;
    res.send(`Session value: ${username}`);
});

// Destroy session
app.get('/destroy', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.send('Error destroying session');
        res.clearCookie('connect.sid'); // Clear session cookie
        res.send('Session destroyed');
    });
});



app.listen(3000,()=>{
    console.log(`server is running on port ${3000}`)
})