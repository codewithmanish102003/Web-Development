const express = require('express');
const app=express()
const PORT=3000

const cookieParrser=require('cookie-parser')
const path=require('path')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParrser())
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,(res,err)=>{
    console.log(`server is running on port ${PORT}`); 
})
