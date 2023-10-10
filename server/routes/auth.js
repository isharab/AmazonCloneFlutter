const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    const existingUsr = await User.findOne({email});
    if (existingUsr) {
        return res.status(400).json({ message: 'User already exists' });
    }

    let user = new User({
        name,
        email,
        password,
    });

    user.save((err, savedUser) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        return res.status(200).json({ message: 'User successfully created', user: savedUser });
    });
});

module.exports = authRouter;