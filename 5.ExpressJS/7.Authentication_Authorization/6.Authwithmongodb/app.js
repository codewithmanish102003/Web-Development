const express = require('express');
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser')
const userModel = require("./models/user")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

app.set('view engine', "ejs")
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/create', (req, res) => {

    let { name, email, age, password } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let createdUser = await userModel.create({
                name,
                email,
                age,
                password: hash
            })
            console.log(password);
            
            let token = jwt.sign({ email }, "secret")
            res.cookie("token", token)
            res.redirect("login")
        })
    })

})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post('/login', async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.send("Something is wrong")
    bcrypt.compare(req.body.password, user.password, (err, result) => {
console.log(user.password);

        if (result) {
            let token = jwt.sign({ email: user.email }, "secret")
            res.cookie("token", token)
            res.send("Can see your profile")
        }
        else res.send("Something is wrong")
    })

})

app.get('/logout', (req, res) => {
    res.cookie("token", "")
    res.redirect("/")
})



app.listen(5000)