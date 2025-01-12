const express = require('express');
const cookieParser=require('cookie-parser')
const app=express()

const PORT=3000

app.use(cookieParser())

app.get('/set',(req,res)=>{
   
    res.cookie('username',"jhon",{maxAge:3600000,httpOnly:true})
    res.send("Hello from cokkies , cokkies are set")
})

app.get('/get',(req,res)=>{
    const username=req.cookies.username
    res.send(`cookie value : ${username}`)
})

app.get('/clear',(req,res)=>{
    const username=req.cookies.username
    res.clearCookie('username')
    res.send(`cookie value : ${username}`)
})


app.listen(3000)