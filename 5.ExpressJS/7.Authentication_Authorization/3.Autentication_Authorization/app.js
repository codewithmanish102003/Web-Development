const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("<h1>Authentication and Authorization</h1>")
})

app.get('/log',(req,res)=>{
    bcrypt.genSalt(10,(err,salt)=>{
    //    console.log(salt)
    const pass=bcrypt.hash("marveluniverse",salt,(err,hash)=>{
        console.log(hash);
    })
    })
    res.send("Hashed password")
})




app.listen(PORT)