const express = require('express');
const isLoggedInUser = require('../middlewares/isLoggedInUser');
const productModel = require('../models/product_model');
const userModel = require('../models/user_model');
const router = express.Router();

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error ,loggedin:false });
});

router.get('/shop', isLoggedInUser, async (req, res) => {
    try {
        let products = await productModel.find({});
        let error = req.flash("error");
        let success = req.flash("success");
        res.render("shop", { products, error, success,loggedin:true });
    } catch (err) {
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
});

router.get('/addtocart/:id', isLoggedInUser, async (req, res) => {
   let user=await userModel.findOne({email:req.user.email})
   user.cart.push(req.params.id)
    await user.save()
    req.flash("success", "Product added to cart")
    res.redirect('/shop')
});


router.get('/cart', isLoggedInUser, async (req, res) => {
    let user
    try {
        user
        = await userModel.findOne({ email: req.user.email }).populate("cart")
        let total=Number(user.cart[0].price)+20 - Number(user.cart[0].discount)
        let error = req.flash("error");
        let success = req.flash("success");
        res.render("cart", { user, error, success,total,loggedin:true });
    } catch (err) {
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
 });
module.exports = router;