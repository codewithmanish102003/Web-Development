const express = require('express'); 
const cookieParser=require('cookie-parser')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app=express()
app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    let token=jwt.sign({email:"manish@123.com"},"secret")
    res.cookie("token",token)
    res.send("Cookies are accepted")
})

app.get('/read',(req,res)=>{
    try {
        let data = jwt.verify(req.cookies.token, "secret");
        res.send(data);
    } catch (error) {
        res.status(401).send("Invalid token"); // Handle token verification errors
    }
})


app.listen(3000)