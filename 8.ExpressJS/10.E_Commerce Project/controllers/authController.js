const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async (req, res) => {
    try {
        let { email, fullname, password } = req.body;

        let user = await userModel.findOne({ email: email });
        if (user) {
            req.flash('error', 'You already have an account, please login');
            return res.redirect('/');
        }

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.send(err.message);
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                let user = await userModel.create({
                    email,
                    password: hash,
                    fullname
                });

                let token = generateToken(user);
                res.cookie("token", token);
                req.flash('success', 'User Created Successfully');
                res.redirect('/');
            });
        });

    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/');
    }
};

module.exports.loginUser = async (req, res) => {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email: email });
    if (!user) {
        req.flash('error', 'Email or Password incorrect');
        return res.redirect('/');
    }

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);
            req.flash('success', 'You can login');
            res.redirect("/shop");
        } else {
            req.flash('error', 'Email or Password Incorrect');
            return res.redirect('/');
        }
    });
};

module.exports.logout = (req, res) => {
    res.clearCookie("token");
    req.flash('success', 'Logged out successfully');
    res.redirect("/");
}