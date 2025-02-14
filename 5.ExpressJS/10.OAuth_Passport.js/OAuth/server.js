require('dotenv').config();
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// 🛠️ Session Middleware (Required for maintaining login sessions)
app.use(session({
    secret: 'mysecretkey', 
    resave: false, 
    saveUninitialized: true
}));

// 🛠️ Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// 🛠️ Configure Google OAuth Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "/auth/google/callback"
// }, (accessToken, refreshToken, profile, done) => {
//     return done(null, profile);
// }));
(passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    console.log("User Profile:", profile);  // Logs user info to the console
    return done(null, profile);
})));


// 🛠️ Serialize & Deserialize User (for session handling)
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

// 🏠 Home Route
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1><a href="/auth/google">Login with Google</a>`);
});

// 🔑 Google Authentication Route
app.get('/auth/google', 
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

// 🔄 Google OAuth Callback Route
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect to dashboard after login
    }
);

// 🎯 Dashboard Route (Only for Logged-in Users)
// app.get('/dashboard', (req, res) => {
//     if (!req.isAuthenticated()) {
//         return res.redirect('/');
//     }
//     res.send(`
//         <h1>Welcome, ${req.user.displayName}</h1>
//         <p>Email: ${req.user.emails[0].value}</p>
//         <p>Google ID: ${req.user.id}</p>
//         <img src="${req.user.photos[0].value}" alt="Profile Picture" />
//         <br><a href="/logout">Logout</a>
//     `);
// });
app.get('/dashboard', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }

    const user = req.user;
    const profilePicture = user.photos && user.photos.length > 0 ? user.photos[0].value.replace('=s96-c', '=s400-c') : 'https://via.placeholder.com/150';


    res.send(`
        <h1>Welcome, ${user.displayName}</h1>
        <p>Email: ${user.emails[0].value}</p>
        <p>Google ID: ${user.id}</p>
        <img src="${profilePicture}" alt="Profile Picture" width="150" height="150"/>
        <br><a href="/logout">Logout</a>
    `);
});

// 🚪 Logout Route
app.get('/logout', (req, res) => {
    req.logout(() => { // Ensure logout completes before redirecting
        res.redirect('/');
    });
});

// Start the Express Server
app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
