const express = require('express');
const db = require('./config/mongoose_connection');
const ownersRouter=require('./routes/ownersRouter')
const productRouter=require('./routes/productRouter')
const userRouter = require('./routes/userRouter');
const app=express();
const PORT=3000;

const cookieParrser=require('cookie-parser');
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParrser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.use("/owners",ownersRouter)
app.use("/user",userRouter)
app.use("/product",productRouter)


app.listen(PORT,(res,err)=>{
    console.log(`server is running on port ${PORT}`); 
});
