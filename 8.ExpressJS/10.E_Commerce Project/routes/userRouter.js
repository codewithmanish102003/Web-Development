const express = require('express');
const router=express.Router()
const isLoggedInUser = require('../middlewares/isLoggedInUser');
const {registerUser,loginUser,logout}=require("../controllers/authController")


router.get("/",(req,res)=>{
    res.send("hey")
})

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/logout',logout)

router.get('/profile', isLoggedInUser, async (req, res) => {
    res.send("profile")
});

module.exports=router ;  //exporting the router to use in other files.