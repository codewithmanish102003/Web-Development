// Import necessary modules
const express = require('express') // Express framework for building web applications
const userModel = require('./Models/user') // User model for database operations
const postModel = require('./Models/post') // Post model for database operations
const cookieParser = require('cookie-parser') // Middleware for parsing cookies
const bcrypt = require('bcrypt'); // Library for hashing passwords
const jwt = require("jsonwebtoken") // Library for creating and verifying JSON Web Tokens
const path = require('path');
const upload = require('./config/multerconfig');

// Initialize the Express application
const app = express()

// Set the view engine to EJS
app.set("view engine", "ejs")
// Middleware to parse JSON and URL-encoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser()) // Use cookie parser middleware
app.use(express.static(path.join(__dirname,"public")))


// Route to render the create User page
app.get('/create', (req, res) => {
    res.render('index') // Render the index view
})

app.get('/profile/upload', (req, res) => {
    res.render("userimg") // Render the login view
})


app.post('/upload',isLoggedIn,upload.single("image"),async (req, res) => {
    console.log(req.file);
    let user=await userModel.findOne({email:req.user.email})
    user.profilepic=req.file.filename
    await user.save()
    // res.send("File uploaded successfully")
res.redirect("/profile")
    
})


// Route to render the login page
app.get('/', (req, res) => {
    res.render("login") // Render the login view
})


// Route to render the login page (duplicate route)
app.get('/login', (req, res) => {
    res.render("login") // Render the login view
})

// Route to render the user's profile page
app.get('/profile', isLoggedIn, async (req, res) => {
    // Find the user by email and populate their posts
    let user = await userModel.findOne({ email: req.user.email }).populate("posts")

    // Check if user exists
    if (!user) {
        return res.status(404).render("notFound"); // Render the not found page if user does not exist
    }
    console.log(req.user); // Log the user information

    res.render('profile', { user }) // Render the profile view with user data
})

// Route to like or unlike a post
app.get('/like/:id', isLoggedIn, async (req, res) => {
    // Find the post by ID and populate the user who created it
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")

    // Check if the user has already liked the post
    if(post.likes.indexOf(req.user.userid) === -1){
        post.likes.push(req.user.userid) // Like the post
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1) // Unlike the post
    }
    await post.save() // Save the updated post
    res.redirect('/profile') // Redirect to the profile page
})

// Route to render the edit post page
app.get('/edit/:id', isLoggedIn, async (req, res) => {
    // Find the post by ID and populate the user who created it
    let post = await postModel.findOne({ _id: req.params.id }).populate("user")
    res.render("edit", { post }) // Render the edit view with post data
})

// Route to update a post's content
app.post('/update/:id', isLoggedIn, async (req, res) => {
    // Find the post by ID and update its content
    let post = await postModel.findOneAndUpdate({ _id: req.params.id }, { content: req.body.content })
    res.redirect("/profile") // Redirect to the profile page
})

// Route to delete a post
app.get('/delete/:id', isLoggedIn, async (req, res) => {
    try {
        // Find the post by ID
        let post = await postModel.findOne({ _id: req.params.id });

        // Check if the post exists
        if (!post) {
            return res.status(404).send("Post not found"); // Handle post not found
        }

        // Remove the post from the database
        await postModel.deleteOne({ _id: req.params.id });

        // Find the user and remove the post ID from their posts array
        let user = await userModel.findOne({ email: req.user.email });
        user.posts.splice(user.posts.indexOf(post._id), 1); // Remove post ID from user's posts
        await user.save(); // Save the updated user

        res.redirect('/profile'); // Redirect to the profile page after deletion
    } catch (error) {
        console.error(error); // Log any errors
        res.status(500).send("An error occurred while deleting the post"); // Handle server error
    }
});

// Route to create a new post
app.post('/post', isLoggedIn, async (req, res) => {
    // Find the user by email
    let user = await userModel.findOne({ email: req.user.email })
    let { content } = req.body // Get the content from the request body
    console.log(req.user); // Log the user information

    // Create a new post
    let post = await postModel.create({
        user: user._id, // Associate the post with the user
        content
    })

    // Add the post ID to the user's posts array
    user.posts.push(post._id)
    await user.save() // Save the updated user
    console.log("Post Created", post); // Log the created post

    res.redirect('/profile') // Redirect to the profile page
})

// Route to handle user login
app.post('/login', async (req, res) => {
    let { email, password } = req.body // Get email and password from the request body
    let user = await userModel.findOne({ email }) // Find the user by email
    if (!user) { return res.status(500).render("notFound") } // Handle user not found

    // Compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
            // Generate a JWT token if the password matches
            let token = jwt.sign({ email: email, userid: user._id }, "secret")
            res.cookie("token", token) 
            res.status(200).redirect("/profile") // Set the token in a cookie and redirect to profile
        } else {
            res.redirect("/login") // Redirect to login if password does not match
        }
    })
})

// Route to handle user logout
app.get('/logout', (req, res) => {
    res.clearCookie("token") // Clear the token cookie
    res.redirect("/login") // Redirect to login page
})

// Route to handle user registration
app.post('/register', async (req, res) => {
    let { email, password, name, username, age } = req.body // Get user details from request body
    let user = await userModel.findOne({ email }) // Check if user already exists
    if (user) { return res.status(500).send("User  already registered") } // Handle user already registered
    else {
        // Hash the password before saving
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                // Create a new user with hashed password
                let user = await userModel.create({
                    username, name, age, email, password: hash
                })

                // Generate a JWT token for the new user
                let token = jwt.sign({ email: email, userid: user._id }, "secret")
                res.cookie("token", token) // Set the token in a cookie
                res.redirect("/login") // Send registration success response
            })
        })
    }
})

// Middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
    if (!req.cookies.token) {
        return res.redirect("/login");
    } else {
        try {
            let data = jwt.verify(req.cookies.token, "secret");
            req.user = data;
            next();
        } catch (error) {
            console.error(error);
            res.redirect("/login");
        }
    }
}

// Start the server and listen on the specified port
app.listen(3000, (res, err) => {
    console.log(`Server is running on port ${3000}`) // Log server start message
})