const express = require('express');
const router = express.Router();
const upload = require('../config/multer_config');
const productModel = require('../models/product_model');

router.post('/create', upload.single('image'), async (req, res) => {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        console.log(req.file);
        let product = await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor,
        });
        req.flash("success", "Product created successfully");
        res.status(201).redirect("/owners/admin");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;