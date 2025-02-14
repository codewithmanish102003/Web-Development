require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const User = require('./models/user');

const app = express();

// 🛠 Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Check required environment variables
const requiredEnvVars = ['MONGO_URI', 'EMAIL_USER', 'EMAIL_PASS', 'JWT_SECRET', 'PORT'];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        console.error(`❌ Missing required environment variable: ${varName}`);
        process.exit(1);
    }
});

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB")).catch(err => {
    console.error(err);
    process.exit(1);
});

// 📧 Configure Nodemailer
let transporter;
try {
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
} catch (error) {
    console.error('❌ Failed to configure Nodemailer', error);
    process.exit(1);
}

// 🔑 Generate OTP
const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
};

// 🚀 Routes

// 📌 Request OTP
app.post('/request-otp', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email is required' });

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ email });
        }

        // Generate & Save OTP
        const otp = generateOTP();
        user.otp = otp;
        user.otpExpires = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes
        await user.save();

        // Send OTP via Email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP is: ${otp}. It is valid for 5 minutes.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Error sending OTP:', error);
                return res.status(500).json({ error: 'Failed to send OTP' });
            }
            res.json({ message: 'OTP sent successfully' });
        });
    } catch (error) {
        console.error('❌ Error in /request-otp route', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 📌 Verify OTP & Login
app.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        // Clear OTP after successful login
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        // Generate JWT Token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('❌ Error in /verify-otp route', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// 📌 Protected Route
app.get('/dashboard', (req, res) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.json({ message: `Welcome user ${decoded.email}` });
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
});

// 🚪 Logout
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
});

// Start Server
app.listen(process.env.PORT, () => console.log(`🚀 Server running on http://localhost:${process.env.PORT}`));