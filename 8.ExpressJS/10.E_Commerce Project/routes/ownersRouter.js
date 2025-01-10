const express = require('express');
const router=express.Router()
const ownerModel=require("../models/owners_model")

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV==="development") {
    router.post("/create",async function(req,res){
       let owners=await ownerModel.find();
       if(owners.length>0){
        return res.status(504).send("You Don't have permission to create a new owner.")
       }else{
        let {fullname,email,password}=req.body
       let createdOwner=await ownerModel.create({
            fullname,
            email,
            password,
        })
        res.status(201).send(createdOwner)
       }
    })
}


router.get("/",(req,res)=>{
    res.send("hey")
})

router.get("/admin",(req,res)=>{
    let success=req.flash("success")
    res.render("createproducts",{success})
})


module.exports=router